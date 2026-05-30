const TEXTOS = [
  // — Linguagens de programação —
  "Python foi criada por Guido van Rossum e lançada em 1991 com foco em legibilidade e simplicidade. Sua sintaxe limpa permite que iniciantes aprendam lógica de programação sem se perder em símbolos complexos. Hoje é uma das linguagens mais usadas no mundo para ciência de dados inteligência artificial e automação.",

  "JavaScript nasceu em apenas dez dias nas mãos de Brendan Eich em 1995 para tornar páginas web interativas. O que começou como um script simples de navegador se tornou uma linguagem completa capaz de rodar tanto no frontend quanto no backend com o Node. Nenhuma outra linguagem está tão presente no cotidiano da internet.",

  "C foi desenvolvida por Dennis Ritchie nos laboratórios Bell na década de 1970 e moldou praticamente tudo que veio depois. O próprio sistema operacional Unix foi reescrito em C tornando possível a portabilidade entre diferentes máquinas. Até hoje sistemas embarcados kernels e drivers são escritos em C por seu controle preciso sobre o hardware.",

  "Java foi apresentada pela Sun Microsystems em 1995 com a promessa de escreva uma vez execute em qualquer lugar. Sua máquina virtual permite que o mesmo código rode em Windows Linux e Mac sem modificações. Por décadas dominou o desenvolvimento corporativo e ainda é a base de milhões de aplicações Android.",

  "Rust foi projetada pela Mozilla para substituir C e C++ em situações onde segurança de memória é crítica. Seu sistema de ownership elimina erros como ponteiros nulos e race conditions em tempo de compilação sem precisar de um coletor de lixo. Desenvolvedores que aprendem Rust costumam dizer que a linguagem os ensina a pensar diferente.",

  // — Histórias da programação —
  "Ada Lovelace é considerada a primeira programadora da história por ter escrito em 1843 um algoritmo para a máquina analítica de Charles Babbage. Ela percebeu que a máquina poderia ir além de cálculos numéricos e manipular qualquer símbolo seguindo regras. Sua visão estava um século à frente do seu tempo.",

  "Alan Turing desenvolveu durante a Segunda Guerra Mundial a máquina que quebrou o código Enigma usado pelos nazistas. Seu trabalho teórico sobre máquinas de estado finito e computabilidade lançou as bases da ciência da computação moderna. O Prêmio Turing concedido anualmente pela ACM leva seu nome como a maior honraria da área.",

  "Grace Hopper criou o primeiro compilador da história em 1952 ao perceber que programadores perdiam tempo escrevendo instruções em linguagem de máquina. Ela acreditava que computadores deveriam entender palavras em inglês e não apenas zeros e uns. Seu trabalho levou ao desenvolvimento do COBOL linguagem que ainda processa trilhões de transações bancárias hoje.",

  "Linus Torvalds tinha apenas 21 anos quando publicou em 1991 numa lista de emails que estava criando um sistema operacional por hobby. O que parecia um projeto pessoal cresceu para se tornar o Linux o kernel mais usado no mundo presente em servidores smartphones e supercomputadores. Torvalds provou que software colaborativo e aberto pode superar qualquer corporação.",

  "Tim Berners-Lee propôs em 1989 enquanto trabalhava no CERN um sistema de hipertexto para compartilhar informações entre pesquisadores. Seu chefe na época anotou no projeto a mensagem vaga mas empolgante. Três anos depois a World Wide Web estava no ar e o mundo jamais voltaria a ser o mesmo.",

  // — Conceitos de programação —
  "Um algoritmo é uma sequência finita de instruções bem definidas para resolver um problema ou realizar uma tarefa. Assim como uma receita de bolo descreve passo a passo como produzir um resultado os algoritmos guiam o computador através de operações lógicas. A elegância de um bom algoritmo está em resolver o problema usando o menor número de passos possível.",

  "Programação orientada a objetos organiza o código em torno de entidades chamadas objetos que combinam dados e comportamentos. Um carro por exemplo pode ser um objeto com atributos como cor e velocidade e métodos como acelerar e frear. Essa forma de pensar aproxima o código da maneira como percebemos o mundo real.",

  "O conceito de recursão permite que uma função chame a si mesma para resolver versões menores do mesmo problema. O exemplo clássico é o cálculo do fatorial onde o resultado de um número depende do fatorial do número anterior. Embora elegante a recursão exige cuidado para não criar um loop infinito que esgote a memória.",

  "Controle de versão com Git permite que desenvolvedores registrem cada mudança no código como um snapshot no tempo. É possível voltar a qualquer ponto do histórico comparar versões e trabalhar em paralelo sem medo de perder trabalho. O GitHub transformou o Git numa plataforma social onde milhões colaboram em projetos abertos ao redor do mundo.",

  "APIs são interfaces que permitem que diferentes sistemas se comuniquem sem precisar conhecer os detalhes internos um do outro. Quando um aplicativo de clima exibe a previsão do tempo ele provavelmente está consultando uma API meteorológica em segundo plano. Elas são os blocos de construção que tornam possível a internet interconectada que usamos hoje.",

  // — Cotidiano do programador —
  "Depurar código é o processo de encontrar e corrigir erros que fazem um programa se comportar de forma inesperada. O termo bug originou de uma mariposa real encontrada por Grace Hopper dentro de um computador em 1947 que causava falhas no sistema. Hoje depurar é uma das habilidades mais valorizadas pois exige raciocínio lógico e muita paciência.",

  "Todo programador experiente sabe que código legível vale mais do que código esperto. Escrever variáveis com nomes claros adicionar comentários úteis e dividir funções grandes em pequenas partes facilita a manutenção meses depois. Afinal o próximo a ler seu código pode ser você mesmo e você vai agradecer pela clareza.",

  "Testes automatizados são como uma rede de segurança que garante que novas mudanças não quebrem o que já funcionava. A prática de escrever o teste antes do código chamada desenvolvimento orientado a testes obriga o programador a pensar no comportamento esperado antes de implementar. Times que testam bem dormem melhor à noite.",

  "O terminal é uma das ferramentas mais poderosas que um desenvolvedor pode dominar. Com poucos comandos é possível navegar pelo sistema de arquivos executar scripts gerenciar processos e se conectar a servidores remotos. Quem aprende a usar bem a linha de comando descobre que o mouse às vezes é só um atalho para o que o teclado já faz melhor.",

  "Open source é o modelo onde o código fonte de um programa é disponibilizado publicamente para qualquer pessoa ver modificar e distribuir. Projetos como Linux Firefox e VS Code mostram que comunidades colaborativas podem criar software de qualidade igual ou superior ao proprietário. Contribuir para projetos open source é também uma das melhores formas de aprender e construir um portfólio.",
];

