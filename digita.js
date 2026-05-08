/* =============================================
   TYPERUSH — app.js
   ============================================= */

// ── Word Lists ──────────────────────────────────
const WORDS_PT = [
  "a", "o", "de", "que", "e", "do", "da", "em", "um", "para",
  "com", "uma", "os", "no", "se", "na", "por", "mais", "as", "dos",
  "como", "mas", "foi", "ao", "ele", "das", "tem", "à", "seu", "sua",
  "ou", "ser", "quando", "muito", "há", "nos", "já", "está", "eu",
  "também", "só", "pelo", "pela", "até", "isso", "ela", "entre",
  "era", "depois", "sem", "mesmo", "aos", "ter", "seus", "quem",
  "nas", "me", "esse", "eles", "estão", "você", "tinha", "foram",
  "essa", "num", "nem", "suas", "meu", "às", "minha", "têm", "numa",
  "pelos", "elas", "havia", "seja", "qual", "será", "nós", "tenho",
  "lhe", "deles", "essas", "esses", "pelas", "este", "fosse", "dele",
  "verdade", "tempo", "pessoa", "mundo", "vida", "casa", "trabalho",
  "cidade", "parte", "grande", "lugar", "novo", "forma", "ainda",
  "sempre", "então", "tudo", "todos", "dia", "homem", "tanto",
  "hoje", "família", "governo", "estado", "forma", "poder",
  "seguir", "coisa", "olhar", "nunca", "tarde", "pouco", "dizer",
  "fazer", "saber", "pensar", "criar", "viver", "querer", "deixar",
  "chegar", "partir", "levar", "trazer", "escrever", "falar", "ouvir",
  "ver", "dar", "ir", "vir", "ficar", "abrir", "fechar", "entrar",
  "sair", "passar", "começar", "acabar", "continuar", "mudar",
  "encontrar", "perder", "ganhar", "quebrar", "construir", "crescer",
  "aprender", "ensinar", "estudar", "trabalhar", "ajudar", "amar",
  "sonho", "água", "luz", "noite", "vento", "fogo", "terra", "céu",
  "chuva", "mar", "rio", "árvore", "flor", "pedra", "nuvem", "sol",
  "estrela", "campo", "montanha", "praia", "floresta", "jardim",
  "livro", "palavra", "história", "música", "arte", "ciência",
  "tecnologia", "computador", "internet", "código", "programa",
  "sistema", "dados", "rede", "digital", "software", "hardware",
];

const SENTENCES_PT = [
  "a tecnologia mudou a forma como vivemos e trabalhamos todos os dias",
  "o sol nasceu mais uma vez trazendo nova esperança para todos nós",
  "aprender a programar abre infinitas possibilidades no mundo moderno",
  "a leitura diária expande o vocabulário e aguça a mente humana",
  "cada linha de código escrita é um passo em direção ao futuro",
  "o vento soprava forte enquanto as folhas caíam silenciosamente",
  "construir algo do zero exige dedicação paciência e muito esforço",
  "o mar infinito guarda segredos que nunca serão totalmente revelados",
  "com prática constante qualquer habilidade pode ser aperfeiçoada",
  "a criatividade floresce quando damos liberdade para nossa imaginação",
];

// ── State ───────────────────────────────────────
const state = {
  mode: 15,
  words: [],
  input: '',
  wordIndex: 0,
  charIndex: 0,
  started: false,
  finished: false,
  startTime: null,
  timer: null,
  timeLeft: 15,
  errors: 0,
  totalTyped: 0,
  correctChars: 0,
  wpmHistory: [],
  wpmInterval: null,
  focused: false,
  customMode: false,
};

// ── DOM Refs ─────────────────────────────────────
const $ = id => document.getElementById(id);
const typingBox     = $('typingBox');
const wordsContainer = $('wordsContainer');
const typingInput   = $('typingInput');
const clickHint     = $('clickHint');
const wpmDisplay    = $('wpmDisplay');
const accDisplay    = $('accDisplay');
const timerDisplay  = $('timerDisplay');
const errDisplay    = $('errDisplay');
const modalOverlay  = $('modalOverlay');
const toast         = $('toast');

