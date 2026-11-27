/* ==========================================================================
   TORNADO NA ESCOLA - Motor 3D em Canvas Puro, Áudio Sintetizado e Lógica
   Autor: Pedro (9º B - Escola Vicente Rijo)
   ========================================================================== */

const RODADAS = [
  {
    cena: "andando",
    legenda: "Vista 3D: A sirene toca enquanto o funil do tornado gira perto da escola.",
    historia: "Você está na sala de aula do 9º B quando o vento bate forte nos vidros e a sirene de emergência da escola dispara.",
    historiaDificil: "O vento ruge forte lá fora e a sirene toca sem parar! As janelas vibram com a pressão do ar.",
    pergunta: "O que fazer primeiro?",
    opcoes: [
      { texto: "Ficar longe da janela e ir para um local interno sem vidros.", ideal: true },
      { texto: "Juntar carteiras do lado da janela e entrar embaixo.", ideal: false },
      { texto: "Correr até a janela para filmar a formação do tornado.", ideal: false }
    ],
    explicacao: "Orientação da Defesa Civil: Afaste-se imediatamente de janelas e vidros, pois podem estilhaçar. Procure um corredor ou sala interna."
  },
  {
    cena: "correndo",
    legenda: "Vista 3D: Os personagens correm para o corredor interno do térreo.",
    historia: "Vocês chegaram ao corredor interno do térreo, longe das janelas externas. O barulho do vento fica cada vez mais alto.",
    historiaDificil: "O prédio treme com as rajadas! Poeira e folhas giram ao redor da escola.",
    pergunta: "Onde se proteger agora?",
    opcoes: [
      { texto: "Subir para o último andar para ficar longe do chão.", ideal: false },
      { texto: "Embaixo de uma mesa ou estrutura resistente no andar mais baixo.", ideal: true },
      { texto: "Ficar em pé encostado na porta de vidro da entrada.", ideal: false }
    ],
    explicacao: "Orientação da Defesa Civil: Vá para o andar mais baixo da escola e proteja a cabeça e o pescoço embaixo de algo resistente."
  },
  {
    cena: "tremendo",
    legenda: "Vista 3D: Vento intenso levanta destroços ao redor do pátio.",
    historia: "No meio do caminho, um colega entra em pânico e diz que vai correr para o pátio aberto para tentar ir embora.",
    historiaDificil: "Um colega grita assustado e tenta abrir a porta que dá direto para o pátio descoberto!",
    pergunta: "O que fazer nessa situação?",
    opcoes: [
      { texto: "Chamar o colega para o local seguro interno com o grupo.", ideal: true },
      { texto: "Sair correndo atrás dele para o meio do pátio.", ideal: false },
      { texto: "Abrir todas as portas da escola para o vento passar.", ideal: false }
    ],
    explicacao: "Orientação da Defesa Civil: Nunca vá para áreas abertas ou tente fugir durante o tornado. Chame o colega para o abrigo interno."
  },
  {
    cena: "tremendo",
    legenda: "Vista 3D: Relâmpagos iluminam o céu escuro acima da escola.",
    historia: "De repente, vocês ouvem o som alto de vidros quebrando em uma sala próxima onde ninguém estava.",
    historiaDificil: "Vidros estilhaçam no corredor vizinho! O som é ensurdecedor e alguns alunos se assustam.",
    pergunta: "Qual é a atitude mais segura?",
    opcoes: [
      { texto: "Sair do abrigo para olhar o que quebrou na outra sala.", ideal: false },
      { texto: "Correr para perto das janelas para ver se o tornado já foi.", ideal: false },
      { texto: "Manter-se protegido, esperar o barulho diminuir e verificar com cuidado.", ideal: true }
    ],
    explicacao: "Orientação da Defesa Civil: Permaneça protegido e longe de estilhaços até o perigo diminuir, verificando o ambiente com cautela."
  },
  {
    cena: "tremendo",
    legenda: "Vista 3D: O vórtice oscila perto do prédio enquanto o alerta continua.",
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
    legenda: "Vista 3D: A professora reúne os alunos em posição de proteção.",
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
    legenda: "Vista 3D: Simulação de evacuação interna organizada na escola.",
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
    legenda: "Vista 3D: Resgate rápido e calmo de um aluno próximo à entrada.",
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
    legenda: "Vista 3D: O tornado se afasta no horizonte e a chuva diminui.",
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
    legenda: "Vista 3D: Escola Vicente Rijo segura após a passagem da tempestade.",
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

// Referências DOM
const canvas3D = document.getElementById("cena-3d");
const ctx = canvas3D.getContext("2d");

const telaInicio = document.getElementById("tela-inicio");
const telaJogo = document.getElementById("tela-jogo");
const telaFinal = document.getElementById("tela-final");

const btnIniciar = document.getElementById("btn-iniciar");
const btnReiniciar = document.getElementById("btn-reiniciar");
const btnProximo = document.getElementById("btn-proximo");
const btnSom = document.getElementById("btn-som");
const btnTelaCheia = document.getElementById("btn-tela-cheia");

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
const legendaCena = document.getElementById("legenda-cena");

// Estado do jogo
let rodadaAtual = 0;
let errosTempo = 0;
let escolhasIdeais = 0;
let tempoLimiteAtual = 12;
let tempoRestante = 12;
let intervaloTimer = null;
let inicioPartidaMs = 0;
let rodadaRespondida = false;
let somAtivo = true;
let audioCtx = null;

/* ==========================================================================
   MOTOR GRÁFICO 3D (Projeção em Perspectiva Pura em Canvas 2D)
   ========================================================================== */
let larguraTela = window.innerWidth;
let alturaTela = window.innerHeight;
let tempoAnimacao = 0;
let estadoAnimacaoPersonagens = "andando";
let intensidadeRelampago = 0;

// Partículas 3D de chuva e destroços voando no tornado
const gotasChuva3D = Array.from({ length: 140 }, () => ({
  x: (Math.random() - 0.5) * 900,
  y: Math.random() * 450,
  z: 80 + Math.random() * 750,
  velY: 9 + Math.random() * 6
}));

const destrocosTornado3D = Array.from({ length: 45 }, (_, i) => ({
  angulo: (i / 45) * Math.PI * 2,
  altura: 15 + (i / 45) * 240,
  velocidade: 0.04 + Math.random() * 0.04,
  tamanho: 3 + Math.random() * 4,
  cor: i % 2 === 0 ? "#cbd5e1" : "#64748b"
}));

function redimensionarCanvas3D() {
  larguraTela = window.innerWidth;
  alturaTela = window.innerHeight;
  canvas3D.width = larguraTela;
  canvas3D.height = alturaTela;
  notificarAlturaPortal();
}

// Converte coordenadas 3D (x, y, z) para 2D na tela com perspectiva
function projetar3D(x, y, z) {
  const distanciaFocal = Math.min(larguraTela, alturaTela) * 0.85;
  const zSeguro = Math.max(20, z);
  const escala = distanciaFocal / zSeguro;
  const centroX = larguraTela * 0.5;
  const horizonteY = alturaTela * 0.46;

  return {
    x: centroX + x * escala,
    y: horizonteY - y * escala,
    escala
  };
}

// Desenha um bloco 3D (cubo/paralelepípedo) com frente, lateral e topo
function desenharCaixa3D(x, y, z, largura, altura, profundidade, corFrente, corLateral, corTopo) {
  const f1 = projetar3D(x, y, z);
  const f2 = projetar3D(x + largura, y, z);
  const f3 = projetar3D(x + largura, y + altura, z);
  const f4 = projetar3D(x, y + altura, z);

  const t1 = projetar3D(x, y, z + profundidade);
  const t2 = projetar3D(x + largura, y, z + profundidade);
  const t3 = projetar3D(x + largura, y + altura, z + profundidade);
  const t4 = projetar3D(x, y + altura, z + profundidade);

  // Topo
  ctx.fillStyle = corTopo;
  ctx.beginPath();
  ctx.moveTo(f4.x, f4.y);
  ctx.lineTo(f3.x, f3.y);
  ctx.lineTo(t3.x, t3.y);
  ctx.lineTo(t4.x, t4.y);
  ctx.closePath();
  ctx.fill();

  // Lateral direita ou esquerda dependendo da posição em relação ao centro
  ctx.fillStyle = corLateral;
  ctx.beginPath();
  if (x + largura / 2 < 0) {
    ctx.moveTo(f2.x, f2.y);
    ctx.lineTo(t2.x, t2.y);
    ctx.lineTo(t3.x, t3.y);
    ctx.lineTo(f3.x, f3.y);
  } else {
    ctx.moveTo(f1.x, f1.y);
    ctx.lineTo(t1.x, t1.y);
    ctx.lineTo(t4.x, t4.y);
    ctx.lineTo(f4.x, f4.y);
  }
  ctx.closePath();
  ctx.fill();

  // Face frontal
  ctx.fillStyle = corFrente;
  ctx.beginPath();
  ctx.moveTo(f1.x, f1.y);
  ctx.lineTo(f2.x, f2.y);
  ctx.lineTo(f3.x, f3.y);
  ctx.lineTo(f4.x, f4.y);
  ctx.closePath();
  ctx.fill();
}

function desenharPersonagem3D(x, z, corRoupa, alturaCorpo, fase) {
  let offsetY = 0;
  let offsetX = 0;

  if (estadoAnimacaoPersonagens === "andando") {
    offsetY = Math.abs(Math.sin(tempoAnimacao * 4 + fase)) * 5;
  } else if (estadoAnimacaoPersonagens === "correndo") {
    offsetY = Math.abs(Math.sin(tempoAnimacao * 9 + fase)) * 10;
    offsetX = Math.sin(tempoAnimacao * 5 + fase) * 4;
  } else if (estadoAnimacaoPersonagens === "tremendo") {
    offsetX = Math.sin(tempoAnimacao * 28 + fase) * 3;
  }

  // Sombra no chão 3D
  const sombra = projetar3D(x + offsetX, -60, z);
  ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
  ctx.beginPath();
  ctx.ellipse(sombra.x, sombra.y, 12 * sombra.escala, 4 * sombra.escala, 0, 0, Math.PI * 2);
  ctx.fill();

  // Corpo 3D
  desenharCaixa3D(
    x - 8 + offsetX,
    -60 + offsetY,
    z - 6,
    16,
    alturaCorpo,
    12,
    corRoupa,
    "#1e293b",
    corRoupa
  );

  // Cabeça 3D
  desenharCaixa3D(
    x - 6 + offsetX,
    -60 + alturaCorpo + 2 + offsetY,
    z - 5,
    12,
    12,
    10,
    "#fde68a",
    "#f59e0b",
    "#fef3c7"
  );
}

function renderizarCena3D() {
  const reduzAnimacao = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduzAnimacao) {
    tempoAnimacao += 0.025;
  }

  // Céu em degradê de tempestade
  const gradCeu = ctx.createLinearGradient(0, 0, 0, alturaTela * 0.52);
  gradCeu.addColorStop(0, "#020617");
  gradCeu.addColorStop(0.65, "#1e3a8a");
  gradCeu.addColorStop(1, "#3b82f6");
  ctx.fillStyle = gradCeu;
  ctx.fillRect(0, 0, larguraTela, alturaTela);

  // Flash de relâmpago
  if (!reduzAnimacao && Math.random() < 0.006 && intensidadeRelampago <= 0) {
    intensidadeRelampago = 0.75;
    tocarSom("trovao");
  }
  if (intensidadeRelampago > 0) {
    ctx.fillStyle = `rgba(255, 255, 255, ${intensidadeRelampago})`;
    ctx.fillRect(0, 0, larguraTela, alturaTela);
    intensidadeRelampago = Math.max(0, intensidadeRelampago - 0.06);
  }

  // Chão 3D com grade de perspectiva
  const horizonteY = alturaTela * 0.46;
  const gradChao = ctx.createLinearGradient(0, horizonteY, 0, alturaTela);
  gradChao.addColorStop(0, "#0f172a");
  gradChao.addColorStop(1, "#1e293b");
  ctx.fillStyle = gradChao;
  ctx.fillRect(0, horizonteY, larguraTela, alturaTela - horizonteY);

  // Linhas de profundidade 3D no piso do pátio
  ctx.strokeStyle = "rgba(148, 163, 184, 0.16)";
  ctx.lineWidth = 1;
  for (let gx = -600; gx <= 600; gx += 100) {
    const p1 = projetar3D(gx, -60, 120);
    const p2 = projetar3D(gx, -60, 950);
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
  }
  for (let gz = 180; gz <= 900; gz += 120) {
    const p1 = projetar3D(-600, -60, gz);
    const p2 = projetar3D(600, -60, gz);
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
  }

  // Tornado 3D girando no fundo (lado direito)
  const tornadoBaseX = 175 + Math.sin(tempoAnimacao * 0.8) * 35;
  const tornadoZ = 540;
  const camadasFunil = 18;

  for (let i = 0; i < camadasFunil; i++) {
    const t = i / camadasFunil;
    const yCamada = -60 + t * 290;
    const raio = 14 + Math.pow(t, 1.35) * 115;
    const oscilacaoX = Math.sin(tempoAnimacao * 4 - t * 6) * (10 + t * 18);
    const pos = projetar3D(tornadoBaseX + oscilacaoX, yCamada, tornadoZ);

    ctx.fillStyle = i % 2 === 0 ? "rgba(148, 163, 184, 0.55)" : "rgba(203, 213, 225, 0.45)";
    ctx.beginPath();
    ctx.ellipse(pos.x, pos.y, raio * pos.escala, (10 + t * 12) * pos.escala, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Destroços girando em órbita 3D ao redor do tornado
  destrocosTornado3D.forEach((d) => {
    if (!reduzAnimacao) {
      d.angulo += d.velocidade;
    }
    const t = d.altura / 260;
    const raioOrbita = 22 + t * 110;
    const dx = tornadoBaseX + Math.cos(d.angulo) * raioOrbita;
    const dz = tornadoZ + Math.sin(d.angulo) * raioOrbita;
    const dy = -55 + d.altura;
    const p = projetar3D(dx, dy, dz);

    ctx.fillStyle = d.cor;
    ctx.fillRect(p.x, p.y, d.tamanho * p.escala, d.tamanho * p.escala);
  });

  // Prédio 3D da Escola Vicente Rijo (lado esquerdo)
  desenharCaixa3D(-290, -60, 340, 210, 125, 140, "#cbd5e1", "#94a3b8", "#e2e8f0");
  // Telhado 3D
  desenharCaixa3D(-300, 65, 330, 230, 18, 160, "#991b1b", "#7f1d1d", "#b91c1c");

  // Placa da escola na fachada 3D
  const placaPos = projetar3D(-185, 42, 338);
  ctx.fillStyle = "#1e3a8a";
  ctx.fillRect(placaPos.x - 68 * placaPos.escala, placaPos.y - 11 * placaPos.escala, 136 * placaPos.escala, 22 * placaPos.escala);
  ctx.fillStyle = "#ffffff";
  ctx.font = `bold ${Math.max(8, Math.round(11 * placaPos.escala))}px sans-serif`;
  ctx.textAlign = "center";
  ctx.fillText("ESCOLA VICENTE RIJO", placaPos.x, placaPos.y + 4 * placaPos.escala);

  // Janelas iluminadas e porta na fachada 3D
  [-255, -195, -135].forEach((jx) => {
    const jp = projetar3D(jx, 5, 338);
    ctx.fillStyle = "#fef08a";
    ctx.fillRect(jp.x, jp.y, 26 * jp.escala, 24 * jp.escala);
  });
  const portaPos = projetar3D(-198, -22, 338);
  ctx.fillStyle = "#78350f";
  ctx.fillRect(portaPos.x, portaPos.y, 28 * portaPos.escala, 38 * portaPos.escala);

  // Personagens 3D animados no pátio perto da entrada
  desenharPersonagem3D(-35, 290, "#dc2626", 32, 0);   // Professora
  desenharPersonagem3D(-5, 305, "#2563eb", 26, 1.5);  // Aluno
  desenharPersonagem3D(25, 295, "#16a34a", 26, 3.0);  // Aluna

  // Chuva 3D em perspectiva
  ctx.strokeStyle = "rgba(191, 219, 254, 0.45)";
  ctx.lineWidth = 1.4;
  gotasChuva3D.forEach((gota) => {
    if (!reduzAnimacao) {
      gota.y -= gota.velY;
      gota.x -= 2.5;
      if (gota.y < -60) {
        gota.y = 320;
        gota.x = (Math.random() - 0.5) * 900;
      }
    }
    const p1 = projetar3D(gota.x, gota.y, gota.z);
    const p2 = projetar3D(gota.x - 3, gota.y - 14, gota.z);
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
  });

  requestAnimationFrame(renderizarCena3D);
}

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
    osc.frequency.setValueAtTime(523.25, agora);
    osc.frequency.setValueAtTime(659.25, agora + 0.1);
    ganho.gain.setValueAtTime(0.14, agora);
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
    ganho.gain.setValueAtTime(0.14, agora);
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
    const bufferSize = audioCtx.sampleRate * 0.55;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filtro = audioCtx.createBiquadFilter();
    filtro.type = "lowpass";
    filtro.frequency.setValueAtTime(175, agora);

    const ganho = audioCtx.createGain();
    ganho.gain.setValueAtTime(0.16, agora);
    ganho.gain.exponentialRampToValueAtTime(0.001, agora + 0.55);

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
   FLUXO DAS 10 RODADAS E MECÂNICA DE TEMPO
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

  tocarSom("sirene");
  carregarRodada();
  notificarAlturaPortal();
}

function carregarRodada() {
  rodadaRespondida = false;
  const dados = RODADAS[rodadaAtual];

  contadorRodada.textContent = `Rodada ${rodadaAtual + 1} de ${RODADAS.length}`;
  contadorErros.textContent = `Erros: ${errosTempo}`;

  textoHistoria.textContent = errosTempo > 0 ? dados.historiaDificil : dados.historia;
  textoPergunta.textContent = dados.pergunta;

  estadoAnimacaoPersonagens = dados.cena;
  legendaCena.textContent = dados.legenda;
  tocarSom("passo");

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
  tempoLimiteAtual = Math.max(5, tempoLimiteAtual - 1.5);

  tocarSom("erro");
  intensidadeRelampago = 0.85;
  tocarSom("trovao");

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

  telaJogo.classList.add("oculto");
  telaFinal.classList.remove("oculto");
  contadorRodada.textContent = "Concluído";

  const tempoTotalMs = Date.now() - inicioPartidaMs;
  const tempoTotalSeg = Math.round(tempoTotalMs / 1000);

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

  const pontosFinais = Math.max(0, (RODADAS.length - errosTempo) * 10);

  document.getElementById("selo-final").textContent = selo;
  document.getElementById("titulo-final").textContent = titulo;
  document.getElementById("descricao-final").textContent = descricao;
  document.getElementById("placar-pontos").textContent = `${pontosFinais} / 100`;
  document.getElementById("placar-erros").textContent = `${errosTempo}`;
  document.getElementById("placar-tempo").textContent = `${tempoTotalSeg}s`;

  estadoAnimacaoPersonagens = "andando";
  legendaCena.textContent = "Vista 3D: A tempestade passou e todos estão em segurança!";
  tocarSom("acerto");

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
   EVENTOS, TELA CHEIA E CONTRATO COM O PORTAL
   ========================================================================== */
function alternarTelaCheia() {
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  } else if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {});
  }
}

btnIniciar.addEventListener("click", iniciarJogo);
btnReiniciar.addEventListener("click", iniciarJogo);
btnProximo.addEventListener("click", avancarRodada);
btnTelaCheia.addEventListener("click", alternarTelaCheia);

botoesOpcao.forEach((btn) => {
  btn.addEventListener("click", () => {
    const idx = Number(btn.getAttribute("data-indice"));
    escolherOpcao(idx);
  });
});

btnSom.addEventListener("click", () => {
  somAtivo = !somAtivo;
  btnSom.textContent = somAtivo ? "🔊 Som" : "🔇 Mudo";
  if (somAtivo) iniciarAudio();
});

function notificarAlturaPortal() {
  const altura = document.documentElement.scrollHeight;
  window.parent.postMessage({ type: "vrgame:resize", height: altura }, "*");
}

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
    alternarTelaCheia();
  }
});

window.addEventListener("resize", redimensionarCanvas3D);

window.addEventListener("load", () => {
  redimensionarCanvas3D();
  renderizarCena3D();
  window.parent.postMessage({ type: "vrgame:ready" }, "*");
});