// ── State ──────────────────────────────────────
const state = {
  mode: 15, words: [], input: '',
  wordIndex: 0, charIndex: 0,
  started: false, finished: false,
  startTime: null, timer: null, timeLeft: 15,
  
  // ── contadores ──
  keystrokes: 0,   // toda tecla de letra/espaço pressionada (não backspace)
  keyErrors: 0,    // teclas erradas acumuladas (inclui erros em palavras já confirmadas)
  liveErrors: 0,   // erros visíveis agora na palavra em digitação (muda a cada tecla)
  correctChars: 0, // chars corretos confirmados (para WPM)
  totalTyped: 0,   // chars totais confirmados (legacy, mantido para API)
  wpmHistory: [], wpmInterval: null,
  focused: false, customMode: false,
  lastTextIndex: -1,
  parasTotal: 'inf', // 'inf' | 1 | 3 | 5
parasUsed: 0,
};

// ── DOM Refs ───────────────────────────────────
const $ = id => document.getElementById(id);
const typingBox      = $('typingBox');
const wordsContainer = $('wordsContainer');
const typingInput    = $('typingInput');
const clickHint      = $('clickHint');
const wpmDisplay     = $('wpmDisplay');
const accDisplay     = $('accDisplay');
const timerDisplay   = $('timerDisplay');
const errDisplay     = $('errDisplay');
const modalOverlay   = $('modalOverlay');
const toast          = $('toast');
const modeBtnsNav    = $('modeBtns');

// ══════════════════════════════════════════════
// NAVEGAÇÃO DE PÁGINAS
// ══════════════════════════════════════════════
const pages = {
  home:  $('pageHome'),
  dicas: $('pageDicas'),
  sobre: $('pageSobre'),
};

function showPage(name) {
  Object.entries(pages).forEach(([key, el]) => {
    el.classList.toggle('page-hidden', key !== name);
  });

  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === name);
  });

  modeBtnsNav.style.display = name === 'home' ? '' : 'none';
  modalOverlay.classList.remove('active');

  // ✅ CONTROLE DO SOM
  isTypingPage = (name === 'home');
}


document.querySelectorAll('.nav-link').forEach(btn => {
  btn.addEventListener('click', () => {
    showPage(btn.dataset.page);
    if (btn.dataset.page === 'home') setTimeout(focusInput, 50);
  });
});

$('sobreStartBtn').addEventListener('click', () => {
  showPage('home');
  setTimeout(focusInput, 50);
});

// ══════════════════════════════════════════════
// TESTE DE DIGITAÇÃO
// ══════════════════════════════════════════════
function init(newText = false) {
  clearInterval(state.timer);
  clearInterval(state.wpmInterval);
  Object.assign(state, {
    input: '', wordIndex: 0, charIndex: 0,
    started: false, finished: false, startTime: null,
    keystrokes: 0, keyErrors: 0, liveErrors: 0, totalTyped: 0, correctChars: 0,
    wpmHistory: [],
    timeLeft: state.customMode ? Infinity : state.mode,
    parasUsed: 0,
  });
  state.currentPara = 1;
  if (newText) state.words = generateWords();
  renderWords();
  updateStats(false);
  typingInput.value = '';
  modalOverlay.classList.remove('active');
  $('congratsOverlay').classList.remove('active');
  clickHint.style.opacity = '1';
  timerDisplay.textContent = state.customMode ? '∞' : formatTime(state.mode);
  _updateParaCounter();
}

function formatTime(seconds) {
  if (seconds < 60) return seconds + 's';
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return s === 0 ? m + 'min' : m + 'min ' + s + 's';
}

