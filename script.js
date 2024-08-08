const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você se inscreveu para um concurso de talentos na escola e acabou de chegar ao evento. Qual a sua primeira reação?",
        alternativas: [
            {
                texto: "Estou super animado para mostrar meu talento!",
                afirmacao: "entusiasmo"
            },
            {
                texto: "Estou um pouco nervoso e com medo de me apresentar.",
                afirmacao: "ansiedade"
            }
        ]
    },
    {
        enunciado: "O concurso está prestes a começar e você está na fila para se apresentar. O que você faz para se preparar?",
        alternativas: [
            {
                texto: "Reviso minha apresentação mentalmente e faço alguns exercícios de respiração.",
                afirmacao: "preparação"
            },
            {
                texto: "Tento distraí-lo conversando com outros participantes para relaxar.",
                afirmacao: "socialização"
            }
        ]
    },
    {
        enunciado: "Você finalmente se apresenta e a sua performance vai muito bem! Após a apresentação, a juíza faz uma pergunta sobre o que inspirou sua performance. Como você responde?",
        alternativas: [
            {
                texto: "Falo sobre a minha paixão pelo que fiz e como isso me motiva.",
                afirmacao: "inspiração"
            },
            {
                texto: "Falo sobre o esforço e dedicação que coloquei na preparação.",
                afirmacao: "dedicação"
            }
        ]
    },
    {
        enunciado: "Depois do evento, a escola organiza uma festa para celebrar o sucesso do concurso. Como você participa?",
        alternativas: [
            {
                texto: "Aproveito a festa para conversar e socializar com outros participantes.",
                afirmacao: "socialização"
            },
            {
                texto: "Prefiro passar um tempo sozinho refletindo sobre minha apresentação e pensando em como melhorar.",
                afirmacao: "reflexão"
            }
        ]
    },
    {
        enunciado: "Algumas semanas após o concurso, você recebe um convite para um próximo evento similar. O que você faz?",
        alternativas: [
            {
                texto: "Aceito o convite e começo a me preparar para a próxima apresentação.",
                afirmacao: "preparação"
            },
            {
                texto: "Agradeço o convite, mas prefiro focar em outras atividades por enquanto.",
                afirmacao: "prioridades"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No final do concurso...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
