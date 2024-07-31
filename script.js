const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao sair da escola, você se depara com uma nova tecnologia: um chat que responde todas as dúvidas e gera imagens e áudios hiper-realistas. Qual é seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após a descoberta da Inteligência Artificial, uma professora decide fazer aulas sobre o tema. Ela pede que você escreva um trabalho sobre o uso de IA na educação. O que você faz?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca que usa IA para encontrar informações e explicar de forma acessível.",
                afirmacao: "afirmação"
            },
            {
                texto: "Baseia-se em conversas com colegas, pesquisas na internet e conhecimentos próprios.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após elaborar o trabalho, a professora promove um debate sobre como a IA impacta o futuro do trabalho. Qual é sua posição?",
        alternativas: [
            {
                texto: "Defende que a IA cria novas oportunidades e melhora habilidades humanas.",
                afirmacao: "afirmação"
            },
            {
                texto: "Preocupa-se com o impacto negativo da IA no emprego e defende a proteção dos trabalhadores.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você precisa criar uma imagem que represente sua visão sobre IA. Como você procede?",
        alternativas: [
            {
                texto: "Cria uma imagem usando uma plataforma de design como o Paint.",
                afirmacao: "afirmação"
            },
            {
                texto: "Cria uma imagem usando um gerador de imagem de IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Em um trabalho de biologia em grupo, um membro decide usar IA e o trabalho acaba igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Acha válido usar o texto do chat, desde que contribua com os comandos.",
                afirmacao: "afirmação"
            },
            {
                texto: "Revisa o trabalho e adiciona perspectivas pessoais, pois máquinas podem cometer erros.",
                afirmacao: "afirmação"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    // Limpa as alternativas da pergunta anterior
    caixaAlternativas.innerHTML = '';

    // Verifica se todas as perguntas já foram respondidas
    if (atual >= perguntas.length) {
        // Mostra resultado final ou realiza alguma ação
        caixaPerguntas.textContent = "Você completou todas as perguntas!";
        return;
    }

    // Define a pergunta atual
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function () {
            atual++;
            mostraPergunta();
        });
        caixaAlternativas.appendChild(