function generateWords(excludeIndex) {
  // Sempre usa 1 parágrafo — se o usuário terminar antes do tempo,
  // um novo texto é carregado automaticamente (ver handleNewTextNeeded)
  let pool = TEXTOS.map((t, i) => ({t, i}));
  if (excludeIndex !== undefined) pool = pool.filter(x => x.i !== excludeIndex);
  const picked = pool[Math.floor(Math.random() * pool.length)];
  state.lastTextIndex = picked.i;
  let texto = picked.t;

  texto = texto
    .replace(/[.,!?;:""«»]/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim().toLowerCase();
  return texto.split(' ').filter(w => w.length > 0);
}

function renderWords() {
  wordsContainer.innerHTML = '';
  state.words.forEach((word, wi) => {
    const wEl = document.createElement('span');
    wEl.className = 'word';
    wEl.dataset.index = wi;
    [...word].forEach((char, ci) => {
      const lEl = document.createElement('span');
      lEl.className = 'letter';
      lEl.dataset.wi = wi; lEl.dataset.ci = ci;
      lEl.textContent = char;
      wEl.appendChild(lEl);
    });
    wordsContainer.appendChild(wEl);
  });
  updateCursor();
}

function updateCursor() {
  wordsContainer.querySelectorAll('.cursor').forEach(el => el.classList.remove('cursor'));
  const wordEls = wordsContainer.querySelectorAll('.word');
  if (state.wordIndex >= wordEls.length) return;
  const wEl = wordEls[state.wordIndex];
  const letters = wEl.querySelectorAll('.letter');
  if (state.charIndex < letters.length) {
    letters[state.charIndex].classList.add('cursor');
  } else {
    const cursor = document.createElement('span');
    cursor.className = 'letter cursor';
    cursor.textContent = '';
    wEl.appendChild(cursor);
  }
  const wElActive = wordEls[state.wordIndex];
  if (wElActive) {
    const diff = wElActive.getBoundingClientRect().top - typingBox.getBoundingClientRect().top;
    if (diff > typingBox.clientHeight * 0.5)
      typingBox.scrollTop += diff - typingBox.clientHeight * 0.4;
  }
}

// Retorna true se typed tem erro em relação a word
function hasError(typed, word) {
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] !== (word[i] || '')) return true;
  }
  return false;
}

function shakeBox() {
  typingBox.classList.remove('shake');
  void typingBox.offsetWidth;
  typingBox.classList.add('shake');
}

typingInput.addEventListener('input', handleInput);
typingInput.addEventListener('keydown', handleKeydown);

function handleInput(e) {
  if (state.finished) return;
  const val = typingInput.value;
  const currentWord = state.words[state.wordIndex];
  if (!currentWord) return;
  if (!state.started && val.trim().length > 0) startTest();

  // ── ESPAÇO: só avança se a palavra estiver 100% correta ──
  if (val.endsWith(' ')) {
    const trimmed = val.trim();
    if (hasError(trimmed, currentWord)) {
      // bloqueia: remove o espaço, mantém o que tinha
      typingInput.value = trimmed;
      shakeBox();
      state.charIndex = trimmed.length;
      markLive(state.wordIndex, trimmed);
      updateCursor();
      return;
    }
    // Palavra correta: confirmar
    state.keystrokes += trimmed.length + 1;
    markWord(state.wordIndex, trimmed);
    state.totalTyped += trimmed.length + 1;
    state.correctChars += countCorrect(trimmed, currentWord) + 1;
    state.liveErrors = 0;
    state.wordIndex++;
    state.charIndex = 0;
    typingInput.value = '';
    if (state.wordIndex >= state.words.length) {

  state.currentPara++; // 🔥 conta o próximo parágrafo

  // 🛑 se atingiu o limite → finaliza
  if (state.currentPara > state.paraLimit) {
    finishTest();
    return;
  }

  // 🔁 carrega novo texto
  handleNewTextNeeded();
  return;
}
    updateCursor();
    updateStats(true);
    return;
  }

  // ── DIGITAÇÃO NORMAL (letra a letra) ──
  const prev = state.charIndex;
  const typed = val.length;

  // Se está adicionando uma letra (não apagando), conta keystroke
  if (typed > prev) {
    state.keystrokes++;
    // Verifica se a letra recém digitada está errada
    const ci = typed - 1;
    if (val[ci] !== (currentWord[ci] || '')) {
      state.keyErrors++;
    }
  }

  // Recalcula erros visiveis na palavra atual (para exibição em tempo real)
  let live = 0;
  for (let i = 0; i < val.length; i++) {
    if (val[i] !== (currentWord[i] || '')) live++;
  }
  state.liveErrors = live;

  state.charIndex = val.length;
  markLive(state.wordIndex, val);
  updateCursor();
  updateStats(true);
}

function handleKeydown(e) {
  if (e.key === 'Tab') { e.preventDefault(); init(false); focusInput(); return; }
  if (e.key === 'Backspace' && typingInput.value.length === 0 && state.wordIndex > 0) {
    state.wordIndex--;
    typingInput.value = '';
    state.charIndex = 0;
    unmarkWord(state.wordIndex);
    updateCursor();
  }
}

