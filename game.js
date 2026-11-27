/* ==========================================================================
   TORNADO NA ESCOLA - Lógica Principal, Áudio Sintetizado e Integração Portal
   Autor: Pedro (9º B - Escola Vicente Rijo)
   ========================================================================== */

// Lista das 10 rodadas com história, pergunta, 3 opções e explicação oficial da Defesa Civil
const RODADAS = [
  {
    cena: "andando",
    legenda: "A sirene de emergência toca enquanto o céu escurece rápido.",
    historia: "Você está na sala de aula do 9º B quando o vento começa a bater forte nos vidros e a sirene de emergência da escola dispara.",
    historiaDificil: "O vento uiva forte lá fora e a sirene toca sem parar! As janelas vibram com a pressão do ar.",
    pergunta: "O que fazer primeiro?",
    opcoes: [
      { texto: "Ficar longe da janela e ir para um local interno sem vidros.", ideal: true },
      { texto: "Juntar carteiras do lado da janela e entrar embaixo.", ideal: false },
      { texto: "Correr até a janela para filmar a formação do tornado.", ideal: false }
    ],
    explicacao: "Orientação da Defesa Civil: Afaste-se imediatamente de janelas e vidros, pois podem estilhaçar com o vento e objetos arremessados. Procure um corredor ou sala interna."
  },
  {
    cena: "correndo",
    legenda: "A turma sai da sala em direção ao corredor interno.",
    historia: "Vocês chegaram ao corredor interno do térreo, longe das janelas externas. O barulho do vento fica cada vez mais alto.",
    historiaDificil: "O corredor treme com as rajadas de vento! Poeira entra por baixo das portas externas.",
    pergunta: "Onde se proteger agora?",
    opcoes: [
      { texto: "Subir para o último andar para ficar longe do chão.", ideal: false },
      { texto: "Embaixo de uma mesa ou estrutura resistente no andar mais baixo.", ideal: true },
      { texto: "Ficar em pé encostado na porta de vidro da entrada.", ideal: false }
    ],
    explicacao: "Orientação da Defesa Civil: Vá para o andar mais baixo da escola e proteja a cabeça e o pescoço embaixo de algo resistente para evitar ferimentos por queda de objetos."
  },
  {
    cena: "tremendo",
    legenda: "Um colega entra em pânico perto da saída.",
    historia: "No meio do caminho, um colega entra em pânico e diz que vai correr para o pátio aberto para tentar ir embora.",
    historiaDificil: "Um colega grita assustado e tenta abrir a porta que dá direto para o pátio descoberto!",
    pergunta: "O que fazer nessa situação?",
    opcoes: [
      { texto: "Chamar o colega para o local seguro interno com o grupo.", ideal: true },
      { texto: "Sair correndo atrás dele para o meio do pátio.", ideal: false },
      { texto: "Abrir todas as portas da escola para o vento passar.", ideal: false }
    ],
    explicacao: "Orientação da Defesa Civil: Nunca vá para áreas abertas ou tente fugir durante a passagem do tornado. Chame o colega para o abrigo interno."
  },
  {
    cena: "tremendo",
    legenda: "Estrondos de vidros quebrando ecoam pelo prédio.",
    historia: "De repente, vocês ouvem o som alto de vidros quebrando em uma sala próxima onde ninguém estava.",
    historiaDificil: "Vidros estilhaçam no corredor vizinho! O som é ensurdecedor e alguns alunos se assustam.",
    pergunta: "Qual é a atitude mais segura?",
    opcoes: [
      { texto: "Sair do abrigo para olhar o que quebrou na outra sala.", ideal: false },
      { texto: "Correr para perto das janelas para ver se o tornado já foi.", ideal: false },
      { texto: "Manter-se protegido, esperar o barulho diminuir e verificar com cuidado.", ideal: true }
    ],
    explicacao: "Orientação da Defesa Civil: Permaneça protegido e longe de estilhaços até o perigo diminuir, verificando o ambiente com cautela antes de se mover."
  },
  {
    cena: "tremendo",
    legenda: "O vento parece diminuir, mas a sirene continua tocando.",
    historia: "Por alguns segundos, o barulho do vento diminui um pouco, mas a sirene de alerta da escola continua tocando.",
    historiaDificil: "Uma calmaria repentina acontece, mas o céu continua escuro e a sirene não desligou!",
    pergunta: "O que fazer nesse momento?",
    opcoes: [
      { texto: "Voltar correndo para a sala de aula para pegar a mochila.", ideal: false },
      { texto: "Continuar no local seguro e esperar orientação oficial.", ideal: true },
      { texto: "Sair para o pátio para comemorar que passou.", ideal: false }
    ],
    explicacao: "Orientação da Defesa Civil: Uma pausa no vento pode ser apenas uma mudança na trajetória da tempestade. Só saia após o fim oficial do alerta."
  },
  {
    cena: "andando",
    legenda: "A professora organiza a turma no corredor protegido.",
    historia: "A professora pede para você ajudar a acalmar os colegas e lembrar a regra principal de proteção da Defesa Civil.",
    historiaDificil: "Com o barulho lá fora, a professora pede que você repita rápido a regra de ouro para a turma!",
    pergunta: "Qual é a melhor lembrança para passar aos colegas?",
    opcoes: [
      { texto: "Longe de janelas, local interno sem vidros e embaixo de algo resistente.", ideal: true },
      { texto: "Juntar carteiras perto das janelas para segurar o vento.", ideal: false },
      { texto: "Ficar perto das portas de saída para correr se precisar.", ideal: false }
    ],
    explicacao: "Orientação da Defesa Civil: A regra básica é sempre: longe de janelas, em cômodo interno no andar mais baixo e protegido sob algo resistente."
  },
  {
    cena: "andando",
    legenda: "Simulação de deslocamento organizado em grupo.",
    historia: "Agora pense em um treino de emergência preventivo na Escola Vicente Rijo antes mesmo da tempestade chegar.",
    historiaDificil: "O alarme de treino preventivo dispara durante a aula de Robótica!",
    pergunta: "Qual deve ser o primeiro passo da turma?",
    opcoes: [
      { texto: "Correr empurrando os colegas para chegar primeiro.", ideal: false },
      { texto: "Guardar todos os cadernos e materiais antes de levantar.", ideal: false },
      { texto: "Seguir em silêncio e em ordem para o ponto seguro interno.", ideal: true }
    ],
    explicacao: "Orientação da Defesa Civil: Em treinos ou emergências reais, deslocar-se em ordem e silêncio evita acidentes e permite ouvir instruções."
  },
  {
    cena: "correndo",
    legenda: "Um aluno mais novo aparece assustado perto da entrada.",
    historia: "Perto da entrada do corredor seguro, você vê um aluno mais novo chorando e paralisado de medo perto de uma área exposta.",
    historiaDificil: "Um aluno menor está chorando perto de uma porta com vidro enquanto o vento volta a soprar forte!",
    pergunta: "O que fazer para ajudar?",
    opcoes: [
      { texto: "Levar o aluno para o local seguro com calma.", ideal: true },
      { texto: "Deixar ele lá e avisar só quando a tempestade acabar.", ideal: false },
      { texto: "Mandar ele correr sozinho para o pátio aberto.", ideal: false }
    ],
    explicacao: "Orientação da Defesa Civil: Ajudar com calma quem está em área de risco a ir para o abrigo interno salva vidas sem expor o grupo."
  },
  {
    cena: "andando",
    legenda: "O tornado se afasta e a sirene finalmente para.",
    historia: "O tornado finalmente se afastou da região, o vento cessou e a sirene de emergência foi desligada.",
    historiaDificil: "O silêncio volta após a tempestade, mas pode haver fios caídos ou vidros quebrados na escola.",
    pergunta: "Qual é a atitude mais segura agora?",
    opcoes: [
      { texto: "Sair correndo sozinho para explorar os estragos lá fora.", ideal: false },
      { texto: "Esperar orientação dos adultos e verificar o local com cuidado, em grupo.", ideal: true },
      { texto: "Mexer em fios elétricos soltos no corredor.", ideal: false }
    ],
    explicacao: "Orientação da Defesa Civil: Após o tornado, aguarde a liberação dos responsáveis, fique em grupo e nunca toque em fios ou estruturas danificadas."
  },
  {
    cena: "andando",
    legenda: "A turma está a salvo e prepara um guia rápido para a escola.",
    historia: "Com todos seguros na Escola Vicente Rijo, a direção pede uma mensagem curta para ensinar os outros alunos a se protegerem.",
    historiaDificil: "Último desafio! Escolha a mensagem oficial para o cartaz de segurança da escola:",
    pergunta: "Qual mensagem resume melhor a proteção contra tornados?",
    opcoes: [
      { texto: "Junte carteiras ao lado da janela e fique olhando o céu.", ideal: false },
      { texto: "Corra para o pátio aberto assim que ouvir a sirene.", ideal: false },
      { texto: "Fique longe de janelas, vá para local interno sem vidros e proteja-se embaixo de algo resistente.", ideal: true }
    ],
    explicacao: "Parabéns! Essa é exatamente a recomendação oficial da Defesa Civil para escolas durante tornados."
  }
];

