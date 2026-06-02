// ══════════════════════════════════════════════
// BANCO DE TEXTOS — por tamanho
// ══════════════════════════════════════════════

const TEXTOS_CURTOS = [
  "o primeiro mouse foi feito de madeira",
  "ada lovelace escreveu o primeiro algoritmo da historia",
  "o google nasceu numa garagem em menlo park california",
  "o primeiro email foi enviado em 1971 por ray tomlinson",
  "python foi criada para ser simples e legivel",
  "o wifi significa wireless fidelity",
  "o primeiro virus de computador se chamava creeper",
  "a internet nasceu como uma rede militar chamada arpanet",
  "o bit e a menor unidade de informacao digital",
  "dennis ritchie criou a linguagem c nos anos setenta",
  "o primeiro computador pessoal foi o altair 8800",
  "linux foi criado por linus torvalds em 1991",
  "o html foi inventado por tim berners lee em 1991",
  "um byte tem oito bits de informacao",
  "grace hopper encontrou um inseto causando erro num computador",
  "o primeiro disco rigido da ibm pesava mais de uma tonelada",
  "javascript foi criado em apenas dez dias por brendan eich",
  "o primeiro computador eletronico se chamava eniac",
  "o cd rom foi lancado comercialmente em 1982",
  "alan turing e considerado o pai da ciencia da computacao",
  "o primeiro smartphone foi lancado pela apple em 2007",
  "ram significa memoria de acesso aleatorio em ingles",
  "o processador e o cerebro do computador",
  "sql foi criado para consultar bancos de dados relacionais",
  "o usb foi inventado para padronizar conexoes de perifericos",
];

const TEXTOS_MEDIOS = [
  "o eniac foi o primeiro computador eletronico de uso geral concluido em 1945. ocupava uma sala inteira e pesava mais de vinte e sete toneladas. sua velocidade era de cinco mil operacoes por segundo algo impensavel para a epoca mas ridiculo perto dos processadores modernos.",
  "alan turing propôs em 1950 o famoso teste que leva seu nome. a ideia era simples se uma maquina conversasse com um humano sem que ele percebesse que era uma maquina entao ela poderia ser considerada inteligente. o conceito ainda e debatido na inteligencia artificial moderna.",
  "grace hopper acreditava que computadores deveriam entender palavras em ingles e nao apenas codigos binarios. ela criou o primeiro compilador da historia em 1952. seu trabalho levou ao desenvolvimento do cobol linguagem ainda usada em sistemas bancarios ao redor do mundo.",
  "o unix foi criado por ken thompson e dennis ritchie nos laboratorios bell em 1969. seu design simples e modular influenciou praticamente todos os sistemas operacionais modernos. linux e macOS sao herdeiros diretos dos principios estabelecidos pelo unix.",
  "a lei de moore diz que o numero de transistores num chip dobra aproximadamente a cada dois anos. gordon moore fez essa observacao em 1965 e ela se manteve verdadeira por decadas. hoje os transistores tem apenas alguns atomos de espessura o que aproxima os limites fisicos da computacao.",
  "o primeiro videogame comercial foi o pong lancado pela atari em 1972. dois quadrados e um ponto na tela criaram uma industria bilionaria. hoje os jogos geram mais receita do que o cinema e a musica juntos no mercado de entretenimento global.",
  "a criptografia e a ciencia de proteger informacoes transformando dados legiveis em codigo. ela existe ha milhares de anos mas ganhou nova relevancia na era digital. toda comunicacao segura na internet depende de algoritmos criptograficos modernos para proteger dados sensiveis.",
  "os bancos de dados relacionais foram propostos por edgar codd em 1970 num artigo cientifico revolucionario. a ideia de organizar dados em tabelas com relacoes entre elas transformou como sistemas armazenam informacao. oracle ibm e microsoft construiram imperios sobre esse conceito.",
  "o conceito de nuvem computacional existe desde os anos sessenta mas popularizou em 2006 quando a amazon lancou o aws. a ideia e simples alugar poder computacional pela internet em vez de comprar hardware fisico. hoje a nuvem sustenta a infraestrutura da maioria dos servicos digitais.",
  "git foi criado por linus torvalds em 2005 apos uma disputa com a empresa do sistema anterior. em apenas dias ele construiu uma ferramenta que revolucionou como desenvolvedores colaboram em codigo. hoje o github que usa git hospeda mais de trezentos milhoes de repositorios publicos.",
  "a primeira rede de computadores que conectou universidades americanas foi a arpanet em 1969. a primeira mensagem enviada foi a palavra login mas o sistema travou apos as duas primeiras letras. mesmo assim aquele momento marcou o inicio do que viria a ser a internet.",
  "um algoritmo e uma sequencia de passos para resolver um problema. a palavra vem do nome do matematico persa al-khuarizmi que viveu no seculo nono. seus trabalhos sobre algebra e aritmetica chegaram a europa e influenciaram a matematica e a computacao para sempre.",
  "o processador intel 4004 lancado em 1971 foi o primeiro microprocessador comercial da historia. ele tinha apenas 2300 transistores e rodava a 740 kilohertz. um smartphone moderno tem bilhoes de transistores e processa informacoes em velocidades bilhoes de vezes maiores.",
  "phishing e uma tecnica de golpe onde criminosos se passam por entidades confiaveis para roubar dados. o nome vem do ingles fishing ou seja pescar vitimas. e a forma mais comum de ataque cibernetico e afeta milhoes de pessoas e empresas ao redor do mundo todo ano.",
  "o codigo aberto ou open source e um modelo onde o codigo fonte e disponibilizado publicamente. projetos como linux firefox e vscode mostram que comunidades podem criar software de qualidade superior ao proprietario. a filosofia open source transformou como o mundo desenvolve e distribui software.",
  "ram e a memoria de acesso aleatorio onde o computador guarda dados em uso temporariamente. quanto mais ram um sistema tem mais programas pode rodar ao mesmo tempo sem lentidao. ao desligar o computador tudo que estava na ram e apagado diferente do disco rigido que persiste.",
  "o protocolo http define como navegadores e servidores web se comunicam na internet. quando voce digita um endereco no navegador ele envia uma requisicao http ao servidor. o servidor responde com o codigo html da pagina que o navegador interpreta e exibe na tela.",
  "inteligencia artificial e um campo da computacao que busca criar sistemas capazes de realizar tarefas que normalmente exigem inteligencia humana. reconhecimento de voz visao computacional e traducao automatica sao exemplos praticos. o aprendizado de maquina e a principal tecnica usada hoje.",
  "o bluetooth recebeu esse nome em homenagem ao rei dinamarques harald bluetooth que unificou tribos escandinaves. a tecnologia une dispositivos sem fio em curtas distancias. criada em 1994 pela ericsson hoje esta presente em fones teclados mouses e inumeros dispositivos do cotidiano.",
  "compiladores sao programas que traduzem codigo escrito por humanos em instrucoes que o processador entende. sem compiladores cada programador precisaria escrever codigo diretamente em linguagem de maquina. grace hopper provou que computadores podiam fazer essa traducao automaticamente.",
];

