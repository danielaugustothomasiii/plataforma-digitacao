const express = require('express');
const Database = require('better-sqlite3');
const cors = require('cors');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// ── Configurações ──────────────────────────────
const MAX_USERS = 1000;

// ── Banco de dados ─────────────────────────────
const DB_PATH = path.join(__dirname, 'digita.db');
const db = new Database(DB_PATH, { fileMustExist: false });

db.pragma('journal_mode = WAL');
db.pragma('synchronous = NORMAL');

// Cada tabela separada — evita falha em bloco quando banco já existe
db.exec(`CREATE TABLE IF NOT EXISTS results (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  name       TEXT    NOT NULL,
  wpm        INTEGER NOT NULL,
  accuracy   INTEGER NOT NULL,
  errors     INTEGER NOT NULL DEFAULT 0,
  chars      INTEGER NOT NULL DEFAULT 0,
  words      INTEGER NOT NULL DEFAULT 0,
  duration   INTEGER NOT NULL DEFAULT 0,
  mode       TEXT    NOT NULL DEFAULT '15s',
  created_at TEXT    NOT NULL DEFAULT (datetime('now','localtime'))
)`);

db.exec(`CREATE TABLE IF NOT EXISTS daily_best (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  name       TEXT    NOT NULL,
  wpm        INTEGER NOT NULL,
  accuracy   INTEGER NOT NULL,
  mode       TEXT    NOT NULL,
  day        TEXT    NOT NULL,
  created_at TEXT    NOT NULL DEFAULT (datetime('now','localtime')),
  UNIQUE(name, mode, day)
)`);

db.exec(`CREATE TABLE IF NOT EXISTS users (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  name       TEXT    NOT NULL UNIQUE,
  created_at TEXT    NOT NULL DEFAULT (datetime('now','localtime'))
)`);

// Migração: importa nomes já existentes em results para a tabela users
db.exec(`INSERT OR IGNORE INTO users (name, created_at)
  SELECT name, MIN(created_at) FROM results GROUP BY name`);

// ── Prepared statements ────────────────────────
const countUsers = db.prepare(`SELECT COUNT(*) as total FROM users`);
const findUser   = db.prepare(`SELECT id FROM users WHERE name = ?`);
const insertUser = db.prepare(`INSERT OR IGNORE INTO users (name) VALUES (?)`);

const insertResult = db.prepare(`
  INSERT INTO results (name, wpm, accuracy, errors, chars, words, duration, mode)
  VALUES (@name, @wpm, @accuracy, @errors, @chars, @words, @duration, @mode)
`);

const upsertDailyBest = db.prepare(`
  INSERT INTO daily_best (name, wpm, accuracy, mode, day)
  VALUES (@name, @wpm, @accuracy, @mode, @day)
  ON CONFLICT(name, mode, day) DO UPDATE SET
    wpm      = CASE WHEN excluded.wpm > daily_best.wpm THEN excluded.wpm ELSE daily_best.wpm END,
    accuracy = CASE WHEN excluded.wpm > daily_best.wpm THEN excluded.accuracy ELSE daily_best.accuracy END
`);

const getAllTimeTop = db.prepare(`
  SELECT name, MAX(wpm) as wpm, accuracy, mode, created_at
  FROM results
  GROUP BY name
  ORDER BY wpm DESC
  LIMIT 50
`);

const getTodayTop = db.prepare(`
  SELECT name, wpm, accuracy, mode, created_at
  FROM daily_best
  WHERE day = date('now','localtime')
  ORDER BY wpm DESC
  LIMIT 50
`);

const getModeTop = db.prepare(`
  SELECT name, MAX(wpm) as wpm, accuracy, mode, created_at
  FROM results
  WHERE mode = ?
  GROUP BY name
  ORDER BY wpm DESC
  LIMIT 50
`);

const getRecentResults = db.prepare(`
  SELECT name, wpm, accuracy, mode, created_at
  FROM results
  ORDER BY id DESC
  LIMIT 20
`);

const getStats = db.prepare(`
  SELECT
    COUNT(*)              as total_tests,
    COUNT(DISTINCT name)  as total_players,
    MAX(wpm)              as record_wpm,
    ROUND(AVG(wpm))       as avg_wpm
  FROM results
`);