// Referências dos elementos da tela
const telaInicio = document.getElementById("tela-inicio");
const telaJogo = document.getElementById("tela-jogo");
const telaFinal = document.getElementById("tela-final");

const btnIniciar = document.getElementById("btn-iniciar");
const btnReiniciar = document.getElementById("btn-reiniciar");
const btnProximo = document.getElementById("btn-proximo");
const btnSom = document.getElementById("btn-som");

const contadorRodada = document.getElementById("contador-rodada");
const contadorErros = document.getElementById("contador-erros");
const tempoSegundos = document.getElementById("tempo-segundos");
const barraProgresso = document.getElementById("barra-progresso");

const textoHistoria = document.getElementById("texto-historia");
const textoPergunta = document.getElementById("texto-pergunta");
const botoesOpcao = Array.from(document.querySelectorAll(".btn-opcao"));

const caixaFeedback = document.getElementById("caixa-feedback");
const feedbackTitulo = document.getElementById("feedback-titulo");
const feedbackExplicacao = document.getElementById("feedback-explicacao");

const grupoPersonagens = document.getElementById("grupo-personagens");
const legendaCena = document.getElementById("legenda-cena");
const flashRelampago = document.getElementById("flash-relampago");

// Variáveis de estado do jogo
let rodadaAtual = 0;
let errosTempo = 0;
let escolhasIdeais = 0;
let tempoLimiteAtual = 12; // Começa com 12 segundos e diminui se errar
let tempoRestante = 12;
let intervaloTimer = null;
let intervaloAmbiente = null;
let inicioPartidaMs = 0;
let rodadaRespondida = false;
let somAtivo = true;
let audioCtx = null;

