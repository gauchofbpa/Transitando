//import { random } from './random.js'        

const random = (max = 10, min = 0) => Math.floor(Math.random() * max + min);

const PERGUNTAS = [
    {
        hasGone: false,
        question: 'É necessário utilizar cinto de segurança no banco traseiro do carro?',
        answers: {
            'A': "Sim, até os 10 anos de idade.",
            'B': "Não é necessário.",
            'C': "Sim, é necessário independente da idade.",
        },
        correct: 'C'
    },
    {
        hasGone: false,
        question: 'Crianças com menos de 10 anos devem ser transportadas no banco traseiro?',
        answers: {
            'A': "Sim, é necessário até essa idade.",
            'B': "Não, não é necessário.",
            'C': "Depende da altura da criança.",
        },
        correct: 'A'
    },
    {
        hasGone: false,
        question: 'O que devemos fazer antes de atravessar a rua?',
        answers: {
            'A': "Olhar para os dois lados.",
            'B': "Apenas olhar para a direita.",
            'C': "Correr para o outro lado sem olhar.",
        },
        correct: 'A'

    },
    {
        hasGone: false,
        question: 'Se um acidente de trânsito acontecer e você estiver por perto, o que você deve fazer primeiro?',
        answers: {
            'A': "Mover os feridos para um lugar seguro.",
            'B': "Ligar para a emergência (SAMU ou bombeiros).",
            'C': "Dar água para os feridos",
        },
        correct: 'B'
    },
    {
        hasGone: false,
        question: 'Qual número devemos ligar em caso de acidente de trânsito com feridos?',
        answers: {
            'A': "100",
            'B': "192",
            'C': "190",
            },
            correct: 'B'
    },
    {
        hasGone: false,
        question: 'Pode transportar cachorro dentro do carro?',
        answers: {
            'A': "Sim, mas com equipamento de segurança.",
            'B': "Não, é estritamente proibido.",
            'C': "Sim, é permitido independente da circunstância.",
            },
            correct: 'A'
    },
    {
        hasGone: false,
        question: 'O que um pedestre deve fazer ao se aproximar de uma faixa de pedestres?',
        answers: {
            'A': "Atravessar a faixa rapidamente sem se preocupar com os carros pois tem preferência.",
            'B': "Parar na faixa e esperar até que os carros parem.",
            'C': "Andar despreocupadamente através faixa.",
            },
            correct: 'B'
    },
    {
        hasGone: false,
        question: 'É seguro para um ciclista andar na calçada?',
        answers: {
            'A': "Sim, sempre é seguro.",
            'B': "Depende do tamanho da calçada.",
            'C': "Não, os ciclistas devem usar a pista de bicicleta ou a rua",
            },
            correct: 'C'
    },
    {
        hasGone: false,
        question: 'Quem tem prioridade em uma travessia na faixa de pedestres?',
        answers: {
            'A': "Os carros.",
            'B': "Os ciclistas.",
            'C': "Os pedestres.",
            },
            correct: 'C'
    },
    {
        hasGone: false,
        question: 'O que um ciclista deve fazer ao se aproximar de um cruzamento?',
        answers: {
            'A': "Acelerar para atravessar rapidamente.",
            'B': "Reduzir a velocidade e verificar se há carros vindo.",
            'C': "Ignorar os carros e seguir em frente.",
            },
            correct: 'B'
    },
]
let quantifier = 0;
let buttonClicked = 'D';
let letterCorrect = 'D';
let counter = 0;

const CONFIRM_BUTTOM = "#containerBotao button"

const getRandomQuestion = () => {
    
    let numberQuestion = document.getElementById("balaoPerguntas")
    const perguntaElement = document.getElementById("pergunta");

    clearEffects()
    const nextButton = document.querySelector(CONFIRM_BUTTOM)
    nextButton.onclick = verify
    nextButton.innerText = "Verificar"


    if (PERGUNTAS.length <= 0) {
        console.log(quantifier)
        const element = document.getElementById("centroFinaisSecundario")
        const elementChild = document.querySelectorAll(".alternativa")
        elementChild.forEach(elements => {
            element.removeChild(elements)
        });
        
        numberQuestion.innerText = ("PARABÉNS!!")
        perguntaElement.innerText = ("PARABÉNS, VOCÊ ACERTOU " + quantifier + " QUESTÕES.")
        perguntaElement.style.marginTop = 140;
        return
    }

    const alternativesElements = document.querySelectorAll('.alternativa')

    const randomIndex = pickRandom()

    const { question, answers, correct } = PERGUNTAS[randomIndex]
    PERGUNTAS[randomIndex].hasGone = true
    PERGUNTAS.splice(randomIndex, 1)

    perguntaElement.innerText = question
    counter += 1;
    numberQuestion.innerText = ("PERGUNTA " + counter + "/10:") 
    alternativesElements.forEach(forElement)

    /**
     * 
     * @param {HTMLButtonElement} alternativeElement 
     */
    function forElement(alternativeElement) {
        console.log(alternativeElement)
        const letter = alternativeElement.getAttribute('letra')
        alternativeElement.innerText = answers[letter]
        alternativeElement.onclick = handleClick
        
        letterCorrect = correct;

        function handleClick() {
            clickButton(alternativeElement, correct)
        }
    }
}

addEventListener('load', () => {
    getRandomQuestion()
})

function verify() {
    
    clearEffects()
    const buttons = document.querySelectorAll(".alternativa")
    buttons.forEach(element => {
        if (element.getAttribute('letra') === buttonClicked) {
            element.style.backgroundColor = '#ED1C24A7'
        }

        if (element.getAttribute('letra') === letterCorrect) {
            element.style.backgroundColor = '#00944DA7'
        }
    })
    if (buttonClicked === letterCorrect) {  
        quantifier += 1;
    }
    
    document.querySelector(CONFIRM_BUTTOM).onclick = getRandomQuestion
    document.querySelector(CONFIRM_BUTTOM).innerText = "Proximo"
    document.querySelectorAll('.alternativa').forEach(e => e.onclick = null)

}

function pickRandom() {
    const randomIndex = random(PERGUNTAS.length)

    if (PERGUNTAS[randomIndex].hasGone) return pickRandom()

    return randomIndex
}

/**
 * @param {HTMLButtonElement} buttonPressed 
 */

function clickButton(buttonPressed, correctValue) {
    const letter = buttonPressed.getAttribute('letra')
    console.log(`Clicou na alternativa ${letter}!`)
    
    clearEffects()
    buttonPressed.style.backgroundColor = "#F2B807A6"
    buttonClicked = letter
    if (letter === correctValue) {
        console.log("Acertou!!")
    } else {
        console.log("Alternativa errada :(")
    }

    console.log({ quantifier })
}

function clearEffects() {
    const buttons = document.querySelectorAll(".alternativa")
    buttons.forEach(element => {
        element.style.backgroundColor = "#2f5181"
    })
}