const getAllUsers = db.prepare(`
  SELECT name, created_at FROM users ORDER BY created_at DESC
`);

// ── Transação atômica para salvar resultado ────
const saveResultTransaction = db.transaction((data) => {
  const { name, wpm, accuracy, errors, chars, words, duration, mode, today } = data;

  const existingUser = findUser.get(name);

  if (!existingUser) {
    const { total } = countUsers.get();
    if (total >= MAX_USERS) {
      return { ok: false, error: 'LIMIT_REACHED', total };
    }
    insertUser.run(name);
  }

  insertResult.run({ name, wpm, accuracy, errors, chars, words, duration, mode });
  upsertDailyBest.run({ name, wpm, accuracy, mode, day: today });

  return { ok: true };
});

// ── Middleware ─────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ── Helpers ────────────────────────────────────
function getRankingPayload() {
  return {
    allTime  : getAllTimeTop.all(),
    today    : getTodayTop.all(),
    recent   : getRecentResults.all(),
    stats    : getStats.get(),
    userCount: countUsers.get().total,
    maxUsers : MAX_USERS,
  };
}

function broadcastRanking() {
  io.emit('ranking_update', getRankingPayload());
}

// ── Rotas ──────────────────────────────────────
app.get('/api/health', (_req, res) => {
  const { total } = countUsers.get();
  res.json({ ok: true, userCount: total, maxUsers: MAX_USERS, slots: MAX_USERS - total });
});

app.post('/api/results', (req, res) => {
  try {
    const {
      name,
      wpm,
      accuracy,
      errors   = 0,
      chars    = 0,
      words    = 0,
      duration = 0,
      mode     = '15s',
    } = req.body;

    if (!name || typeof name !== 'string' || name.trim() === '')
      return res.status(400).json({ error: 'Nome é obrigatório' });
    if (wpm == null || isNaN(Number(wpm)))
      return res.status(400).json({ error: 'WPM é obrigatório' });
    if (accuracy == null || isNaN(Number(accuracy)))
      return res.status(400).json({ error: 'Precisão é obrigatória' });

    const cleanName = name.trim().slice(0, 30);
    const today = new Date().toISOString().slice(0, 10);

    const result = saveResultTransaction({
      name    : cleanName,
      wpm     : Math.round(Number(wpm)),
      accuracy: Math.round(Number(accuracy)),
      errors  : Number(errors)   || 0,
      chars   : Number(chars)    || 0,
      words   : Number(words)    || 0,
      duration: Number(duration) || 0,
      mode,
      today,
    });

    if (!result.ok) {
      return res.status(403).json({
        error   : 'Limite de usuários atingido',
        code    : result.error,
        total   : result.total,
        maxUsers: MAX_USERS,
      });
    }

    broadcastRanking();
    return res.json({ ok: true });

  } catch (err) {
    console.error('[POST /api/results] Erro:', err.message);
    return res.status(500).json({ error: err.message });
  }
});

app.get('/api/ranking', (_req, res) => {
  try {
    res.json(getRankingPayload());
  } catch (err) {
    console.error('[GET /api/ranking] Erro:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/ranking/mode/:mode', (req, res) => {
  try {
    res.json(getModeTop.all(req.params.mode));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/users', (_req, res) => {
  try {
    const { total } = countUsers.get();
    res.json({ total, maxUsers: MAX_USERS, slots: MAX_USERS - total, users: getAllUsers.all() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/users/check/:name', (req, res) => {
  try {
    const name = req.params.name.trim();
    const user = findUser.get(name);
    const { total } = countUsers.get();
    res.json({
      exists     : !!user,
      canRegister: !!user || total < MAX_USERS,
      userCount  : total,
      maxUsers   : MAX_USERS,
      slotsLeft  : MAX_USERS - total,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── Socket.IO ──────────────────────────────────
io.on('connection', socket => {
  socket.emit('ranking_update', getRankingPayload());
  socket.on('request_ranking', () => socket.emit('ranking_update', getRankingPayload()));
});

// ── Start ──────────────────────────────────────
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  const { total } = countUsers.get();
  console.log(`\n🖥️  Digita Server rodando em http://localhost:${PORT}`);
  console.log(`👥 Usuários cadastrados: ${total}/${MAX_USERS}\n`);
});