function markLive(wi, typed) {
  const wordEls = wordsContainer.querySelectorAll('.word');
  if (wi >= wordEls.length) return;
  const wEl = wordEls[wi];
  wEl.querySelectorAll('.extra').forEach(e => e.remove());
  wEl.querySelectorAll('.cursor').forEach(e => { if (e.textContent === '') e.remove(); });
  const letters = wEl.querySelectorAll('.letter');
  letters.forEach((lEl, ci) => {
    lEl.classList.remove('correct', 'incorrect', 'cursor');
    if (ci < typed.length)
      lEl.classList.add(typed[ci] === lEl.textContent ? 'correct' : 'incorrect');
  });
  if (typed.length > letters.length) {
    [...typed.slice(letters.length)].forEach(ch => {
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
  wEl.querySelectorAll('.extra, .cursor').forEach(e => { if (e.textContent === '') e.remove(); });
  const letters = wEl.querySelectorAll('.letter');
  const word = state.words[wi];
  letters.forEach((lEl, ci) => {
    lEl.classList.remove('correct', 'incorrect', 'cursor');
    if (ci < typed.length)
      lEl.classList.add(typed[ci] === word[ci] ? 'correct' : 'incorrect');
    else lEl.classList.add('incorrect');
  });
  if (typed !== word) wEl.classList.add('error-word');
}

function unmarkWord(wi) {
  const wordEls = wordsContainer.querySelectorAll('.word');
  if (wi >= wordEls.length) return;
  const wEl = wordEls[wi];
  wEl.classList.remove('error-word');
  wEl.querySelectorAll('.extra, .cursor').forEach(e => { if (e.dataset.ci === undefined) e.remove(); });
  wEl.querySelectorAll('.letter').forEach(lEl => lEl.classList.remove('correct', 'incorrect', 'cursor'));
}

function countCorrect(typed, word) {
  let c = 0;
  for (let i = 0; i < Math.min(typed.length, word.length); i++)
    if (typed[i] === word[i]) c++;
  return c;
}

function startTest() {
  state.started = true;
  state.startTime = Date.now();
  clickHint.style.opacity = '0';
  if (!state.customMode) {
    state.timer = setInterval(() => {
      state.timeLeft--;
      timerDisplay.textContent = formatTime(state.timeLeft);
      if (state.timeLeft <= 0) finishTest();
    }, 1000);
  }
  state.wpmInterval = setInterval(() => {
    const elapsed = (Date.now() - state.startTime) / 60000;
    state.wpmHistory.push(elapsed > 0 ? Math.round((state.correctChars / 5) / elapsed) : 0);
  }, 1000);
}
function showCongrats(wpm, acc, elapsed) {
  const overlay = $('congratsOverlay');
  const emoji   = $('congratsEmoji');

  if      (wpm >= 100) emoji.textContent = '⚡';
  else if (wpm >= 80)  emoji.textContent = '🔥';
  else if (wpm >= 60)  emoji.textContent = '🚀';
  else if (wpm >= 40)  emoji.textContent = '💪';
  else                 emoji.textContent = '🎉';

  const sub = $('congratsSub');
  const parasLimiteDone = state.parasTotal !== 'inf' && state.parasUsed >= state.parasTotal;

  if (parasLimiteDone) {
    const qtd = state.parasUsed;
    sub.textContent = `Você completou ${qtd} parágrafo${qtd > 1 ? 's' : ''}!`;
  } else if (state.customMode) {
    sub.textContent = 'Você completou todo o texto!';
  } else {
    const sobrou = state.timeLeft;
    sub.textContent = `Texto completo! Sobraram ${formatTime(sobrou)} no cronômetro.`;
  }

  $('congratsWpm').textContent  = wpm;
  $('congratsAcc').textContent  = acc + '%';
  $('congratsTime').textContent = Math.round(elapsed) + 's';

  overlay.classList.add('active');
}
// Preenche o modal de resultado (sem abri-lo)
function prepareResults(elapsed, wpm, acc, ke) {
  $('finalWpm').textContent    = wpm;
  $('finalAcc').textContent    = acc + '%';
  $('finalTime').textContent   = Math.round(elapsed) + 's';
  $('finalErrors').textContent = ke;
  $('finalChars').textContent  = state.correctChars;
  $('finalWords').textContent  = state.wordIndex;

  let rating = 'Iniciante 🐢';
  if      (wpm >= 100) rating = 'Lendário ⚡';
  else if (wpm >= 80)  rating = 'Expert 🔥';
  else if (wpm >= 60)  rating = 'Avançado 🚀';
  else if (wpm >= 40)  rating = 'Intermediário 💪';
  else if (wpm >= 20)  rating = 'Aprendiz ✨';
  $('resultRating').textContent = rating;

  drawChart();
  updateProfileStats(wpm, acc);
  saveResultToAPI({
    wpm, accuracy: acc, errors: ke,
    chars: state.correctChars, words: state.wordIndex,
    duration: Math.round(elapsed),
    mode: state.customMode ? 'custom' : state.mode + 's'
  });
}

// Abre o modal de resultado (chamado pelo timer ou por closeCongrats)
function showResults() {
  const elapsed = (Date.now() - state.startTime) / 1000;
  const ks  = state.keystrokes;
  const ke  = state.keyErrors;
  const wpm = elapsed > 0 ? Math.round((state.correctChars / 5) / (elapsed / 60)) : 0;
  const acc = ks > 0 ? Math.round(((ks - ke) / ks) * 100) : 100;

  prepareResults(elapsed, wpm, acc, ke);
  modalOverlay.classList.add('active');
}
function closeCongrats(showFull) {
  $('congratsOverlay').classList.remove('active');
  if (showFull) {
    // Abre o modal de resultado completo logo após fechar
    modalOverlay.classList.add('active');
  }
}
function finishTest() {
  clearInterval(state.timer);
  clearInterval(state.wpmInterval);
  state.finished = true;
  typingInput.blur();
  typingBox.classList.remove('focused');

  const elapsed        = (Date.now() - state.startTime) / 1000;
  const ks             = state.keystrokes;
  const ke             = state.keyErrors;
  const wpm            = elapsed > 0 ? Math.round((state.correctChars / 5) / (elapsed / 60)) : 0;
  const acc            = ks > 0 ? Math.round(((ks - ke) / ks) * 100) : 100;

  const completouTexto = state.wordIndex >= state.words.length;
  const tempoSobrou    = !state.customMode && state.timeLeft > 0;

  // Parabéns quando:
  // — limite de parágrafos atingido (qualquer modo)
  // — modo custom terminou o único bloco
  // — modo cronometrado e terminou o texto antes do tempo
  const parasLimiteDone = state.parasTotal !== 'inf' && state.parasUsed >= state.parasTotal;
  const deveParabenizar = parasLimiteDone || (completouTexto && (state.customMode || tempoSobrou));

  prepareResults(elapsed, wpm, acc, ke);

  if (deveParabenizar) {
    showCongrats(wpm, acc, elapsed);
  } else {
    modalOverlay.classList.add('active');
  }
}

function updateStats(live) {
  const elapsed = state.startTime ? (Date.now() - state.startTime) / 60000 : 0;
  const wpm = elapsed > 0 ? Math.round((state.correctChars / 5) / elapsed) : 0;

  // Precisão: usa keystrokes confirmados + chars já digitados na palavra atual
  const currentVal = typingInput.value || '';
  const currentWord = state.words[state.wordIndex] || '';
  let currentKs = currentVal.length;
  let currentKe = 0;
  for (let i = 0; i < currentVal.length; i++) {
    if (currentVal[i] !== (currentWord[i] || '')) currentKe++;
  }
  const totalKs = state.keystrokes + currentKs;
  const totalKe = state.keyErrors + currentKe;
  const acc = totalKs > 0 ? Math.round(((totalKs - totalKe) / totalKs) * 100) : 100;

  // Erros visíveis = erros confirmados (chars errados em palavras já enviadas)
  //                + erros live na palavra atual
  const totalErrors = state.keyErrors + state.liveErrors;

  if (live) {
    wpmDisplay.textContent = wpm;
    accDisplay.textContent = acc + '%';
    errDisplay.textContent = totalErrors;
  } else {
    wpmDisplay.textContent = '—';
    accDisplay.textContent = '—';
    errDisplay.textContent = '—';
    timerDisplay.textContent = state.customMode ? '∞' : formatTime(state.mode);
  }
}

function showResults() {
  const elapsed = (Date.now() - state.startTime) / 1000;
  const wpm = elapsed > 0 ? Math.round((state.correctChars / 5) / (elapsed / 60)) : 0;
  const ks = state.keystrokes;
  const ke = state.keyErrors;
  const acc = ks > 0 ? Math.round(((ks - ke) / ks) * 100) : 100;

  $('finalWpm').textContent = wpm;
  $('finalAcc').textContent = acc + '%';
  $('finalTime').textContent = Math.round(elapsed) + 's';
  $('finalErrors').textContent = ke;   // total de chars errados
  $('finalChars').textContent = state.correctChars;
  $('finalWords').textContent = state.wordIndex;

  let rating = 'Iniciante 🐢';
  if (wpm >= 100) rating = 'Lendário ⚡';
  else if (wpm >= 80) rating = 'Expert 🔥';
  else if (wpm >= 60) rating = 'Avançado 🚀';
  else if (wpm >= 40) rating = 'Intermediário 💪';
  else if (wpm >= 20) rating = 'Aprendiz ✨';
  $('resultRating').textContent = rating;

  drawChart();
  modalOverlay.classList.add('active');
  updateProfileStats(wpm, acc);
  saveResultToAPI({ wpm, accuracy: acc, errors: ke,
    chars: state.correctChars, words: state.wordIndex,
    duration: Math.round(elapsed), mode: state.customMode ? 'custom' : state.mode + 's' });
}

function drawChart() {
  const canvas = $('wpmChart');
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const W = canvas.offsetWidth || 500;
  const H = 100;
  canvas.width = W * dpr; canvas.height = H * dpr;
  ctx.scale(dpr, dpr);

  const data = state.wpmHistory;
  if (!data.length) return;

  const isLight   = document.documentElement.getAttribute('data-theme') === 'light';
  const accent    = isLight ? '#c0392b' : '#e05040';
  const gridColor = isLight ? 'rgba(0,0,0,0.08)'     : 'rgba(255,255,255,0.07)';
  const textColor = isLight ? '#4a5a78'               : '#8880b0';
  const fillTop   = isLight ? 'rgba(192,57,43,0.16)' : 'rgba(224,80,64,0.20)';

  ctx.clearRect(0, 0, W, H);
  const maxVal = Math.max(...data, 1);
  const pad = { l:36, r:12, t:10, b:28 };
  const cW = W - pad.l - pad.r, cH = H - pad.t - pad.b;

  ctx.strokeStyle = gridColor; ctx.lineWidth = 1;
  [0, 0.5, 1].forEach(t => {
    const y = pad.t + cH * (1 - t);
    ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(W - pad.r, y); ctx.stroke();
    ctx.fillStyle = textColor;
    ctx.font = '10px DM Mono, monospace';
    ctx.textAlign = 'right';
    ctx.fillText(Math.round(maxVal * t), pad.l - 6, y + 4);
  });

  if (data.length < 2) return;

  const grad = ctx.createLinearGradient(0, pad.t, 0, pad.t + cH);
  grad.addColorStop(0, fillTop); grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.beginPath(); ctx.moveTo(pad.l, pad.t + cH);
  data.forEach((v, i) => {
    const x = pad.l + (i / (data.length - 1)) * cW;
    const y = pad.t + cH * (1 - v / maxVal);
    i === 0 ? ctx.lineTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.lineTo(pad.l + cW, pad.t + cH); ctx.closePath(); ctx.fill();

  ctx.strokeStyle = accent; ctx.lineWidth = 2; ctx.lineJoin = 'round';
  ctx.beginPath();
  data.forEach((v, i) => {
    const x = pad.l + (i / (data.length - 1)) * cW;
    const y = pad.t + cH * (1 - v / maxVal);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.stroke();

  ctx.fillStyle = accent;
  data.forEach((v, i) => {
    const x = pad.l + (i / (data.length - 1)) * cW;
    const y = pad.t + cH * (1 - v / maxVal);
    ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
  });

  ctx.fillStyle = textColor; ctx.font = '10px DM Mono, monospace'; ctx.textAlign = 'center';
  const step = Math.max(1, Math.floor(data.length / 5));
  for (let i = 0; i < data.length; i += step) {
    ctx.fillText(i + 's', pad.l + (i / (data.length - 1)) * cW, H - 4);
  }
}

// ── Carrega próximo texto sem parar o timer ───────
function handleNewTextNeeded() {
  state.parasUsed++;

  // Verifica se atingiu o limite de parágrafos
  if (state.parasTotal !== 'inf' && state.parasUsed >= state.parasTotal) {
    finishTest();
    return;
  }

  // Carrega próximo parágrafo sem parar o timer
  state.words = generateWords(state.lastTextIndex);
  state.wordIndex = 0;
  state.charIndex = 0;
  typingInput.value = '';
  renderWords();
  updateCursor();
  _updateParaCounter();
}

// ── Focus ──────────────────────────────────────
typingBox.addEventListener('click', focusInput);

function focusInput() {
  typingInput.focus();
  typingBox.classList.add('focused');
  typingBox.classList.remove('blurred');
  state.focused = true;
}
typingInput.addEventListener('focus', () => {
  typingBox.classList.add('focused'); typingBox.classList.remove('blurred');
});
typingInput.addEventListener('blur', () => {
  typingBox.classList.remove('focused');
  if (!state.finished) typingBox.classList.add('blurred');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Tab') { e.preventDefault(); return; }
  const home = !$('pageHome').classList.contains('page-hidden');
  if (home && !state.focused && !state.finished && !modalOverlay.classList.contains('active')) {
    if (e.key.length === 1) focusInput();
  }
});

// ── Modos ──────────────────────────────────────
const modeSelect = document.getElementById("modeSelect");
const paraSelect = document.getElementById("paraSelect");
modeSelect.addEventListener("change", () => {
  const mode = modeSelect.value;

  state.customMode = mode === "custom";
  state.mode = state.customMode ? null : parseInt(mode);
  state.timeLeft = state.customMode ? Infinity : state.mode;

  init(true);
  focusInput();
});
paraSelect.addEventListener("change", () => {
  const val = paraSelect.value;

  state.parasTotal = val === 'inf' ? 'inf' : parseInt(val);

  init(true);
  focusInput();
});
// ── Botões ─────────────────────────────────────
$('restartBtn').addEventListener('click', () => { init(false); focusInput(); });
$('newTextBtn').addEventListener('click', () => { init(true); focusInput(); });
$('modalRestart').addEventListener('click', () => { init(false); focusInput(); });
$('modalNew').addEventListener('click', () => { init(true); focusInput(); });

// ── Tab reinicia ───────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Tab') {
    e.preventDefault();
    if (!modalOverlay.classList.contains('active') && !$('pageHome').classList.contains('page-hidden')) {
      init(false); focusInput(); showToast('Reiniciado ↺');
    }
  }
});

// ── Tema ───────────────────────────────────────
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('digita-theme', theme);
}

$('themeToggle').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  showToast(next === 'light' ? 'Tema claro' : 'Tema escuro');
});
 // 🔊 BOTÃO DE SOM
const soundBtn = $('soundToggle');

// áudio
const keySound = new Audio('Som/lightningbulb-spacebar-click-keyboard-199448.mp3');
keySound.volume = 0.5;

// estado
let soundOn = true;
let isTypingPage = false; // começa desligado fora da página de digitação

// clique botão
soundBtn.addEventListener('click', () => {
  soundBtn.classList.add('active');

  setTimeout(() => {
    soundBtn.classList.remove('active');
  }, 200);

  soundOn = !soundOn;
  soundBtn.classList.toggle('on', soundOn);

  // (opcional) salva preferência
  localStorage.setItem('sound', soundOn);
});

// 🔊 carregar preferência salva
const savedSound = localStorage.getItem('sound');
if (savedSound !== null) {
  soundOn = savedSound === 'true';
  soundBtn.classList.toggle('on', soundOn);
}

// ⌨️ SOM GLOBAL (APENAS NA DIGITAÇÃO)
document.addEventListener('keydown', (e) => {
  if (!soundOn || !isTypingPage) return;

  // 🔥 evita tocar som em teclas especiais
  if (e.ctrlKey || e.altKey || e.metaKey) return;

  keySound.currentTime = 0;
  keySound.play().catch(() => {});
});
  function showPage(name) {
  Object.entries(pages).forEach(([key, el]) => {
    el.classList.toggle('page-hidden', key !== name);
  });

  // 🔊 CONTROLE DO SOM
  isTypingPage = (name === 'home'); // 👈 ajuste aqui se necessário
}
typingInput.addEventListener('keydown', () => {
  if (!soundOn) return;

  keySound.currentTime = 0;
  keySound.play().catch(() => {});
});
// ── Toast ──────────────────────────────────────
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

// ── Autocomplete fix ───────────────────────────
typingInput.addEventListener('compositionstart', () => { typingInput.value = ''; });

// ── API ────────────────────────────────────────
const API_BASE = 'http://localhost:8080';
let apiAvailable = false;
async function checkAPI() {
  try { const r = await fetch(`${API_BASE}/api/health`, { signal: AbortSignal.timeout(800) }); apiAvailable = r.ok; }
  catch { apiAvailable = false; }
}
async function saveResultToAPI(result) {
  if (!apiAvailable) return;
  try { await fetch(`${API_BASE}/api/results`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(result) }); }
  catch {}
}