const TEXTOS_LONGOS = [
  "python foi criada por guido van rossum e lancada em 1991 com foco em legibilidade e simplicidade. sua sintaxe limpa permite que iniciantes aprendam logica de programacao sem se perder em simbolos complexos. hoje e uma das linguagens mais usadas no mundo para ciencia de dados inteligencia artificial e automacao. grandes empresas como google netflix e spotify usam python em partes criticas de seus sistemas. a comunidade enorme e o ecossistema rico de bibliotecas fazem dela uma escolha natural para projetos de qualquer tamanho.",
  "javascript nasceu em apenas dez dias nas maos de brendan eich em 1995 para tornar paginas web interativas. o que comecou como um script simples de navegador se tornou uma linguagem completa capaz de rodar tanto no frontend quanto no backend com o node. nenhuma outra linguagem esta tao presente no cotidiano da internet. frameworks como react angular e vue transformaram como interfaces sao construidas. hoje javascript e a linguagem mais popular do mundo segundo pesquisas anuais com desenvolvedores de todo o planeta.",
  "c foi desenvolvida por dennis ritchie nos laboratorios bell na decada de 1970 e moldou praticamente tudo que veio depois. o proprio sistema operacional unix foi reescrito em c tornando possivel a portabilidade entre diferentes maquinas. ate hoje sistemas embarcados kernels e drivers sao escritos em c por seu controle preciso sobre o hardware. linguagens como c++ java e c# sao descendentes diretos do c. aprender c ainda hoje e considerado fundamental para entender como computadores realmente funcionam por baixo das abstracoes.",
  "java foi apresentada pela sun microsystems em 1995 com a promessa de escreva uma vez execute em qualquer lugar. sua maquina virtual permite que o mesmo codigo rode em windows linux e mac sem modificacoes. por decadas dominou o desenvolvimento corporativo e ainda e a base de milhoes de aplicacoes android. a robustez do ecossistema java e seu forte sistema de tipos atraem empresas que precisam de confiabilidade. bancos seguradoras e governos ao redor do mundo dependem de sistemas java que rodam ininterruptamente ha anos.",
  "rust foi projetada pela mozilla para substituir c e c++ em situacoes onde seguranca de memoria e critica. seu sistema de ownership elimina erros como ponteiros nulos e race conditions em tempo de compilacao sem precisar de um coletor de lixo. desenvolvedores que aprendem rust costumam dizer que a linguagem os ensina a pensar diferente. o sistema operacional android ja incorpora componentes escritos em rust. a microsoft esta reescrevendo partes do windows em rust para reduzir vulnerabilidades de seguranca.",
  "ada lovelace e considerada a primeira programadora da historia por ter escrito em 1843 um algoritmo para a maquina analitica de charles babbage. ela percebeu que a maquina poderia ir alem de calculos numericos e manipular qualquer simbolo seguindo regras. sua visao estava um seculo a frente do seu tempo. a linguagem de programacao ada criada para o departamento de defesa americano foi batizada em sua homenagem. seu trabalho so foi reconhecido devidamente no seculo vinte quando a computacao comecou a se desenvolver de verdade.",
  "alan turing desenvolveu durante a segunda guerra mundial a maquina que quebrou o codigo enigma usado pelos nazistas. seu trabalho teorico sobre maquinas de estado finito e computabilidade lancou as bases da ciencia da computacao moderna. o premio turing concedido anualmente pela acm leva seu nome como a maior honraria da area. apesar de seus feitos turing foi perseguido pelo governo britanico por sua orientacao sexual. em 2013 a rainha elizabeth concedeu-lhe um perdao postume reconhecendo a injustica historica cometida contra ele.",
  "grace hopper criou o primeiro compilador da historia em 1952 ao perceber que programadores perdiam tempo escrevendo instrucoes em linguagem de maquina. ela acreditava que computadores deveriam entender palavras em ingles e nao apenas zeros e uns. seu trabalho levou ao desenvolvimento do cobol linguagem que ainda processa trilhoes de transacoes bancarias hoje. ela tambem popularizou o termo bug depois de encontrar uma mariposa real dentro de um computador que causava falhas. grace hopper serviu na marinha americana e chegou ao posto de contra-almirante.",
  "linus torvalds tinha apenas 21 anos quando publicou em 1991 numa lista de emails que estava criando um sistema operacional por hobby. o que parecia um projeto pessoal cresceu para se tornar o linux o kernel mais usado no mundo presente em servidores smartphones e supercomputadores. torvalds provou que software colaborativo e aberto pode superar qualquer corporacao. hoje o linux roda em mais de 90 por cento dos servidores da internet e em todos os supercomputadores da lista top 500. o android que alimenta a maioria dos smartphones do mundo tambem e baseado no kernel linux.",
  "tim berners-lee propôs em 1989 enquanto trabalhava no cern um sistema de hipertexto para compartilhar informacoes entre pesquisadores. seu chefe na epoca anotou no projeto a mensagem vaga mas empolgante. tres anos depois a world wide web estava no ar e o mundo jamais voltaria a ser o mesmo. berners-lee recusou patentear a web deixando-a livre para todos. hoje ele lidera o movimento pela web aberta lutando contra a concentracao de poder nas maos de poucas empresas de tecnologia que transformaram sua invencao numa ferramenta de vigilancia e monopolio.",
  "um algoritmo e uma sequencia finita de instrucoes bem definidas para resolver um problema ou realizar uma tarefa. assim como uma receita de bolo descreve passo a passo como produzir um resultado os algoritmos guiam o computador atraves de operacoes logicas. a elegancia de um bom algoritmo esta em resolver o problema usando o menor numero de passos possivel. algoritmos de busca ordenacao e compressao estao presentes em quase todo software moderno. entender algoritmos e considerado uma das habilidades mais fundamentais para qualquer desenvolvedor de software.",
  "programacao orientada a objetos organiza o codigo em torno de entidades chamadas objetos que combinam dados e comportamentos. um carro por exemplo pode ser um objeto com atributos como cor e velocidade e metodos como acelerar e frear. essa forma de pensar aproxima o codigo da maneira como percebemos o mundo real. linguagens como java python e c++ suportam orientacao a objetos. o paradigma facilita a reutilizacao de codigo atraves de heranca e polimorfismo reduzindo duplicacao e tornando sistemas grandes mais faceis de manter e evoluir.",
  "controle de versao com git permite que desenvolvedores registrem cada mudanca no codigo como um snapshot no tempo. e possivel voltar a qualquer ponto do historico comparar versoes e trabalhar em paralelo sem medo de perder trabalho. o github transformou o git numa plataforma social onde milhoes colaboram em projetos abertos ao redor do mundo. pull requests code reviews e issues sao praticas que o github popularizou e que hoje sao padroes na industria. o git foi criado por linus torvalds em apenas dias como alternativa a um sistema proprietario que passou a cobrar pelo uso.",
  "apis sao interfaces que permitem que diferentes sistemas se comuniquem sem precisar conhecer os detalhes internos um do outro. quando um aplicativo de clima exibe a previsao do tempo ele provavelmente esta consultando uma api meteorologica em segundo plano. elas sao os blocos de construcao que tornam possivel a internet interconectada que usamos hoje. apis rest sao o padrao mais comum usando http para trocar dados em formato json. a economia de apis movimenta bilhoes de dolares com empresas cobrando por acesso a seus dados e servicos atraves delas.",
  "testes automatizados sao como uma rede de seguranca que garante que novas mudancas nao quebrem o que ja funcionava. a pratica de escrever o teste antes do codigo chamada desenvolvimento orientado a testes obriga o programador a pensar no comportamento esperado antes de implementar. times que testam bem dormem melhor a noite. testes unitarios de integracao e end to end cobrem diferentes niveis do sistema. grandes empresas como google e microsoft investem enormes recursos em infraestrutura de testes pois o custo de um bug em producao e muito maior do que preveni-lo.",
];