// ── Init ─────────────────────────────────────────
function init(newText = true) {
  clearInterval(state.timer);
  clearInterval(state.wpmInterval);
  Object.assign(state, {
    input: '',
    wordIndex: 0,
    charIndex: 0,
    started: false,
    finished: false,
    startTime: null,
    errors: 0,
    totalTyped: 0,
    correctChars: 0,
    wpmHistory: [],
    timeLeft: state.customMode ? Infinity : state.mode,
  });

  if (newText) {
    state.words = generateWords();
  }

  renderWords();
  updateStats(false);
  typingInput.value = '';
  modalOverlay.classList.remove('active');
  clickHint.style.opacity = '1';

  timerDisplay.textContent = state.customMode ? '∞' : state.mode + 's';
}

function generateWords() {
  if (state.customMode) {
    const sentence = SENTENCES_PT[Math.floor(Math.random() * SENTENCES_PT.length)];
    return sentence.split(' ');
  }
  const count = state.mode <= 15 ? 40 : state.mode <= 30 ? 70 : 120;
  const shuffled = [...WORDS_PT].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// ── Render ───────────────────────────────────────
function renderWords() {
  wordsContainer.innerHTML = '';
  state.words.forEach((word, wi) => {
    const wEl = document.createElement('span');
    wEl.className = 'word';
    wEl.dataset.index = wi;
    [...word].forEach((char, ci) => {
      const lEl = document.createElement('span');
      lEl.className = 'letter';
      lEl.dataset.wi = wi;
      lEl.dataset.ci = ci;
      lEl.textContent = char;
      wEl.appendChild(lEl);
    });
    wordsContainer.appendChild(wEl);
  });
  updateCursor();
}

function updateCursor() {
  // Remove old cursor
  wordsContainer.querySelectorAll('.cursor').forEach(el => el.classList.remove('cursor'));

  const wordEls = wordsContainer.querySelectorAll('.word');
  if (state.wordIndex >= wordEls.length) return;
  const wEl = wordEls[state.wordIndex];
  const letters = wEl.querySelectorAll('.letter');

  if (state.charIndex < letters.length) {
    letters[state.charIndex].classList.add('cursor');
  } else {
    // cursor after last char
    const last = letters[letters.length - 1];
    if (last) {
      // create virtual cursor span after word
      const cursor = document.createElement('span');
      cursor.className = 'letter cursor';
      cursor.textContent = '';
      wEl.appendChild(cursor);
    }
  }

  // Scroll into view
  const wElActive = wordEls[state.wordIndex];
  if (wElActive) {
    const boxTop = typingBox.getBoundingClientRect().top;
    const wTop = wElActive.getBoundingClientRect().top;
    const diff = wTop - boxTop;
    if (diff > typingBox.clientHeight * 0.5) {
      typingBox.scrollTop += diff - typingBox.clientHeight * 0.4;
    }
  }
}

// ── Input Handler ────────────────────────────────
typingInput.addEventListener('input', handleInput);
typingInput.addEventListener('keydown', handleKeydown);

function handleInput(e) {
  if (state.finished) return;
  const val = typingInput.value;

  if (!state.started) startTest();

  const currentWord = state.words[state.wordIndex];
  if (!currentWord) return;

  // Space pressed → advance word
  if (val.endsWith(' ')) {
    const typed = val.trim();
    markWord(state.wordIndex, typed);
    if (typed !== currentWord) state.errors++;
    state.totalTyped += typed.length + 1;
    state.correctChars += countCorrect(typed, currentWord) + 1;
    state.wordIndex++;
    state.charIndex = 0;
    typingInput.value = '';

    if (state.customMode && state.wordIndex >= state.words.length) {
      finishTest();
      return;
    }
    updateCursor();
    updateStats(true);
    return;
  }

  // Update live char rendering
  state.charIndex = val.length;
  markLive(state.wordIndex, val);
  updateCursor();
  updateStats(true);
}

function handleKeydown(e) {
  if (e.key === 'Tab') {
    e.preventDefault();
    init(false);
    focusInput();
    return;
  }
  if (e.key === 'Backspace') {
    if (typingInput.value.length === 0 && state.wordIndex > 0) {
      // go back a word
      state.wordIndex--;
      const prevWord = state.words[state.wordIndex];
      typingInput.value = '';
      state.charIndex = 0;
      // Reset previous word visuals
      unmarkWord(state.wordIndex);
      updateCursor();
    }
  }
}

function markLive(wi, typed) {
  const wordEls = wordsContainer.querySelectorAll('.word');
  if (wi >= wordEls.length) return;
  const wEl = wordEls[wi];
  // Remove extra spans
  wEl.querySelectorAll('.extra').forEach(e => e.remove());
  wEl.querySelectorAll('.cursor').forEach(e => {
    if (e.textContent === '') e.remove();
  });

  const letters = wEl.querySelectorAll('.letter');
  letters.forEach((lEl, ci) => {
    lEl.classList.remove('correct', 'incorrect', 'cursor');
    if (ci < typed.length) {
      lEl.classList.add(typed[ci] === lEl.textContent ? 'correct' : 'incorrect');
    }
  });

  // Extra chars
  if (typed.length > letters.length) {
    const extra = typed.slice(letters.length);
    [...extra].forEach(ch => {
      const span = document.createElement('span');
      span.className = 'letter extra incorrect';
      span.textContent = ch;
      wEl.appendChild(span);
    });
  }
}

function markWord(wi, typed) {
  const wordEls = wordsContainer.querySelectorAll('.word');
  if (wi >= wordEls.length) return;
  const wEl = wordEls[wi];
  wEl.querySelectorAll('.extra, .cursor').forEach(e => {
    if (e.textContent === '') e.remove();
  });
  const letters = wEl.querySelectorAll('.letter');
  const word = state.words[wi];
  letters.forEach((lEl, ci) => {
    lEl.classList.remove('correct', 'incorrect', 'cursor');
    if (ci < typed.length) {
      lEl.classList.add(typed[ci] === word[ci] ? 'correct' : 'incorrect');
    } else {
      lEl.classList.add('incorrect');
    }
  });
  if (typed !== word) wEl.classList.add('error-word');
}

function unmarkWord(wi) {
  const wordEls = wordsContainer.querySelectorAll('.word');
  if (wi >= wordEls.length) return;
  const wEl = wordEls[wi];
  wEl.classList.remove('error-word');
  wEl.querySelectorAll('.extra, .cursor').forEach(e => {
    if (e.dataset.ci === undefined) e.remove();
  });
  wEl.querySelectorAll('.letter').forEach(lEl => {
    lEl.classList.remove('correct', 'incorrect', 'cursor');
  });
}

function countCorrect(typed, word) {
  let c = 0;
  for (let i = 0; i < Math.min(typed.length, word.length); i++) {
    if (typed[i] === word[i]) c++;
  }
  return c;
}

// ── Start / Finish ───────────────────────────────
function startTest() {
  state.started = true;
  state.startTime = Date.now();
  clickHint.style.opacity = '0';

  if (!state.customMode) {
    state.timer = setInterval(() => {
      state.timeLeft--;
      timerDisplay.textContent = state.timeLeft + 's';
      if (state.timeLeft <= 0) finishTest();
    }, 1000);
  }

  // WPM history tracker
  state.wpmInterval = setInterval(() => {
    const elapsed = (Date.now() - state.startTime) / 60000;
    const wpm = elapsed > 0 ? Math.round((state.correctChars / 5) / elapsed) : 0;
    state.wpmHistory.push(wpm);
  }, 1000);
}

function finishTest() {
  clearInterval(state.timer);
  clearInterval(state.wpmInterval);
  state.finished = true;
  typingInput.blur();
  typingBox.classList.remove('focused');
  showResults();
}

// ── Stats Update ─────────────────────────────────
function updateStats(live) {
  const elapsed = state.startTime ? (Date.now() - state.startTime) / 60000 : 0;
  const wpm = elapsed > 0 ? Math.round((state.correctChars / 5) / elapsed) : 0;
  const total = state.totalTyped + (typingInput.value?.length || 0);
  const acc = total > 0
    ? Math.round(((total - state.errors) / total) * 100)
    : 100;

  if (live) {
    wpmDisplay.textContent = wpm;
    accDisplay.textContent = acc + '%';
    errDisplay.textContent = state.errors;
  } else {
    wpmDisplay.textContent = '—';
    accDisplay.textContent = '—';
    errDisplay.textContent = '—';
    if (!state.customMode) timerDisplay.textContent = state.mode + 's';
    else timerDisplay.textContent = '∞';
  }
}

// ── Results Modal ────────────────────────────────
function showResults() {
  const elapsed = (Date.now() - state.startTime) / 1000;
  const elapsedMin = elapsed / 60;
  const wpm = elapsedMin > 0 ? Math.round((state.correctChars / 5) / elapsedMin) : 0;
  const total = state.totalTyped;
  const acc = total > 0 ? Math.round(((total - state.errors) / total) * 100) : 100;

  $('finalWpm').textContent = wpm;
  $('finalAcc').textContent = acc + '%';
  $('finalTime').textContent = Math.round(elapsed) + 's';
  $('finalErrors').textContent = state.errors;
  $('finalChars').textContent = state.correctChars;
  $('finalWords').textContent = state.wordIndex;

  // Rating
  let rating = 'Iniciante 🐢';
  if (wpm >= 100) rating = 'Lendário ⚡';
  else if (wpm >= 80) rating = 'Expert 🔥';
  else if (wpm >= 60) rating = 'Avançado 🚀';
  else if (wpm >= 40) rating = 'Intermediário 💪';
  else if (wpm >= 20) rating = 'Aprendiz ✨';
  $('resultRating').textContent = rating;

  drawChart();
  modalOverlay.classList.add('active');

  // Save to Python API (if running)
  saveResultToAPI({
    wpm, accuracy: acc, errors: state.errors,
    chars: state.correctChars, words: state.wordIndex,
    duration: Math.round(elapsed),
    mode: state.customMode ? 'custom' : state.mode + 's',
  });
}

function drawChart() {
  const canvas = $('wpmChart');
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const W = canvas.offsetWidth || 500;
  const H = 100;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  ctx.scale(dpr, dpr);

  const data = state.wpmHistory;
  if (!data.length) return;

  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  const accent = isDark ? '#e8ff47' : '#1a1a2e';
  const gridColor = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
  const textColor = isDark ? '#6b6b7e' : '#9b9b9e';

  ctx.clearRect(0, 0, W, H);

  const maxVal = Math.max(...data, 1);
  const pad = { l: 36, r: 12, t: 10, b: 28 };
  const cW = W - pad.l - pad.r;
  const cH = H - pad.t - pad.b;

  // Grid lines
  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 1;
  [0, 0.5, 1].forEach(t => {
    const y = pad.t + cH * (1 - t);
    ctx.beginPath();
    ctx.moveTo(pad.l, y);
    ctx.lineTo(W - pad.r, y);
    ctx.stroke();
    ctx.fillStyle = textColor;
    ctx.font = '10px Space Mono, monospace';
    ctx.textAlign = 'right';
    ctx.fillText(Math.round(maxVal * t), pad.l - 6, y + 4);
  });

  if (data.length < 2) return;

  // Area fill
  const grad = ctx.createLinearGradient(0, pad.t, 0, pad.t + cH);
  grad.addColorStop(0, isDark ? 'rgba(232,255,71,0.2)' : 'rgba(26,26,46,0.15)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.moveTo(pad.l, pad.t + cH);
  data.forEach((v, i) => {
    const x = pad.l + (i / (data.length - 1)) * cW;
    const y = pad.t + cH * (1 - v / maxVal);
    if (i === 0) ctx.lineTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.lineTo(pad.l + cW, pad.t + cH);
  ctx.closePath();
  ctx.fill();

  // Line
  ctx.strokeStyle = accent;
  ctx.lineWidth = 2;
  ctx.lineJoin = 'round';
  ctx.beginPath();
  data.forEach((v, i) => {
    const x = pad.l + (i / (data.length - 1)) * cW;
    const y = pad.t + cH * (1 - v / maxVal);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Dots
  ctx.fillStyle = accent;
  data.forEach((v, i) => {
    const x = pad.l + (i / (data.length - 1)) * cW;
    const y = pad.t + cH * (1 - v / maxVal);
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  });

  // X labels
  ctx.fillStyle = textColor;
  ctx.font = '10px Space Mono, monospace';
  ctx.textAlign = 'center';
  const step = Math.max(1, Math.floor(data.length / 5));
  for (let i = 0; i < data.length; i += step) {
    const x = pad.l + (i / (data.length - 1)) * cW;
    ctx.fillText(i + 's', x, H - 4);
  }
}

// ── Focus / Blur ─────────────────────────────────
typingBox.addEventListener('click', focusInput);

function focusInput() {
  typingInput.focus();
  typingBox.classList.add('focused');
  typingBox.classList.remove('blurred');
  state.focused = true;
}

typingInput.addEventListener('focus', () => {
  typingBox.classList.add('focused');
  typingBox.classList.remove('blurred');
});

typingInput.addEventListener('blur', () => {
  typingBox.classList.remove('focused');
  if (!state.finished) typingBox.classList.add('blurred');
});

// Global keydown to start
document.addEventListener('keydown', e => {
  if (e.key === 'Tab') { e.preventDefault(); return; }
  if (!state.focused && !state.finished && !modalOverlay.classList.contains('active')) {
    if (e.key.length === 1) focusInput();
  }
});

// ── Mode Buttons ─────────────────────────────────
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const mode = btn.dataset.mode;
    if (mode === 'custom') {
      state.mode = null;
      state.customMode = true;
    } else {
      state.mode = parseInt(mode);
      state.customMode = false;
    }
    init(true);
    focusInput();
  });
});

// ── Buttons ──────────────────────────────────────
$('restartBtn').addEventListener('click', () => { init(false); focusInput(); });
$('newTextBtn').addEventListener('click', () => { init(true); focusInput(); });
$('modalRestart').addEventListener('click', () => { init(false); focusInput(); });
$('modalNew').addEventListener('click', () => { init(true); focusInput(); });

// ── Theme ────────────────────────────────────────
$('themeToggle').addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  showToast(isDark ? 'Tema claro ativado' : 'Tema escuro ativado');
});

// ── Toast ─────────────────────────────────────────
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

// ── Tab shortcut hint ────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Tab') {
    e.preventDefault();
    if (!modalOverlay.classList.contains('active')) {
      init(false);
      focusInput();
      showToast('Reiniciado! ↺');
    }
  }
});

// ── Prevent autocomplete weirdness ───────────────
typingInput.addEventListener('compositionstart', () => {
  typingInput.value = '';
});

// ── API Integration ──────────────────────────────
const API_BASE = 'http://localhost:8080';
let apiAvailable = false;

async function checkAPI() {
  try {
    const res = await fetch(`${API_BASE}/api/health`, { signal: AbortSignal.timeout(800) });
    apiAvailable = res.ok;
  } catch {
    apiAvailable = false;
  }
}

async function saveResultToAPI(result) {
  if (!apiAvailable) return;
  try {
    await fetch(`${API_BASE}/api/results`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result),
    });
  } catch { /* silently fail */ }
}

// ── Boot ─────────────────────────────────────────
checkAPI();
init(true);
setTimeout(() => focusInput(), 300);