// ══════════════════════════════════════════════
// PERFIL DO USUÁRIO
// ══════════════════════════════════════════════
const profileSession = {
  bestWpm: 0,
  bestAcc: 0,
  tests: 0,
};

function openProfile() {
  const overlay = document.getElementById('profileOverlay');
  const name = sessionStorage.getItem('digita-user') || '—';

  document.getElementById('profileNameDisplay').textContent = name;
  document.getElementById('profileNameInput').value = name;

  _renderProfileAvatar();

  // Mostra/esconde botão de deletar foto
  const deleteBtn = document.getElementById('profileDeleteBtn');
  if (deleteBtn) {
    deleteBtn.style.display = sessionStorage.getItem('digita-photo') ? 'flex' : 'none';
  }

  // Restaura seleção visual do avatar de personagem
  const savedId = sessionStorage.getItem('digita-avatar-id');
  document.querySelectorAll('.profile-img-avatar-btn').forEach(btn => {
    btn.style.borderColor = '';
    btn.style.boxShadow = '';
  });
  if (savedId) {
    const savedBtn = document.querySelector(
      `.profile-img-avatar-btn[onclick="setImgAvatar('${savedId}')"]`
    );
    if (savedBtn) {
      savedBtn.style.borderColor = '#c0392b';
      savedBtn.style.boxShadow = '0 0 10px rgba(192,57,43,0.55)';
    }
  }

  // Stats da sessão
  document.getElementById('profBestWpm').textContent = profileSession.bestWpm || '—';
  document.getElementById('profBestAcc').textContent = profileSession.bestAcc ? profileSession.bestAcc + '%' : '—';
  document.getElementById('profTests').textContent = profileSession.tests;

  overlay.classList.add('active');
}