// ══════════════════════════════════════════════
// SELEÇÃO INTELIGENTE POR MODO
// ══════════════════════════════════════════════
function getPoolForCurrentMode() {
  if (state.customMode) return TEXTOS_LONGOS;
  const secs = state.mode;
  if (secs <= 15) return TEXTOS_CURTOS;
  if (secs <= 60) return TEXTOS_MEDIOS;
  return TEXTOS_LONGOS;
}

function generateWords(excludeIndex) {
  const pool = getPoolForCurrentMode();
  let candidates = pool.map((t, i) => ({ t, i }));
  if (excludeIndex !== undefined) {
    candidates = candidates.filter(x => x.i !== excludeIndex);
  }
  const picked = candidates[Math.floor(Math.random() * candidates.length)];
  state.lastTextIndex = picked.i;

  let texto = picked.t
    .replace(/[.,!?;:""«»]/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .toLowerCase();

  return texto.split(' ').filter(w => w.length > 0);
}

// ══════════════════════════════════════════════
// CONFIGURAÇÃO — URL DO SERVIDOR
// ══════════════════════════════════════════════
const SERVER_URL = 'http://localhost:3000';

// ══════════════════════════════════════════════
// SOCKET.IO — RANKING EM TEMPO REAL
// ══════════════════════════════════════════════
let socket = null;
let rankingData = { allTime: [], today: [], recent: [], stats: {} };
let rankActiveTab = 'alltime';

function initSocket() {
  if (typeof io === 'undefined') return;

  socket = io(SERVER_URL, { reconnectionDelay: 2000, timeout: 5000 });

  socket.on('connect', () => {
    setRankConnection(true);
    socket.emit('request_ranking');
  });

  socket.on('disconnect', () => setRankConnection(false));

  socket.on('ranking_update', data => {
    rankingData = data;
    updateRankLastTime();
    if (!$('pageRanking').classList.contains('page-hidden')) renderRanking();
    updateGlobalStats(data.stats);
  });
}

function setRankConnection(online) {
  const dot   = $('rankConnDot');
  const label = $('rankConnLabel');
  if (!dot) return;
  dot.className   = 'rank-conn-dot' + (online ? ' online' : ' offline');
  label.className = 'rank-conn-label' + (online ? ' online' : ' offline');
  label.textContent = online
    ? 'Conectado • tempo real'
    : 'Sem conexão — tentando reconectar...';
}

function updateRankLastTime() {
  const el = $('rankLastUpdate');
  if (!el) return;
  const now = new Date();
  el.textContent = 'Atualizado às ' + now.toLocaleTimeString('pt-BR', {
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
}

// ══════════════════════════════════════════════
// SALVAR RESULTADO NO SERVIDOR
// ══════════════════════════════════════════════
async function saveResultToAPI(result) {
  // Pega o nome salvo na sessão; usa 'Anônimo' se não houver
  const name = (sessionStorage.getItem('digita-user') || 'Anônimo').trim().slice(0, 20);

  // Monta o payload completo com o nome do usuário
  const payload = {
    name,
    wpm:      result.wpm,
    accuracy: result.accuracy,
    errors:   result.errors   ?? 0,
    chars:    result.chars    ?? 0,
    words:    result.words    ?? 0,
    duration: result.duration ?? 0,
    mode:     result.mode     ?? '15s',
  };

  // Envia via HTTP POST — funciona com ou sem socket conectado
  try {
    const res = await fetch(`${SERVER_URL}/api/results`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload),
    });
    if (!res.ok) {
      console.warn('[Digita] Falha ao salvar resultado:', res.status);
    }
  } catch (err) {
    console.warn('[Digita] Servidor offline — resultado não salvo:', err.message);
  }
}

// ══════════════════════════════════════════════
// RANKING — RENDER
// ══════════════════════════════════════════════
function updateGlobalStats(stats) {
  if (!stats) return;
  _bumpStat('gsTotalTests',   stats.total_tests   ?? '—');
  _bumpStat('gsTotalPlayers', stats.total_players ?? '—');
  _bumpStat('gsRecordWpm',    stats.record_wpm    ?? '—');
  _bumpStat('gsAvgWpm',       stats.avg_wpm       ?? '—');
}

function _bumpStat(id, val) {
  const el = $(id);
  if (!el) return;
  const prev = el.textContent;
  el.textContent = val;
  if (String(prev) !== String(val) && prev !== '—') {
    el.classList.remove('bump');
    void el.offsetWidth;
    el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 350);
  }
}

