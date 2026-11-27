/* ==========================================================================
   TORNADO NA ESCOLA - Motor 3D Reativo às Escolhas, Áudio e Lógica
   Autor: Pedro (9º B - Escola Vicente Rijo)
   ========================================================================== */

// Cada opção agora define uma ação visual 3D (destinoX, destinoZ, postura e alerta)
const RODADAS = [
  {
    cena: "andando",
    alvoX: -20,
    alvoZ: 295,
    legenda: "Vista 3D: A sirene toca! Decida para onde os personagens devem ir.",
    historia: "Você está na sala de aula do 9º B quando o vento bate forte nos vidros e a sirene de emergência da escola dispara.",
    historiaDificil: "O vento ruge forte lá fora e a sirene toca sem parar! As janelas vibram com a pressão do ar.",
    pergunta: "O que fazer primeiro?",
    opcoes: [
      {
        texto: "Ficar longe da janela e ir para um local interno sem vidros.",
        ideal: true,
        acao3D: {
          postura: "correndo",
          alvoX: -195,
          alvoZ: 360,
          avancoTornado: 0,
          legenda: "Vista 3D: A turma corre para dentro do corredor interno protegido!"
        }
      },
      {
        texto: "Juntar carteiras do lado da janela e entrar embaixo.",
        ideal: false,
        acao3D: {
          postura: "agachado",
          alvoX: -255,
          alvoZ: 335,
          avancoTornado: 45,
          legenda: "Vista 3D: Perigo! Eles agacharam encostados nas janelas de vidro!"
        }
      },
      {
        texto: "Correr até a janela para filmar a formação do tornado.",
        ideal: false,
        acao3D: {
          postura: "tremendo",
          alvoX: -135,
          alvoZ: 332,
          avancoTornado: 55,
          legenda: "Vista 3D: Perigo! Ficaram expostos na janela enquanto o tornado se aproxima!"
        }
      }
    ],
    explicacao: "Orientação da Defesa Civil: Afaste-se imediatamente de janelas e vidros, pois podem estilhaçar. Procure um corredor ou sala interna."
  },
  {
    cena: "correndo",
    alvoX: -195,
    alvoZ: 360,
    legenda: "Vista 3D: No corredor interno do térreo, onde se abrigar?",
    historia: "Vocês chegaram ao corredor interno do térreo, longe das janelas externas. O barulho do vento fica cada vez mais alto.",
    historiaDificil: "O prédio treme com as rajadas! Poeira e folhas giram ao redor da escola.",
    pergunta: "Onde se proteger agora?",
    opcoes: [
      {
        texto: "Subir para o último andar para ficar longe do chão.",
        ideal: false,
        acao3D: {
          postura: "tremendo",
          alvoX: -185,
          alvoZ: 350,
          subirAndar: true,
          avancoTornado: 50,
          legenda: "Vista 3D: Perigo! Subiram para o topo do prédio onde o vento é mais forte!"
        }
      },
      {
        texto: "Embaixo de uma mesa ou estrutura resistente no andar mais baixo.",
        ideal: true,
        acao3D: {
          postura: "agachado",
          alvoX: -195,
          alvoZ: 375,
          avancoTornado: 0,
          legenda: "Vista 3D: Ótimo! Todos protegidos embaixo de estrutura resistente no térreo!"
        }
      },
      {
        texto: "Ficar em pé encostado na porta de vidro da entrada.",
        ideal: false,
        acao3D: {
          postura: "tremendo",
          alvoX: -198,
          alvoZ: 330,
          avancoTornado: 45,
          legenda: "Vista 3D: Risco! Ficaram em pé bem na porta de vidro da entrada!"
        }
      }
    ],
    explicacao: "Orientação da Defesa Civil: Vá para o andar mais baixo da escola e proteja a cabeça e o pescoço embaixo de algo resistente."
  },
  {
    cena: "tremendo",
    alvoX: -195,
    alvoZ: 365,
    legenda: "Vista 3D: Um colega ameaça correr para o pátio aberto!",
    historia: "No meio do caminho, um colega entra em pânico e diz que vai correr para o pátio aberto para tentar ir embora.",
    historiaDificil: "Um colega grita assustado e tenta abrir a porta que dá direto para o pátio descoberto!",
    pergunta: "O que fazer nessa situação?",
    opcoes: [
      {
        texto: "Chamar o colega para o local seguro interno com o grupo.",
        ideal: true,
        acao3D: {
          postura: "agachado",
          alvoX: -195,
          alvoZ: 375,
          avancoTornado: 0,
          legenda: "Vista 3D: O grupo puxa o colega para dentro do abrigo seguro!"
        }
      },
      {
        texto: "Sair correndo atrás dele para o meio do pátio.",
        ideal: false,
        acao3D: {
          postura: "correndo",
          alvoX: 60,
          alvoZ: 310,
          avancoTornado: 65,
          legenda: "Vista 3D: Perigo! Correram para o pátio aberto na direção do tornado!"
        }
      },
      {
        texto: "Abrir todas as portas da escola para o vento passar.",
        ideal: false,
        acao3D: {
          postura: "tremendo",
          alvoX: -160,
          alvoZ: 330,
          avancoTornado: 50,
          legenda: "Vista 3D: Erro! Abrir portas expõe o interior às rajadas e destroços!"
        }
      }
    ],
    explicacao: "Orientação da Defesa Civil: Nunca vá para áreas abertas ou tente fugir durante o tornado. Chame o colega para o abrigo interno."
  },
  {
    cena: "tremendo",
    alvoX: -195,
    alvoZ: 370,
    legenda: "Vista 3D: Estrondo de vidros quebrando ecoa pelo prédio!",
    historia: "De repente, vocês ouvem o som alto de vidros quebrando em uma sala próxima onde ninguém estava.",
    historiaDificil: "Vidros estilhaçam no corredor vizinho! O som é ensurdecedor e alguns alunos se assustam.",
    pergunta: "Qual é a atitude mais segura?",
    opcoes: [
      {
        texto: "Sair do abrigo para olhar o que quebrou na outra sala.",
        ideal: false,
        acao3D: {
          postura: "andando",
          alvoX: -120,
          alvoZ: 335,
          avancoTornado: 45,
          legenda: "Vista 3D: Risco! Saíram do abrigo e se aproximaram dos estilhaços!"
        }
      },
      {
        texto: "Correr para perto das janelas para ver se o tornado já foi.",
        ideal: false,
        acao3D: {
          postura: "tremendo",
          alvoX: -255,
          alvoZ: 332,
          avancoTornado: 55,
          legenda: "Vista 3D: Perigo! Foram olhar pela janela enquanto o vórtice ainda gira!"
        }
      },
      {
        texto: "Manter-se protegido, esperar o barulho diminuir e verificar com cuidado.",
        ideal: true,
        acao3D: {
          postura: "agachado",
          alvoX: -195,
          alvoZ: 380,
          avancoTornado: 0,
          legenda: "Vista 3D: Todos permanecem abaixados e protegidos longe dos vidros!"
        }
      }
    ],
    explicacao: "Orientação da Defesa Civil: Permaneça protegido e longe de estilhaços até o perigo diminuir, verificando o ambiente com cautela."
  },
  {
    cena: "tremendo",
    alvoX: -195,
    alvoZ: 375,
    legenda: "Vista 3D: O vento diminui por segundos, mas a sirene continua!",
    historia: "Por alguns segundos, o barulho do vento diminui um pouco, mas a sirene de alerta da escola continua tocando.",
    historiaDificil: "Uma calmaria repentina acontece, mas o céu continua escuro e a sirene não desligou!",
    pergunta: "O que fazer nesse momento?",
    opcoes: [
      {
        texto: "Voltar correndo para a sala de aula para pegar a mochila.",
        ideal: false,
        acao3D: {
          postura: "correndo",
          alvoX: -135,
          alvoZ: 340,
          avancoTornado: 50,
          legenda: "Vista 3D: Perigo! Voltaram para perto das janelas da sala antes do fim do alerta!"
        }
      },
      {
        texto: "Continuar no local seguro e esperar orientação oficial.",
        ideal: true,
        acao3D: {
          postura: "agachado",
          alvoX: -195,
          alvoZ: 380,
          avancoTornado: 0,
          legenda: "Vista 3D: Decisão firme! O grupo mantém a proteção até o sinal oficial!"
        }
      },
      {
        texto: "Sair para o pátio para comemorar que passou.",
        ideal: false,
        acao3D: {
          postura: "andando",
          alvoX: 40,
          alvoZ: 280,
          avancoTornado: 65,
          legenda: "Vista 3D: Alerta! Saíram para o pátio aberto com o tornado ainda próximo!"
        }
      }
    ],
    explicacao: "Orientação da Defesa Civil: Uma pausa no vento pode ser apenas uma mudança na trajetória da tempestade. Só saia após o fim oficial do alerta."
  },
  {
    cena: "andando",
    alvoX: -195,
    alvoZ: 370,
    legenda: "Vista 3D: A professora pede para reforçar a regra de proteção!",
    historia: "A professora pede para você ajudar a acalmar os colegas e lembrar a regra principal de proteção da Defesa Civil.",
    historiaDificil: "Com o barulho lá fora, a professora pede que você repita rápido a regra de ouro para a turma!",
    pergunta: "Qual é a melhor lembrança para passar aos colegas?",
    opcoes: [
      {
        texto: "Longe de janelas, local interno sem vidros e embaixo de algo resistente.",
        ideal: true,
        acao3D: {
          postura: "agachado",
          alvoX: -195,
          alvoZ: 380,
          avancoTornado: 0,
          legenda: "Vista 3D: Toda a turma se abaixa protegendo a cabeça no corredor interno!"
        }
      },
      {
        texto: "Juntar carteiras perto das janelas para segurar o vento.",
        ideal: false,
        acao3D: {
          postura: "agachado",
          alvoX: -255,
          alvoZ: 335,
          avancoTornado: 50,
          legenda: "Vista 3D: Perigo! Juntar carteiras perto da janela expõe todos aos vidros!"
        }
      },
      {
        texto: "Ficar perto das portas de saída para correr se precisar.",
        ideal: false,
        acao3D: {
          postura: "tremendo",
          alvoX: -198,
          alvoZ: 330,
          avancoTornado: 45,
          legenda: "Vista 3D: Risco! Ficar na porta de saída deixa o grupo vulnerável!"
        }
      }
    ],
    explicacao: "Orientação da Defesa Civil: A regra básica é sempre: longe de janelas, em cômodo interno no andar mais baixo e protegido sob algo resistente."
  },
  {
    cena: "andando",
    alvoX: -40,
    alvoZ: 295,
    legenda: "Vista 3D: Treino preventivo de emergência na Escola Vicente Rijo!",
    historia: "Agora pense em um treino de emergência preventivo na Escola Vicente Rijo antes mesmo da tempestade chegar.",
    historiaDificil: "O alarme de treino preventivo dispara durante a aula de Robótica!",
    pergunta: "Qual deve ser o primeiro passo da turma?",
    opcoes: [
      {
        texto: "Correr empurrando os colegas para chegar primeiro.",
        ideal: false,
        acao3D: {
          postura: "tremendo",
          alvoX: -120,
          alvoZ: 320,
          avancoTornado: 35,
          legenda: "Vista 3D: Tumulto na entrada! Empurrar causa quedas e atrasa o grupo!"
        }
      },
      {
        texto: "Guardar todos os cadernos e materiais antes de levantar.",
        ideal: false,
        acao3D: {
          postura: "andando",
          alvoX: -40,
          alvoZ: 295,
          avancoTornado: 45,
          legenda: "Vista 3D: Demora! Ficaram parados arrumando material enquanto o tempo passa!"
        }
      },
      {
        texto: "Seguir em silêncio e em ordem para o ponto seguro interno.",
        ideal: true,
        acao3D: {
          postura: "andando",
          alvoX: -195,
          alvoZ: 365,
          avancoTornado: 0,
          legenda: "Vista 3D: Deslocamento rápido, organizado e em silêncio até o abrigo!"
        }
      }
    ],
    explicacao: "Orientação da Defesa Civil: Em treinos ou emergências reais, deslocar-se em ordem e silêncio evita acidentes e permite ouvir instruções."
  },
  {
    cena: "correndo",
    alvoX: -90,
    alvoZ: 310,
    legenda: "Vista 3D: Um aluno mais novo está chorando perto da entrada!",
    historia: "Perto da entrada do corredor seguro, você vê um aluno mais novo chorando e paralisado de medo perto de uma área exposta.",
    historiaDificil: "Um aluno menor está chorando perto de uma porta com vidro enquanto o vento volta a soprar forte!",
    pergunta: "O que fazer para ajudar?",
    opcoes: [
      {
        texto: "Levar o aluno para o local seguro com calma.",
        ideal: true,
        acao3D: {
          postura: "correndo",
          alvoX: -195,
          alvoZ: 375,
          avancoTornado: 0,
          legenda: "Vista 3D: Resgate seguro! Todos entram juntos no corredor protegido!"
        }
      },
      {
        texto: "Deixar ele lá e avisar só quando a tempestade acabar.",
        ideal: false,
        acao3D: {
          postura: "tremendo",
          alvoX: -195,
          alvoZ: 375,
          avancoTornado: 45,
          legenda: "Vista 3D: Risco! O colega ficou sozinho perto da área exposta!"
        }
      },
      {
        texto: "Mandar ele correr sozinho para o pátio aberto.",
        ideal: false,
        acao3D: {
          postura: "tremendo",
          alvoX: 50,
          alvoZ: 290,
          avancoTornado: 65,
          legenda: "Vista 3D: Perigo grave! Nunca mande ninguém para áreas abertas!"
        }
      }
    ],
    explicacao: "Orientação da Defesa Civil: Ajudar com calma quem está em área de risco a ir para o abrigo interno salva vidas sem expor o grupo."
  },
  {
    cena: "andando",
    alvoX: -195,
    alvoZ: 365,
    legenda: "Vista 3D: O tornado se afasta e a sirene finalmente para!",
    historia: "O tornado finalmente se afastou da região, o vento cessou e a sirene de emergência foi desligada.",
    historiaDificil: "O silêncio volta após a tempestade, mas pode haver fios caídos ou vidros quebrados na escola.",
    pergunta: "Qual é a atitude mais segura agora?",
    opcoes: [
      {
        texto: "Sair correndo sozinho para explorar os estragos lá fora.",
        ideal: false,
        acao3D: {
          postura: "correndo",
          alvoX: 80,
          alvoZ: 270,
          avancoTornado: 30,
          legenda: "Vista 3D: Cuidado! Correr sozinho lá fora pode levar a fios caídos e vidros!"
        }
      },
      {
        texto: "Esperar orientação dos adultos e verificar o local com cuidado, em grupo.",
        ideal: true,
        acao3D: {
          postura: "andando",
          alvoX: -65,
          alvoZ: 305,
          avancoTornado: -90,
          legenda: "Vista 3D: Saída organizada em grupo após liberação oficial!"
        }
      },
      {
        texto: "Mexer em fios elétricos soltos no corredor.",
        ideal: false,
        acao3D: {
          postura: "tremendo",
          alvoX: -140,
          alvoZ: 335,
          avancoTornado: 30,
          legenda: "Vista 3D: Perigo de choque! Nunca toque em fios caídos após tempestades!"
        }
      }
    ],
    explicacao: "Orientação da Defesa Civil: Após o tornado, aguarde a liberação dos responsáveis, fique em grupo e nunca toque em fios ou estruturas danificadas."
  },
  {
    cena: "andando",
    alvoX: -45,
    alvoZ: 295,
    legenda: "Vista 3D: Último desafio para proteger toda a Escola Vicente Rijo!",
    historia: "Com todos seguros na Escola Vicente Rijo, a direção pede uma mensagem curta para ensinar os outros alunos a se protegerem.",
    historiaDificil: "Último desafio! Escolha a mensagem oficial para o cartaz de segurança da escola:",
    pergunta: "Qual mensagem resume melhor a proteção contra tornados?",
    opcoes: [
      {
        texto: "Junte carteiras ao lado da janela e fique olhando o céu.",
        ideal: false,
        acao3D: {
          postura: "tremendo",
          alvoX: -255,
          alvoZ: 335,
          avancoTornado: 40,
          legenda: "Vista 3D: Cartaz incorreto! Ficar perto de janelas é perigoso!"
        }
      },
      {
        texto: "Corra para o pátio aberto assim que ouvir a sirene.",
        ideal: false,
        acao3D: {
          postura: "correndo",
          alvoX: 60,
          alvoZ: 280,
          avancoTornado: 50,
          legenda: "Vista 3D: Cartaz incorreto! O pátio aberto não oferece proteção!"
        }
      },
      {
        texto: "Fique longe de janelas, vá para local interno sem vidros e proteja-se embaixo de algo resistente.",
        ideal: true,
        acao3D: {
          postura: "andando",
          alvoX: -25,
          alvoZ: 285,
          avancoTornado: -140,
          legenda: "Vista 3D: Mensagem oficial aprovada! Escola Vicente Rijo protegida!"
        }
      }
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
   MOTOR GRÁFICO 3D INTERATIVO (Reage à escolha do jogador em tempo real)
   ========================================================================== */
let larguraTela = window.innerWidth;
let alturaTela = window.innerHeight;
let tempoAnimacao = 0;
let intensidadeRelampago = 0;

// Estado dinâmico 3D controlado pelas rodadas e escolhas
const estado3D = {
  grupoX: -20,
  grupoZ: 295,
  grupoY: -60,
  destinoX: -20,
  destinoZ: 295,
  destinoY: -60,
  postura: "andando", // "andando", "correndo", "tremendo", "agachado"
  tornadoDeslocamentoX: 0,
  tornadoDestinoX: 0,
  alertaVisual: "normal" // "normal", "seguro", "perigo"
};

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

function desenharCaixa3D(x, y, z, largura, altura, profundidade, corFrente, corLateral, corTopo) {
  const f1 = projetar3D(x, y, z);
  const f2 = projetar3D(x + largura, y, z);
  const f3 = projetar3D(x + largura, y + altura, z);
  const f4 = projetar3D(x, y + altura, z);

  const t1 = projetar3D(x, y, z + profundidade);
  const t2 = projetar3D(x + largura, y, z + profundidade);
  const t3 = projetar3D(x + largura, y + altura, z + profundidade);
  const t4 = projetar3D(x, y + altura, z + profundidade);

  ctx.fillStyle = corTopo;
  ctx.beginPath();
  ctx.moveTo(f4.x, f4.y);
  ctx.lineTo(f3.x, f3.y);
  ctx.lineTo(t3.x, t3.y);
  ctx.lineTo(t4.x, t4.y);
  ctx.closePath();
  ctx.fill();

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

  ctx.fillStyle = corFrente;
  ctx.beginPath();
  ctx.moveTo(f1.x, f1.y);
  ctx.lineTo(f2.x, f2.y);
  ctx.lineTo(f3.x, f3.y);
  ctx.lineTo(f4.x, f4.y);
  ctx.closePath();
  ctx.fill();
}

function desenharPersonagem3D(x, baseY, z, corRoupa, alturaCorpo, fase) {
  let offsetY = 0;
  let offsetX = 0;
  let alturaAtual = alturaCorpo;

  // Verifica se o personagem está caminhando até o destino escolhido
  const distX = Math.abs(estado3D.destinoX - estado3D.grupoX);
  const distZ = Math.abs(estado3D.destinoZ - estado3D.grupoZ);
  const emDeslocamento = distX > 3 || distZ > 3;

  if (emDeslocamento || estado3D.postura === "correndo") {
    offsetY = Math.abs(Math.sin(tempoAnimacao * 10 + fase)) * 9;
    offsetX = Math.sin(tempoAnimacao * 6 + fase) * 3;
  } else if (estado3D.postura === "andando") {
    offsetY = Math.abs(Math.sin(tempoAnimacao * 4 + fase)) * 4;
  } else if (estado3D.postura === "tremendo") {
    offsetX = Math.sin(tempoAnimacao * 30 + fase) * 3.5;
  } else if (estado3D.postura === "agachado") {
    alturaAtual = alturaCorpo * 0.55; // Agacha para proteger a cabeça
  }

  // Sombra no piso
  const sombra = projetar3D(x + offsetX, baseY, z);
  ctx.fillStyle = "rgba(0, 0, 0, 0.38)";
  ctx.beginPath();
  ctx.ellipse(sombra.x, sombra.y, 12 * sombra.escala, 4 * sombra.escala, 0, 0, Math.PI * 2);
  ctx.fill();

  // Corpo 3D
  desenharCaixa3D(
    x - 8 + offsetX,
    baseY + offsetY,
    z - 6,
    16,
    alturaAtual,
    12,
    corRoupa,
    "#1e293b",
    corRoupa
  );

  // Cabeça 3D
  desenharCaixa3D(
    x - 6 + offsetX,
    baseY + alturaAtual + 2 + offsetY,
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

  // Suaviza o movimento dos personagens e do tornado até o destino da escolha
  const suavizacao = reduzAnimacao ? 1 : 0.07;
  estado3D.grupoX += (estado3D.destinoX - estado3D.grupoX) * suavizacao;
  estado3D.grupoZ += (estado3D.destinoZ - estado3D.grupoZ) * suavizacao;
  estado3D.grupoY += (estado3D.destinoY - estado3D.grupoY) * suavizacao;
  estado3D.tornadoDeslocamentoX += (estado3D.tornadoDestinoX - estado3D.tornadoDeslocamentoX) * suavizacao;

  // Céu de tempestade
  const gradCeu = ctx.createLinearGradient(0, 0, 0, alturaTela * 0.52);
  gradCeu.addColorStop(0, "#020617");
  gradCeu.addColorStop(0.65, "#1e3a8a");
  gradCeu.addColorStop(1, "#3b82f6");
  ctx.fillStyle = gradCeu;
  ctx.fillRect(0, 0, larguraTela, alturaTela);

  // Flash de relâmpago
  if (!reduzAnimacao && Math.random() < 0.005 && intensidadeRelampago <= 0) {
    intensidadeRelampago = 0.7;
    tocarSom("trovao");
  }
  if (intensidadeRelampago > 0) {
    ctx.fillStyle = `rgba(255, 255, 255, ${intensidadeRelampago})`;
    ctx.fillRect(0, 0, larguraTela, alturaTela);
    intensidadeRelampago = Math.max(0, intensidadeRelampago - 0.06);
  }

  // Chão 3D
  const horizonteY = alturaTela * 0.46;
  const gradChao = ctx.createLinearGradient(0, horizonteY, 0, alturaTela);
  gradChao.addColorStop(0, "#0f172a");
  gradChao.addColorStop(1, "#1e293b");
  ctx.fillStyle = gradChao;
  ctx.fillRect(0, horizonteY, larguraTela, alturaTela - horizonteY);

  // Linhas de perspectiva no piso
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

  // Tornado 3D (aproxima ou afasta conforme a escolha do jogador)
  const tornadoBaseX = 185 - estado3D.tornadoDeslocamentoX + Math.sin(tempoAnimacao * 0.8) * 28;
  const tornadoZ = 520 - estado3D.tornadoDeslocamentoX * 0.6;
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

  // Destroços girando no tornado
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

  // Verifica se os personagens entraram no corredor interno da escola
  const personagensDentroDaEscola = estado3D.grupoX < -105 && estado3D.grupoZ > 342;

  // Prédio 3D da Escola Vicente Rijo (fica semi-transparente quando o grupo entra para você ver eles protegidos lá dentro!)
  ctx.save();
  if (personagensDentroDaEscola) {
    ctx.globalAlpha = 0.52;
  }
  desenharCaixa3D(-290, -60, 340, 210, 125, 140, "#cbd5e1", "#94a3b8", "#e2e8f0");
  desenharCaixa3D(-300, 65, 330, 230, 18, 160, "#991b1b", "#7f1d1d", "#b91c1c");
  ctx.restore();

  // Placa da Escola
  const placaPos = projetar3D(-185, 42, 338);
  ctx.fillStyle = "#1e3a8a";
  ctx.fillRect(placaPos.x - 68 * placaPos.escala, placaPos.y - 11 * placaPos.escala, 136 * placaPos.escala, 22 * placaPos.escala);
  ctx.fillStyle = "#ffffff";
  ctx.font = `bold ${Math.max(8, Math.round(11 * placaPos.escala))}px sans-serif`;
  ctx.textAlign = "center";
  ctx.fillText("ESCOLA VICENTE RIJO", placaPos.x, placaPos.y + 4 * placaPos.escala);

  // Janelas e Porta
  [-255, -195, -135].forEach((jx) => {
    const jp = projetar3D(jx, 5, 338);
    ctx.fillStyle = "#fef08a";
    ctx.fillRect(jp.x, jp.y, 26 * jp.escala, 24 * jp.escala);
  });
  const portaPos = projetar3D(-198, -22, 338);
  ctx.fillStyle = "#78350f";
  ctx.fillRect(portaPos.x, portaPos.y, 28 * portaPos.escala, 38 * portaPos.escala);

  // Se estiverem agachados no corredor interno, desenha uma mesa resistente 3D protegendo o grupo
  if (personagensDentroDaEscola && estado3D.postura === "agachado") {
    desenharCaixa3D(
      estado3D.grupoX - 38,
      -42,
      estado3D.grupoZ - 14,
      78,
      5,
      28,
      "#92400e",
      "#78350f",
      "#b45309"
    );
  }

  // Personagens 3D na posição atual
  desenharPersonagem3D(estado3D.grupoX - 18, estado3D.grupoY, estado3D.grupoZ, "#dc2626", 32, 0);
  desenharPersonagem3D(estado3D.grupoX, estado3D.grupoY, estado3D.grupoZ + 6, "#2563eb", 26, 1.5);
  desenharPersonagem3D(estado3D.grupoX + 18, estado3D.grupoY, estado3D.grupoZ + 2, "#16a34a", 26, 3.0);

  // Aura visual de feedback no grupo (verde = seguro, vermelho = perigo)
  if (estado3D.alertaVisual !== "normal") {
    const auraPos = projetar3D(estado3D.grupoX, estado3D.grupoY + 15, estado3D.grupoZ);
    ctx.strokeStyle = estado3D.alertaVisual === "seguro" ? "#22c55e" : "#ef4444";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(auraPos.x, auraPos.y, 38 * auraPos.escala, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Chuva 3D
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

  estado3D.tornadoDeslocamentoX = 0;
  estado3D.tornadoDestinoX = 0;

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

  // Posiciona os personagens 3D para o início da cena da rodada
  estado3D.postura = dados.cena;
  estado3D.destinoX = dados.alvoX;
  estado3D.destinoZ = dados.alvoZ;
  estado3D.destinoY = -60;
  estado3D.alertaVisual = "normal";

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
  const acao = opcao.acao3D;

  // Atualiza a cena 3D exatamente conforme a escolha do jogador!
  estado3D.postura = acao.postura;
  estado3D.destinoX = acao.alvoX;
  estado3D.destinoZ = acao.alvoZ;
  estado3D.destinoY = acao.subirAndar ? 25 : -60;
  estado3D.tornadoDestinoX = Math.max(-140, Math.min(130, estado3D.tornadoDestinoX + acao.avancoTornado));
  estado3D.alertaVisual = opcao.ideal ? "seguro" : "perigo";
  legendaCena.textContent = acao.legenda;
  tocarSom("passo");

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
    tocarSom("erro");
    intensidadeRelampago = 0.65;
    tocarSom("trovao");
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

  // Personagens tremem parados e o tornado avança na tela 3D
  estado3D.postura = "tremendo";
  estado3D.tornadoDestinoX = Math.min(130, estado3D.tornadoDestinoX + 55);
  estado3D.alertaVisual = "perigo";
  legendaCena.textContent = "Vista 3D: Tempo esgotado! O grupo ficou paralisado e o tornado avançou!";

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

  estado3D.postura = "andando";
  estado3D.destinoX = -25;
  estado3D.destinoZ = 285;
  estado3D.destinoY = -60;
  estado3D.tornadoDestinoX = -150;
  estado3D.alertaVisual = "seguro";
  legendaCena.textContent = "Vista 3D: A tempestade se afastou e todos estão em segurança!";
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