const express = require('express');
const Database = require('better-sqlite3');
const cors = require('cors');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// ── Banco de dados ─────────────────────────────
const db = new Database('digita.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS results (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    name      TEXT    NOT NULL,
    wpm       INTEGER NOT NULL,
    accuracy  INTEGER NOT NULL,
    errors    INTEGER NOT NULL DEFAULT 0,
    chars     INTEGER NOT NULL DEFAULT 0,
    words     INTEGER NOT NULL DEFAULT 0,
    duration  INTEGER NOT NULL DEFAULT 0,
    mode      TEXT    NOT NULL DEFAULT '15s',
    created_at TEXT   NOT NULL DEFAULT (datetime('now','localtime'))
  );

  CREATE TABLE IF NOT EXISTS daily_best (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    name      TEXT    NOT NULL,
    wpm       INTEGER NOT NULL,
    accuracy  INTEGER NOT NULL,
    mode      TEXT    NOT NULL,
    day       TEXT    NOT NULL,
    created_at TEXT   NOT NULL DEFAULT (datetime('now','localtime')),
    UNIQUE(name, mode, day)
  );
`);

// ── Prepared statements ────────────────────────
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

// ── Middleware ─────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ── Helpers ────────────────────────────────────
function broadcastRanking() {
  const payload = {
    allTime : getAllTimeTop.all(),
    today   : getTodayTop.all(),
    recent  : getRecentResults.all(),
    stats   : getStats.get(),
  };
  io.emit('ranking_update', payload);
}

// ── Rotas ──────────────────────────────────────
app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.post('/api/results', (req, res) => {
  const { name, wpm, accuracy, errors = 0, chars = 0,
          words = 0, duration = 0, mode = '15s' } = req.body;

 if (!name || wpm == null || accuracy == null)
    return res.status(400).json({ error: 'Campos obrigatórios ausentes' });

  const today = new Date().toISOString().slice(0, 10);

  insertResult.run({ name, wpm, accuracy, errors, chars, words, duration, mode });
  upsertDailyBest.run({ name, wpm, accuracy, mode, day: today });

  broadcastRanking();
  res.json({ ok: true });
});

app.get('/api/ranking', (_req, res) => {
  res.json({
    allTime : getAllTimeTop.all(),
    today   : getTodayTop.all(),
    recent  : getRecentResults.all(),
    stats   : getStats.get(),
  });
});

app.get('/api/ranking/mode/:mode', (req, res) => {
  res.json(getModeTop.all(req.params.mode));
});

// ── Socket.IO ──────────────────────────────────
io.on('connection', socket => {
  // Envia dados imediatamente ao conectar
  socket.emit('ranking_update', {
    allTime : getAllTimeTop.all(),
    today   : getTodayTop.all(),
    recent  : getRecentResults.all(),
    stats   : getStats.get(),
  });

  socket.on('request_ranking', () => {
    socket.emit('ranking_update', {
      allTime : getAllTimeTop.all(),
      today   : getTodayTop.all(),
      recent  : getRecentResults.all(),
      stats   : getStats.get(),
    });
  });
});

// ── Start ──────────────────────────────────────
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`\n🖥️  Digita Server rodando em http://localhost:${PORT}\n`);
});