/* ==========================================================================
   SISTEMA DE ÁUDIO SINTETIZADO (Web Audio API - 100% Offline)
   ========================================================================== */
function iniciarAudio() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

function tocarSom(tipo) {
  if (!somAtivo) return;
  iniciarAudio();
  if (!audioCtx) return;

  const agora = audioCtx.currentTime;

  if (tipo === "acerto") {
    const osc = audioCtx.createOscillator();
    const ganho = audioCtx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(523.25, agora); // Dó
    osc.frequency.setValueAtTime(659.25, agora + 0.1); // Mi
    ganho.gain.setValueAtTime(0.15, agora);
    ganho.gain.exponentialRampToValueAtTime(0.001, agora + 0.3);
    osc.connect(ganho);
    ganho.connect(audioCtx.destination);
    osc.start(agora);
    osc.stop(agora + 0.3);
  } else if (tipo === "erro") {
    const osc = audioCtx.createOscillator();
    const ganho = audioCtx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(220, agora);
    osc.frequency.linearRampToValueAtTime(140, agora + 0.35);
    ganho.gain.setValueAtTime(0.15, agora);
    ganho.gain.exponentialRampToValueAtTime(0.001, agora + 0.35);
    osc.connect(ganho);
    ganho.connect(audioCtx.destination);
    osc.start(agora);
    osc.stop(agora + 0.35);
  } else if (tipo === "sirene") {
    const osc = audioCtx.createOscillator();
    const ganho = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(580, agora);
    osc.frequency.linearRampToValueAtTime(760, agora + 0.25);
    osc.frequency.linearRampToValueAtTime(580, agora + 0.5);
    ganho.gain.setValueAtTime(0.06, agora);
    ganho.gain.exponentialRampToValueAtTime(0.001, agora + 0.52);
    osc.connect(ganho);
    ganho.connect(audioCtx.destination);
    osc.start(agora);
    osc.stop(agora + 0.52);
  } else if (tipo === "trovao") {
    // Ruído branco filtrado para simular trovão e vento
    const bufferSize = audioCtx.sampleRate * 0.6;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filtro = audioCtx.createBiquadFilter();
    filtro.type = "lowpass";
    filtro.frequency.setValueAtTime(180, agora);

    const ganho = audioCtx.createGain();
    ganho.gain.setValueAtTime(0.18, agora);
    ganho.gain.exponentialRampToValueAtTime(0.001, agora + 0.6);

    noise.connect(filtro);
    filtro.connect(ganho);
    ganho.connect(audioCtx.destination);
    noise.start(agora);
  } else if (tipo === "passo") {
    const osc = audioCtx.createOscillator();
    const ganho = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(130, agora);
    ganho.gain.setValueAtTime(0.05, agora);
    ganho.gain.exponentialRampToValueAtTime(0.001, agora + 0.08);
    osc.connect(ganho);
    ganho.connect(audioCtx.destination);
    osc.start(agora);
    osc.stop(agora + 0.08);
  }
}