function closeProfile(e) {
  if (e.target === document.getElementById('profileOverlay'))
    document.getElementById('profileOverlay').classList.remove('active');
}
function closeProfileBtn() {
  document.getElementById('profileOverlay').classList.remove('active');
}

function toggleEditName() {
  const edit = document.getElementById('profileNameEdit');
  const display = document.getElementById('profileNameDisplay').parentElement;
  const isOpen = edit.style.display !== 'none';
  edit.style.display = isOpen ? 'none' : 'flex';
  if (!isOpen) {
    const input = document.getElementById('profileNameInput');
    input.focus();
    input.select();
  }
}

function saveName() {
  const input = document.getElementById('profileNameInput');
  const name = input.value.trim();
  if (!name) return;
  sessionStorage.setItem('digita-user', name);
  document.getElementById('profileNameDisplay').textContent = name;
  // atualiza badge no header
  document.getElementById('headerUserName').textContent = name;
  document.getElementById('headerUserAvatar').textContent = name.charAt(0).toUpperCase();
  _renderProfileAvatar();
  document.getElementById('profileNameEdit').style.display = 'none';
  showToast('Nome atualizado ✓');
}

function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    sessionStorage.setItem('digita-photo', dataUrl);
    _renderProfileAvatar();
    _renderHeaderAvatar();
    showToast('Foto atualizada ✓');
  };
  reader.readAsDataURL(file);
}