function renderRanking() {
  if (rankActiveTab === 'alltime')     renderTableAlltime();
  else if (rankActiveTab === 'today')  renderTableToday();
  else                                 renderFeedRecent();
}

function renderTableAlltime() {
  const body   = $('bodyAlltime');
  const rows   = rankingData.allTime || [];
  const maxWpm = rows.length ? rows[0].wpm : 1;

  if (!rows.length) {
    body.innerHTML = '<tr><td colspan="6" class="rank-empty">Nenhum resultado ainda. Seja o primeiro! 🏆</td></tr>';
    return;
  }

  body.innerHTML = rows.map((r, i) => {
    const pos = i + 1;
    return `
      <tr class="${pos <= 3 ? 'pos-' + pos : ''}">
        <td class="td-pos">${medalOrNum(pos)}</td>
        <td class="td-name">${nameCell(r.name)}</td>
        <td class="td-wpm">${wpmCell(r.wpm, maxWpm)}</td>
        <td class="td-acc">${accCell(r.accuracy)}</td>
        <td>${modeBadge(r.mode)}</td>
        <td class="td-date">${fmtDate(r.created_at)}</td>
      </tr>`;
  }).join('');
}

function renderTableToday() {
  const body   = $('bodyToday');
  const rows   = rankingData.today || [];
  const maxWpm = rows.length ? rows[0].wpm : 1;

  if (!rows.length) {
    body.innerHTML = '<tr><td colspan="6" class="rank-empty">Nenhum resultado hoje ainda. Comece agora! 🚀</td></tr>';
    return;
  }

  body.innerHTML = rows.map((r, i) => {
    const pos = i + 1;
    return `
      <tr class="${pos <= 3 ? 'pos-' + pos : ''}">
        <td class="td-pos">${medalOrNum(pos)}</td>
        <td class="td-name">${nameCell(r.name)}</td>
        <td class="td-wpm">${wpmCell(r.wpm, maxWpm)}</td>
        <td class="td-acc">${accCell(r.accuracy)}</td>
        <td>${modeBadge(r.mode)}</td>
        <td class="td-date">${fmtTime(r.created_at)}</td>
      </tr>`;
  }).join('');
}

function renderFeedRecent() {
  const feed  = $('rankFeed');
  const items = rankingData.recent || [];

  if (!items.length) {
    feed.innerHTML = '<div class="rank-empty">Nenhuma atividade recente.</div>';
    return;
  }

  feed.innerHTML = items.map(r => `
    <div class="rank-feed-item">
      <div class="rank-feed-avatar">${r.name.charAt(0).toUpperCase()}</div>
      <div class="rank-feed-info">
        <div class="rank-feed-name">${escHtml(r.name)}</div>
        <div class="rank-feed-meta">${modeBadge(r.mode)} &nbsp;${fmtDateTime(r.created_at)}</div>
      </div>
      <div class="rank-feed-wpm">
        ${r.wpm}
        <span>WPM</span>
      </div>
    </div>`).join('');
}