/* ==========================================================================
   ANIMAÇÃO DO PALCO E CLIMA DE TEMPESTADE
   ========================================================================== */
function atualizarCenaVisual(estadoCena, textoLegenda) {
  grupoPersonagens.className = "personagens " + estadoCena;
  legendaCena.textContent = textoLegenda;
}

function dispararRelampago() {
  const reduzAnimacao = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduzAnimacao) {
    flashRelampago.classList.remove("ativo");
    void flashRelampago.offsetWidth; // Reinicia animação CSS
    flashRelampago.classList.add("ativo");
  }
  tocarSom("trovao");
}

function iniciarClimaAmbiente() {
  pararClimaAmbiente();
  intervaloAmbiente = setInterval(() => {
    if (Math.random() < 0.45) {
      dispararRelampago();
    }
  }, 5500);
}

function pararClimaAmbiente() {
  if (intervaloAmbiente) {
    clearInterval(intervaloAmbiente);
    intervaloAmbiente = null;
  }
}

/* ==========================================================================
   FLUXO DO JOGO E MECÂNICA DE TEMPO
   ========================================================================== */
function iniciarJogo() {
  iniciarAudio();
  rodadaAtual = 0;
  errosTempo = 0;
  escolhasIdeais = 0;
  tempoLimiteAtual = 12;
  inicioPartidaMs = Date.now();

  telaInicio.classList.add("oculto");
  telaFinal.classList.add("oculto");
  telaJogo.classList.remove("oculto");

  iniciarClimaAmbiente();
  tocarSom("sirene");
  carregarRodada();
  notificarAlturaPortal();
}

function carregarRodada() {
  rodadaRespondida = false;
  const dados = RODADAS[rodadaAtual];

  contadorRodada.textContent = `Rodada ${rodadaAtual + 1} de ${RODADAS.length}`;
  contadorErros.textContent = `Erros: ${errosTempo}`;

  // Se o jogador já deixou o tempo acabar antes, a história fica mais tensa
  textoHistoria.textContent = errosTempo > 0 ? dados.historiaDificil : dados.historia;
  textoPergunta.textContent = dados.pergunta;

  atualizarCenaVisual(dados.cena, dados.legenda);
  tocarSom("passo");

  // Preenche os 3 botões de opção
  botoesOpcao.forEach((btn, idx) => {
    btn.textContent = dados.opcoes[idx].texto;
    btn.disabled = false;
    btn.classList.remove("opcao-certa", "opcao-alerta");
  });

  caixaFeedback.classList.add("oculto");
  caixaFeedback.classList.remove("sucesso", "alerta", "erro-tempo");

  iniciarCronometro();
  notificarAlturaPortal();
}

