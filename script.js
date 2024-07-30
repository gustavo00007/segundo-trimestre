
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Logo após sair da escola, você se depara com uma nova tecnologia: um chat capaz de responder a todas as suas dúvidas, além de gerar imagens e áudios hiper-realistas. Qual é o seu primeiro pensamento?",
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
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decide oferecer uma série de aulas sobre o assunto. No final de uma das aulas, ela pede que você escreva um trabalho sobre o uso da IA na sala de aula. Qual é a sua atitude?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que usa IA para ajudar a encontrar informações relevantes para o trabalho e explicar em uma linguagem que facilite o entendimento.",
                afirmacao: "afirmação"
            },
            {
                texto: "Escreve o trabalho com base em conversas com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realiza um debate com a turma para entender como foi feita a pesquisa e escrita. Durante a discussão, surge um ponto crucial: como a IA impacta o futuro do trabalho. Qual é a sua posição neste debate?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "afirmação"
            },
            {
                texto: "Preocupa-se com as pessoas que podem perder seus empregos para máquinas e defende a importância de proteger os trabalhadores.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, é solicitado que você crie uma imagem no computador que represente sua visão sobre a IA. O que você faz?",
        alternativas: [
            {
                texto: "Cria uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "afirmação"
            },
            {
                texto: "Cria uma imagem utilizando um gerador de imagens de IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, e o progresso está um pouco atrasado. Um membro do grupo decide usar a IA para ajudar na tarefa. O problema é que o trabalho está completamente idêntico ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Acredita que escrever comandos para o chat é uma forma de contribuir com o trabalho, então não vê problema em utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "Reconhece que o chat é uma tecnologia avançada, mas entende que é essencial revisar o trabalho e contribuir com suas próprias perspectivas, já que toda máquina pode cometer erros.",
                afirmacao: "afirmação"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
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
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();