function _renderProfileAvatar() {
  const avatar = document.getElementById('profileAvatar');
  const photo = sessionStorage.getItem('digita-photo');
  const name = sessionStorage.getItem('digita-user') || '?';
  if (photo) {
    avatar.innerHTML = '<img src="' + photo + '" alt="foto de perfil" />';
  } else {
    avatar.textContent = name.charAt(0).toUpperCase();
  }
}

function _renderHeaderAvatar() {
  const avatar = document.getElementById('headerUserAvatar');
  const photo = sessionStorage.getItem('digita-photo');
  const name = sessionStorage.getItem('digita-user') || '?';
  if (photo) {
    avatar.innerHTML = '<img src="' + photo + '" alt="foto" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />';
  } else {
    avatar.textContent = name.charAt(0).toUpperCase();
  }
}

function logoutProfile() {
  sessionStorage.removeItem('digita-user');
  sessionStorage.removeItem('digita-photo');
  document.getElementById('profileOverlay').classList.remove('active');
  // Recarrega para mostrar tela de boas-vindas
  location.reload();
}
// ══════════════════════════════════════════════
// AVATAR POR PERSONAGEM (botões de imagem)
// ══════════════════════════════════════════════
function setImgAvatar(id) {
  // Remove seleção anterior
  document.querySelectorAll('.profile-img-avatar-btn').forEach(btn => {
    btn.style.borderColor = '';
    btn.style.boxShadow = '';
  });

  // Marca o botão selecionado visualmente
  const selectedBtn = document.querySelector(
    `.profile-img-avatar-btn[onclick="setImgAvatar('${id}')"]`
  );
  if (selectedBtn) {
    selectedBtn.style.borderColor = '#c0392b';
    selectedBtn.style.boxShadow = '0 0 10px rgba(192,57,43,0.55)';

    // Pega a imagem do botão
    const img = selectedBtn.querySelector('img');
    if (img) {
      const dataUrl = _imgToDataUrl(img);
      sessionStorage.setItem('digita-photo', dataUrl);
      sessionStorage.setItem('digita-avatar-id', id);
    }
  }

  // Remove foto personalizada (upload) se houver
  // (personagem substitui foto de upload)
  _renderProfileAvatar();
  _renderHeaderAvatar();
  showToast('Avatar atualizado ✓');
}