function iniciarCronometro() {
  pararCronometro();
  tempoRestante = tempoLimiteAtual;
  atualizarBarraTempo();

  intervaloTimer = setInterval(() => {
    tempoRestante -= 0.1;
    if (tempoRestante <= 0) {
      tempoRestante = 0;
      atualizarBarraTempo();
      tratarTempoEsgotado();
    } else {
      atualizarBarraTempo();
    }
  }, 100);
}

function pararCronometro() {
  if (intervaloTimer) {
    clearInterval(intervaloTimer);
    intervaloTimer = null;
  }
}

function atualizarBarraTempo() {
  tempoSegundos.textContent = `${tempoRestante.toFixed(1)}s`;
  const percentual = Math.max(0, (tempoRestante / tempoLimiteAtual) * 100);
  barraProgresso.style.width = `${percentual}%`;

  if (percentual > 50) {
    barraProgresso.style.backgroundColor = "#22c55e";
  } else if (percentual > 25) {
    barraProgresso.style.backgroundColor = "#f59e0b";
  } else {
    barraProgresso.style.backgroundColor = "#ef4444";
  }
}

function escolherOpcao(indiceEscolhido) {
  if (rodadaRespondida) return;
  rodadaRespondida = true;
  pararCronometro();

  const dados = RODADAS[rodadaAtual];
  const opcao = dados.opcoes[indiceEscolhido];

  botoesOpcao.forEach((btn, idx) => {
    btn.disabled = true;
    if (dados.opcoes[idx].ideal) {
      btn.classList.add("opcao-certa");
    } else if (idx === indiceEscolhido) {
      btn.classList.add("opcao-alerta");
    }
  });

  if (opcao.ideal) {
    escolhasIdeais++;
    tocarSom("acerto");
    caixaFeedback.classList.add("sucesso");
    feedbackTitulo.textContent = "Excelente decisão! Você seguiu a Defesa Civil.";
  } else {
    tocarSom("acerto");
    caixaFeedback.classList.add("alerta");
    feedbackTitulo.textContent = "Você decidiu a tempo, mas veja o cuidado oficial:";
  }

  feedbackExplicacao.textContent = dados.explicacao;
  caixaFeedback.classList.remove("oculto");
  notificarAlturaPortal();
}

function tratarTempoEsgotado() {
  if (rodadaRespondida) return;
  rodadaRespondida = true;
  pararCronometro();

  errosTempo++;
  contadorErros.textContent = `Erros: ${errosTempo}`;

  // Diminui o tempo da próxima rodada (mínimo de 5 segundos)
  tempoLimiteAtual = Math.max(5, tempoLimiteAtual - 1.5);

  tocarSom("erro");
  dispararRelampago();

  const dados = RODADAS[rodadaAtual];
  botoesOpcao.forEach((btn, idx) => {
    btn.disabled = true;
    if (dados.opcoes[idx].ideal) {
      btn.classList.add("opcao-certa");
    }
  });

  caixaFeedback.classList.add("erro-tempo");
  feedbackTitulo.textContent = "Tempo esgotado! A tempestade avançou mais rápido.";
  feedbackExplicacao.textContent = `Na próxima rodada você terá menos tempo (${tempoLimiteAtual.toFixed(1)}s). ${dados.explicacao}`;
  caixaFeedback.classList.remove("oculto");
  notificarAlturaPortal();
}

function avancarRodada() {
  rodadaAtual++;
  if (rodadaAtual < RODADAS.length) {
    carregarRodada();
  } else {
    finalizarJogo();
  }
}