// ── Helpers de célula ──────────────────────────
function medalOrNum(pos) {
  if (pos === 1) return '<span class="rank-medal">🥇</span>';
  if (pos === 2) return '<span class="rank-medal">🥈</span>';
  if (pos === 3) return '<span class="rank-medal">🥉</span>';
  return `<span class="rank-pos-num">${pos}</span>`;
}

function nameCell(name) {
  return `
    <div class="rank-name-wrap">
      <div class="rank-avatar">${escHtml(name.charAt(0).toUpperCase())}</div>
      <span class="rank-player-name">${escHtml(name)}</span>
    </div>`;
}

function wpmCell(wpm, maxWpm) {
  const pct = Math.round((wpm / maxWpm) * 100);
  return `
    <div>
      <div class="rank-wpm">${wpm}</div>
      <div class="rank-wpm-bar" style="width:${pct}%"></div>
    </div>`;
}

function accCell(acc) {
  const cls = acc >= 95 ? 'high' : acc >= 85 ? 'mid' : '';
  return `<span class="rank-acc-val ${cls}">${acc}%</span>`;
}

function modeBadge(mode) {
  return `<span class="rank-mode-badge">${escHtml(mode || '—')}</span>`;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function fmtDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' });
}

function fmtTime(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function fmtDateTime(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
}

// ── Abas internas do ranking ───────────────────
(function initRankTabs() {
  document.querySelectorAll('.rank-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.rank-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.rank-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      rankActiveTab = tab.dataset.tab;
      const panelId = 'rankPanel' + rankActiveTab.charAt(0).toUpperCase() + rankActiveTab.slice(1);
      $( panelId ).classList.add('active');
      renderRanking();
    });
  });
})();

// ══════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════
const state = {
  mode: 15, words: [], input: '',
  wordIndex: 0, charIndex: 0,
  started: false, finished: false,
  startTime: null, timer: null, timeLeft: 15,
  keystrokes: 0,
  keyErrors: 0,
  liveErrors: 0,
  correctChars: 0,
  totalTyped: 0,
  wpmHistory: [], wpmInterval: null,
  focused: false, customMode: false,
  lastTextIndex: -1,
  parasTotal: 'inf',
  parasUsed: 0,
  currentPara: 1,
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

// ══════════════════════════════════════════════
// NAVEGAÇÃO DE PÁGINAS
// ══════════════════════════════════════════════
const pages = {
  home:    $('pageHome'),
  dicas:   $('pageDicas'),
  sobre:   $('pageSobre'),
  ranking: $('pageRanking'),
};

// Controle de som por página
let isTypingPage = false;

function showPage(name) {
  Object.entries(pages).forEach(([key, el]) => {
    if (el) el.classList.toggle('page-hidden', key !== name);
  });

  if (name === 'ranking') {
    renderRanking();
    updateGlobalStats(rankingData.stats);
    if (socket && socket.connected) socket.emit('request_ranking');
  }

  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === name);
  });

  if (modalOverlay) modalOverlay.classList.remove('active');

  // controle de som
  isTypingPage = (name === 'home');
}

document.querySelectorAll('.nav-link').forEach(btn => {
  btn.addEventListener('click', () => {
    showPage(btn.dataset.page);
    if (btn.dataset.page === 'home') setTimeout(focusInput, 50);
  });
});

const sobreStartBtn = $('sobreStartBtn');
if (sobreStartBtn) {
  sobreStartBtn.addEventListener('click', () => {
    showPage('home');
    setTimeout(focusInput, 50);
  });
}

// ══════════════════════════════════════════════
// TESTE DE DIGITAÇÃO
// ══════════════════════════════════════════════
function init(newText = false) {
  clearInterval(state.timer);
  clearInterval(state.wpmInterval);
  Object.assign(state, {
    input: '', wordIndex: 0, charIndex: 0,
    started: false, finished: false, startTime: null,
    keystrokes: 0, keyErrors: 0, liveErrors: 0,
    totalTyped: 0, correctChars: 0,
    wpmHistory: [],
    timeLeft: state.customMode ? Infinity : state.mode,
    parasUsed: 0,
    currentPara: 1,
  });

  if (newText) state.words = generateWords();
  renderWords();
  updateStats(false);
  typingInput.value = '';
  if (modalOverlay) modalOverlay.classList.remove('active');
  const co = $('congratsOverlay');
  if (co) co.classList.remove('active');
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

  if (val.endsWith(' ')) {
    const trimmed = val.trim();
    if (hasError(trimmed, currentWord)) {
      typingInput.value = trimmed;
      shakeBox();
      state.charIndex = trimmed.length;
      markLive(state.wordIndex, trimmed);
      updateCursor();
      return;
    }
    state.keystrokes  += trimmed.length + 1;
    markWord(state.wordIndex, trimmed);
    state.totalTyped  += trimmed.length + 1;
    state.correctChars += countCorrect(trimmed, currentWord) + 1;
    state.liveErrors   = 0;
    state.wordIndex++;
    state.charIndex    = 0;
    typingInput.value  = '';

    if (state.wordIndex >= state.words.length) {
      state.currentPara++;
      // atingiu o limite de parágrafos → finaliza
      if (state.parasTotal !== 'inf' && state.currentPara > state.parasTotal) {
        finishTest();
        return;
      }
      handleNewTextNeeded();
      return;
    }

    updateCursor();
    updateStats(true);
    return;
  }

  const prev  = state.charIndex;
  const typed = val.length;

  if (typed > prev) {
    state.keystrokes++;
    const ci = typed - 1;
    if (val[ci] !== (currentWord[ci] || '')) {
      state.keyErrors++;
    }
  }

  let live = 0;
  for (let i = 0; i < val.length; i++) {
    if (val[i] !== (currentWord[i] || '')) live++;
  }
  state.liveErrors = live;
  state.charIndex  = val.length;
  markLive(state.wordIndex, val);
  updateCursor();
  updateStats(true);
}