// Converte <img> já carregada em dataURL via canvas
function _imgToDataUrl(imgEl) {
  try {
    const canvas = document.createElement('canvas');
    canvas.width  = imgEl.naturalWidth  || imgEl.width  || 128;
    canvas.height = imgEl.naturalHeight || imgEl.height || 128;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(imgEl, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/png');
  } catch {
    // fallback: src direto (pode falhar por CORS em ambiente prod)
    return imgEl.src;
  }
}
function deletePhoto() {
  sessionStorage.removeItem('digita-photo');
  sessionStorage.removeItem('digita-avatar-id');

  // Limpa seleção visual dos botões de personagem
  document.querySelectorAll('.profile-img-avatar-btn').forEach(btn => {
    btn.style.borderColor = '';
    btn.style.boxShadow = '';
  });

  _renderProfileAvatar();
  _renderHeaderAvatar();

  // Esconde o botão de deletar
  const deleteBtn = document.getElementById('profileDeleteBtn');
  if (deleteBtn) deleteBtn.style.display = 'none';

  showToast('Avatar removido ✓');
}
// Fechar com Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('profileOverlay').classList.remove('active');
  }
});

// Atualizar stats após cada teste
function updateProfileStats(wpm, acc) {
  profileSession.tests++;
  if (wpm > profileSession.bestWpm) profileSession.bestWpm = wpm;
  if (acc > profileSession.bestAcc) profileSession.bestAcc = acc;
}
// ── Contador de parágrafos no header ──────────
function _updateParaCounter() {
  const counter = $('paraCounter');
  if (!counter) return;
  if (state.parasTotal === 'inf') {
    counter.textContent = '';
    counter.style.display = 'none';
    return;
  }
  counter.style.display = 'flex';
  counter.textContent = state.parasUsed + ' / ' + state.parasTotal;
}

// ── Inicializa seletor de parágrafos ──────────
(function initParaSelector() {
  document.querySelectorAll('.para-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.para-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const val = btn.dataset.paras;
      state.parasTotal = val === 'inf' ? 'inf' : parseInt(val);
      state.parasUsed  = 0;
      init(true);
      focusInput();
      showToast(val === 'inf' ? 'Parágrafos: infinito' : `${val} parágrafo${val > 1 ? 's' : ''}`);
    });
  });
})();
// ── Boot ───────────────────────────────────────
const savedTheme = localStorage.getItem('digita-theme') || 'dark';
applyTheme(savedTheme);
checkAPI();

// ── Tela de Boas-Vindas ────────────────────────
(function initWelcome() {
  const screen   = document.getElementById('welcomeScreen');
  const input    = document.getElementById('welcomeName');
  const btn      = document.getElementById('welcomeBtn');
  const hUser    = document.getElementById('headerUser');
  const hAvatar  = document.getElementById('headerUserAvatar');
  const hName    = document.getElementById('headerUserName');

  // Se já passou pela tela antes nesta sessão, pula
  const savedName = sessionStorage.getItem('digita-user');
  if (savedName) {
    screen.classList.add('hidden');
    showUserBadge(savedName);
    init(true);
    setTimeout(focusInput, 300);
    return;
  }

  // Habilita botão somente quando há texto
  input.addEventListener('input', () => {
    const ok = input.value.trim().length > 0;
    btn.disabled = !ok;
  });

  function enterApp() {
    const name = input.value.trim();
    if (!name) return;
    sessionStorage.setItem('digita-user', name);
    screen.classList.add('hiding');
    setTimeout(() => {
      screen.classList.add('hidden');
      showUserBadge(name);
      init(true);
      setTimeout(focusInput, 300);
    }, 600);
  }

  btn.addEventListener('click', enterApp);
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') enterApp();
  });

  // Foca o input automaticamente
  setTimeout(() => input.focus(), 400);

  function showUserBadge(name) {
    hName.textContent = name;
    hUser.classList.add('visible');
    // Renderiza foto se existir, senão inicial
    _renderHeaderAvatar();
  }
})();