function finalizarJogo() {
  pararCronometro();
  pararClimaAmbiente();

  telaJogo.classList.add("oculto");
  telaFinal.classList.remove("oculto");
  contadorRodada.textContent = "Concluído";

  const tempoTotalMs = Date.now() - inicioPartidaMs;
  const tempoTotalSeg = Math.round(tempoTotalMs / 1000);

  // Calcula classificação baseada nos erros de tempo
  let titulo = "";
  let descricao = "";
  let selo = "";

  if (errosTempo === 0) {
    selo = "🏆";
    titulo = "Turma Preparada";
    descricao = "Incrível! Você respondeu todas as rodadas dentro do tempo e manteve a calma durante todo o tornado.";
  } else if (errosTempo <= 3) {
    selo = "🥈";
    titulo = "Quase Perfeito";
    descricao = "Muito bem! Você superou a tempestade com poucos atrasos e mostrou bom preparo.";
  } else if (errosTempo <= 6) {
    selo = "⚠️";
    titulo = "Precisa Treinar Mais";
    descricao = "Você chegou ao fim, mas a pressão do tempo atrapalhou várias decisões. Treine para agir mais rápido!";
  } else {
    selo = "📘";
    titulo = "Hora de Revisar";
    descricao = "O tornado pegou você de surpresa muitas vezes. Revise as regras da Defesa Civil e tente novamente!";
  }

  // Pontuação baseada nas decisões rápidas e seguras (máximo 100)
  const pontosFinais = Math.max(0, (RODADAS.length - errosTempo) * 10);

  document.getElementById("selo-final").textContent = selo;
  document.getElementById("titulo-final").textContent = titulo;
  document.getElementById("descricao-final").textContent = descricao;
  document.getElementById("placar-pontos").textContent = `${pontosFinais} / 100`;
  document.getElementById("placar-erros").textContent = `${errosTempo}`;
  document.getElementById("placar-tempo").textContent = `${tempoTotalSeg}s`;

  atualizarCenaVisual("andando", "A tempestade passou. Todos estão em segurança!");
  tocarSom("acerto");

  // Envia resultado final para o portal
  window.parent.postMessage(
    {
      type: "vrgame:finish",
      score: pontosFinais,
      maxScore: 100,
      timeMs: tempoTotalMs,
      detail: {
        jogo: "Tornado na Escola",
        classificacao: titulo,
        errosTempo: errosTempo,
        escolhasIdeais: escolhasIdeais
      }
    },
    "*"
  );

  notificarAlturaPortal();
}

/* ==========================================================================
   EVENTOS DE BOTÕES E CONTRATO COM O PORTAL
   ========================================================================== */
btnIniciar.addEventListener("click", iniciarJogo);
btnReiniciar.addEventListener("click", iniciarJogo);
btnProximo.addEventListener("click", avancarRodada);

botoesOpcao.forEach((btn) => {
  btn.addEventListener("click", () => {
    const idx = Number(btn.getAttribute("data-indice"));
    escolherOpcao(idx);
  });
});

btnSom.addEventListener("click", () => {
  somAtivo = !somAtivo;
  btnSom.textContent = somAtivo ? "🔊 Som: Ligado" : "🔇 Som: Mudo";
  if (somAtivo) iniciarAudio();
});

// Envia altura atual do documento para o portal ajustar o iframe
function notificarAlturaPortal() {
  const altura = document.documentElement.scrollHeight;
  window.parent.postMessage({ type: "vrgame:resize", height: altura }, "*");
}

// Escuta mensagens vindas do portal (tema claro/escuro e tela cheia)
window.addEventListener("message", (event) => {
  const dados = event.data;
  if (!dados || typeof dados !== "object") return;

  if (dados.type === "vrgame:theme") {
    const tema = dados.theme || dados.value;
    if (tema === "dark" || tema === "light") {
      document.documentElement.setAttribute("data-theme", tema);
    }
  }

  if (dados.type === "vrgame:fullscreen") {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  }
});

window.addEventListener("resize", notificarAlturaPortal);

// Avisa o portal que o jogo carregou e está pronto
window.addEventListener("load", () => {
  window.parent.postMessage({ type: "vrgame:ready" }, "*");
  notificarAlturaPortal();
});