function handleKeydown(e) {
  if (e.key === 'Tab') { e.preventDefault(); init(false); focusInput(); return; }
  if (e.key === 'Backspace' && typingInput.value.length === 0 && state.wordIndex > 0) {
    state.wordIndex--;
    typingInput.value = '';
    state.charIndex   = 0;
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
  const word    = state.words[wi];
  letters.forEach((lEl, ci) => {
    lEl.classList.remove('correct', 'incorrect', 'cursor');
    if (ci < typed.length)
      lEl.classList.add(typed[ci] === word[ci] ? 'correct' : 'incorrect');
    else
      lEl.classList.add('incorrect');
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
  state.started   = true;
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

// ── Carrega próximo texto sem parar o timer ────
function handleNewTextNeeded() {
  state.parasUsed++;

  if (state.parasTotal !== 'inf' && state.parasUsed >= state.parasTotal) {
    finishTest();
    return;
  }

  state.words     = generateWords(state.lastTextIndex);
  state.wordIndex = 0;
  state.charIndex = 0;
  typingInput.value = '';
  renderWords();
  updateCursor();
  _updateParaCounter();
}

// ── Parabéns ───────────────────────────────────
function showCongrats(wpm, acc, elapsed) {
  const overlay = $('congratsOverlay');
  const emoji   = $('congratsEmoji');
  if (!overlay) return;

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
    sub.textContent = `Texto completo! Sobraram ${formatTime(state.timeLeft)} no cronômetro.`;
  }

  $('congratsWpm').textContent  = wpm;
  $('congratsAcc').textContent  = acc + '%';
  $('congratsTime').textContent = Math.round(elapsed) + 's';

  overlay.classList.add('active');
}

function closeCongrats(showFull) {
  const co = $('congratsOverlay');
  if (co) co.classList.remove('active');
  if (showFull && modalOverlay) modalOverlay.classList.add('active');
}

// ── Preenche o modal de resultado ─────────────
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

  // ✅ SALVA as métricas no servidor com o nome do usuário logado
  saveResultToAPI({
    wpm,
    accuracy: acc,
    errors:   ke,
    chars:    state.correctChars,
    words:    state.wordIndex,
    duration: Math.round(elapsed),
    mode:     state.customMode ? 'custom' : state.mode + 's',
  });
}

// ── Finaliza o teste ───────────────────────────
function finishTest() {
  clearInterval(state.timer);
  clearInterval(state.wpmInterval);
  state.finished = true;
  typingInput.blur();
  typingBox.classList.remove('focused');

  const elapsed = (Date.now() - state.startTime) / 1000;
  const ks      = state.keystrokes;
  const ke      = state.keyErrors;
  const wpm     = elapsed > 0 ? Math.round((state.correctChars / 5) / (elapsed / 60)) : 0;
  const acc     = ks > 0 ? Math.round(((ks - ke) / ks) * 100) : 100;

  const completouTexto  = state.wordIndex >= state.words.length;
  const tempoSobrou     = !state.customMode && state.timeLeft > 0;
  const parasLimiteDone = state.parasTotal !== 'inf' && state.parasUsed >= state.parasTotal;
  const deveParabenizar = parasLimiteDone || (completouTexto && (state.customMode || tempoSobrou));

  // Preenche modal E salva no servidor
  prepareResults(elapsed, wpm, acc, ke);

  if (deveParabenizar) {
    showCongrats(wpm, acc, elapsed);
  } else {
    if (modalOverlay) modalOverlay.classList.add('active');
  }
}

function updateStats(live) {
  const elapsed = state.startTime ? (Date.now() - state.startTime) / 60000 : 0;
  const wpm     = elapsed > 0 ? Math.round((state.correctChars / 5) / elapsed) : 0;

  const currentVal  = typingInput.value || '';
  const currentWord = state.words[state.wordIndex] || '';
  let currentKs = currentVal.length;
  let currentKe = 0;
  for (let i = 0; i < currentVal.length; i++) {
    if (currentVal[i] !== (currentWord[i] || '')) currentKe++;
  }
  const totalKs = state.keystrokes + currentKs;
  const totalKe = state.keyErrors  + currentKe;
  const acc     = totalKs > 0 ? Math.round(((totalKs - totalKe) / totalKs) * 100) : 100;

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

function drawChart() {
  const canvas = $('wpmChart');
  const ctx    = canvas.getContext('2d');
  const dpr    = window.devicePixelRatio || 1;
  const W      = canvas.offsetWidth || 500;
  const H      = 100;
  canvas.width  = W * dpr;
  canvas.height = H * dpr;
  ctx.scale(dpr, dpr);

  const data = state.wpmHistory;
  if (!data.length) return;

  const isLight   = document.documentElement.getAttribute('data-theme') === 'light';
  const accent    = isLight ? '#c0392b' : '#e05040';
  const gridColor = isLight ? 'rgba(0,0,0,0.08)'    : 'rgba(255,255,255,0.07)';
  const textColor = isLight ? '#4a5a78'              : '#8880b0';
  const fillTop   = isLight ? 'rgba(192,57,43,0.16)' : 'rgba(224,80,64,0.20)';

  ctx.clearRect(0, 0, W, H);
  const maxVal = Math.max(...data, 1);
  const pad    = { l: 36, r: 12, t: 10, b: 28 };
  const cW     = W - pad.l - pad.r;
  const cH     = H - pad.t - pad.b;

  ctx.strokeStyle = gridColor;
  ctx.lineWidth   = 1;
  [0, 0.5, 1].forEach(t => {
    const y = pad.t + cH * (1 - t);
    ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(W - pad.r, y); ctx.stroke();
    ctx.fillStyle  = textColor;
    ctx.font       = '10px DM Mono, monospace';
    ctx.textAlign  = 'right';
    ctx.fillText(Math.round(maxVal * t), pad.l - 6, y + 4);
  });

  if (data.length < 2) return;

  const grad = ctx.createLinearGradient(0, pad.t, 0, pad.t + cH);
  grad.addColorStop(0, fillTop);
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.moveTo(pad.l, pad.t + cH);
  data.forEach((v, i) => {
    const x = pad.l + (i / (data.length - 1)) * cW;
    const y = pad.t + cH * (1 - v / maxVal);
    ctx.lineTo(x, y);
  });
  ctx.lineTo(pad.l + cW, pad.t + cH);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = accent;
  ctx.lineWidth   = 2;
  ctx.lineJoin    = 'round';
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
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = textColor;
  ctx.font      = '10px DM Mono, monospace';
  ctx.textAlign = 'center';
  const step = Math.max(1, Math.floor(data.length / 5));
  for (let i = 0; i < data.length; i += step) {
    ctx.fillText(i + 's', pad.l + (i / (data.length - 1)) * cW, H - 4);
  }
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
  typingBox.classList.add('focused');
  typingBox.classList.remove('blurred');
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
const modeSelect = document.getElementById('modeSelect');
const paraSelect = document.getElementById('paraSelect');

if (modeSelect) {
  modeSelect.addEventListener('change', () => {
    const mode = modeSelect.value;
    state.customMode = mode === 'custom';
    state.mode       = state.customMode ? null : parseInt(mode);
    state.timeLeft   = state.customMode ? Infinity : state.mode;
    init(true);
    focusInput();
  });
}

if (paraSelect) {
  paraSelect.addEventListener('change', () => {
    const val = paraSelect.value;
    state.parasTotal = val === 'inf' ? 'inf' : parseInt(val);
    init(true);
    focusInput();
  });
}

// ── Botões ─────────────────────────────────────
$('restartBtn').addEventListener('click',  () => { init(false); focusInput(); });
$('newTextBtn').addEventListener('click',  () => { init(true);  focusInput(); });
$('modalRestart').addEventListener('click',() => { init(false); focusInput(); });
$('modalNew').addEventListener('click',    () => { init(true);  focusInput(); });

// ── Tab reinicia ───────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Tab') {
    e.preventDefault();
    if (!modalOverlay.classList.contains('active') && !$('pageHome').classList.contains('page-hidden')) {
      init(false);
      focusInput();
      showToast('Reiniciado ↺');
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
  const next    = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  showToast(next === 'light' ? 'Tema claro' : 'Tema escuro');
});

// ── Som ────────────────────────────────────────
const soundBtn = $('soundToggle');
const keySound = new Audio('Som/lightningbulb-spacebar-click-keyboard-199448.mp3');
keySound.volume = 0.5;

let soundOn = true;

if (soundBtn) {
  soundBtn.addEventListener('click', () => {
    soundOn = !soundOn;
    soundBtn.classList.toggle('on', soundOn);
    localStorage.setItem('sound', soundOn);
  });
}

const savedSound = localStorage.getItem('sound');
if (savedSound !== null) {
  soundOn = savedSound === 'true';
  if (soundBtn) soundBtn.classList.toggle('on', soundOn);
}

document.addEventListener('keydown', e => {
  if (!soundOn || !isTypingPage) return;
  if (e.ctrlKey || e.altKey || e.metaKey) return;
  keySound.currentTime = 0;
  keySound.play().catch(() => {});
});

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

// ══════════════════════════════════════════════
// PERFIL DO USUÁRIO
// ══════════════════════════════════════════════
const profileSession = { bestWpm: 0, bestAcc: 0, tests: 0 };

function openProfile() {
  const overlay = $('profileOverlay');
  const name    = sessionStorage.getItem('digita-user') || '—';

  $('profileNameDisplay').textContent = name;
  $('profileNameInput').value         = name;

  _renderProfileAvatar();

  const deleteBtn = $('profileDeleteBtn');
  if (deleteBtn) {
    deleteBtn.style.display = sessionStorage.getItem('digita-photo') ? 'flex' : 'none';
  }

  const savedId = sessionStorage.getItem('digita-avatar-id');
  document.querySelectorAll('.profile-img-avatar-btn').forEach(btn => {
    btn.style.borderColor = '';
    btn.style.boxShadow   = '';
  });
  if (savedId) {
    const savedBtn = document.querySelector(`.profile-img-avatar-btn[onclick="setImgAvatar('${savedId}')"]`);
    if (savedBtn) {
      savedBtn.style.borderColor = '#c0392b';
      savedBtn.style.boxShadow   = '0 0 10px rgba(192,57,43,0.55)';
    }
  }

  $('profBestWpm').textContent = profileSession.bestWpm || '—';
  $('profBestAcc').textContent = profileSession.bestAcc ? profileSession.bestAcc + '%' : '—';
  $('profTests').textContent   = profileSession.tests;

  overlay.classList.add('active');
}

function closeProfile(e) {
  if (e.target === $('profileOverlay')) $('profileOverlay').classList.remove('active');
}

function closeProfileBtn() {
  $('profileOverlay').classList.remove('active');
}

function toggleEditName() {
  const edit   = $('profileNameEdit');
  const isOpen = edit.style.display !== 'none';
  edit.style.display = isOpen ? 'none' : 'flex';
  if (!isOpen) {
    const input = $('profileNameInput');
    input.focus();
    input.select();
  }
}

function saveName() {
  const input = $('profileNameInput');
  const name  = input.value.trim();
  if (!name) return;
  sessionStorage.setItem('digita-user', name);
  $('profileNameDisplay').textContent = name;
  $('headerUserName').textContent     = name;
  $('headerUserAvatar').textContent   = name.charAt(0).toUpperCase();
  _renderProfileAvatar();
  $('profileNameEdit').style.display  = 'none';
  showToast('Nome atualizado ✓');
}

function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    sessionStorage.setItem('digita-photo', e.target.result);
    _renderProfileAvatar();
    _renderHeaderAvatar();
    showToast('Foto atualizada ✓');
  };
  reader.readAsDataURL(file);
}

function _renderProfileAvatar() {
  const avatar = $('profileAvatar');
  const photo  = sessionStorage.getItem('digita-photo');
  const name   = sessionStorage.getItem('digita-user') || '?';
  avatar.innerHTML = photo
    ? `<img src="${photo}" alt="foto de perfil" />`
    : name.charAt(0).toUpperCase();
}

function _renderHeaderAvatar() {
  const avatar = $('headerUserAvatar');
  const photo  = sessionStorage.getItem('digita-photo');
  const name   = sessionStorage.getItem('digita-user') || '?';
  avatar.innerHTML = photo
    ? `<img src="${photo}" alt="foto" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />`
    : name.charAt(0).toUpperCase();
}

function logoutProfile() {
  sessionStorage.removeItem('digita-user');
  sessionStorage.removeItem('digita-photo');
  $('profileOverlay').classList.remove('active');
  location.reload();
}

function setImgAvatar(id) {
  document.querySelectorAll('.profile-img-avatar-btn').forEach(btn => {
    btn.style.borderColor = '';
    btn.style.boxShadow   = '';
  });
  const selectedBtn = document.querySelector(`.profile-img-avatar-btn[onclick="setImgAvatar('${id}')"]`);
  if (selectedBtn) {
    selectedBtn.style.borderColor = '#c0392b';
    selectedBtn.style.boxShadow   = '0 0 10px rgba(192,57,43,0.55)';
    const img = selectedBtn.querySelector('img');
    if (img) {
      sessionStorage.setItem('digita-photo', _imgToDataUrl(img));
      sessionStorage.setItem('digita-avatar-id', id);
    }
  }
  _renderProfileAvatar();
  _renderHeaderAvatar();
  showToast('Avatar atualizado ✓');
}

function _imgToDataUrl(imgEl) {
  try {
    const canvas  = document.createElement('canvas');
    canvas.width  = imgEl.naturalWidth  || imgEl.width  || 128;
    canvas.height = imgEl.naturalHeight || imgEl.height || 128;
    canvas.getContext('2d').drawImage(imgEl, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/png');
  } catch {
    return imgEl.src;
  }
}

function deletePhoto() {
  sessionStorage.removeItem('digita-photo');
  sessionStorage.removeItem('digita-avatar-id');
  document.querySelectorAll('.profile-img-avatar-btn').forEach(btn => {
    btn.style.borderColor = '';
    btn.style.boxShadow   = '';
  });
  _renderProfileAvatar();
  _renderHeaderAvatar();
  const deleteBtn = $('profileDeleteBtn');
  if (deleteBtn) deleteBtn.style.display = 'none';
  showToast('Avatar removido ✓');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') $('profileOverlay').classList.remove('active');
});

function updateProfileStats(wpm, acc) {
  profileSession.tests++;
  if (wpm > profileSession.bestWpm) profileSession.bestWpm = wpm;
  if (acc > profileSession.bestAcc) profileSession.bestAcc = acc;
}

// ── Contador de parágrafos ─────────────────────
function _updateParaCounter() {
  const counter = $('paraCounter');
  if (!counter) return;
  if (state.parasTotal === 'inf') {
    counter.textContent = '';
    counter.style.display = 'none';
    return;
  }
  counter.style.display = 'flex';
  counter.textContent   = state.parasUsed + ' / ' + state.parasTotal;
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

// ══════════════════════════════════════════════
// BOOT
// ══════════════════════════════════════════════
initSocket();
applyTheme(localStorage.getItem('digita-theme') || 'dark');

// ── Tela de Boas-Vindas ────────────────────────
(function initWelcome() {
  const screen  = $('welcomeScreen');
  const input   = $('welcomeName');
  const btn     = $('welcomeBtn');
  const hUser   = $('headerUser');

  const savedName = sessionStorage.getItem('digita-user');
  if (savedName) {
    screen.classList.add('hidden');
    showUserBadge(savedName);
    init(true);
    setTimeout(focusInput, 300);
    return;
  }

  input.addEventListener('input', () => {
    btn.disabled = input.value.trim().length === 0;
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
  input.addEventListener('keydown', e => { if (e.key === 'Enter') enterApp(); });
  setTimeout(() => input.focus(), 400);

  function showUserBadge(name) {
    $('headerUserName').textContent = name;
    hUser.classList.add('visible');
    _renderHeaderAvatar();
  }
})();