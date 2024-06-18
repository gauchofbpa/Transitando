import { random } from './random.js'        

const PERGUNTAS = [
    {
        hasGone: false,
        question: 'É necessário utilizar cinto de segurança no banco traseiro do carro?',
        answers: {
            'A': "Resposta A",
            'B': "Resposta B",
            'C': "Resposta C",
        },
        correct: 'A'
    },
    {
        hasGone: false,
        question: 'É necessário utilizar cinto de segurança no banco traseiro do carro?',
        answers: {
            'A': "Segunda Resposta A",
            'B': "Segunda Resposta B",
            'C': "Segunda Resposta C",
        },
        correct: 'A'
    },
    {
        hasGone: false,
        question: 'É necessário utilizar cinto de segurança no banco traseiro do carro?',
        answers: {
            'A': "Terceira Resposta A",
            'B': "Terceira Resposta B",
            'C': "Terceira Resposta C",
        },
        correct: 'A'

    }
]
let quantifier = 0;
let buttonClicked = 'D';
let letterCorrect = 'D';
let counter = 0;

const CONFIRM_BUTTOM = "#containerBotao button"

const getRandomQuestion = () => {
        // 'Crianças com menos de 10 anos devem ser transportadas no banco traseiro.',
        // 'O que devemos fazer antes de atravessar a rua?',
        // 'Se um acidente de trânsito acontecer e você estiver por perto, o que você deve fazer primeiro?',
        // 'Qual número devemos ligar em caso de acidente de trânsito com feridos?',
        // 'O que um ciclista deve fazer ao se aproximar de um cruzamento?',
        // 'O que um pedestre deve fazer ao se aproximar de uma faixa de pedestres?',
        // 'É seguro para um ciclista andar na calçada?',
        // 'Quem tem prioridade em uma travessia na faixa de pedestres?'

    
    clearEffects()
    const nextButton = document.querySelector(CONFIRM_BUTTOM)
    nextButton.onclick = verify

    if (PERGUNTAS.length <= 0) {
        console.log(quantifier)
        return
    }

    const perguntaElement = document.getElementById("pergunta");
    const alternativesElements = document.querySelectorAll('.alternativa')

    const randomIndex = pickRandom()

    const { question, answers, correct } = PERGUNTAS[randomIndex]
    PERGUNTAS[randomIndex].hasGone = true
    PERGUNTAS.splice(randomIndex, 1)

    perguntaElement.innerText = question

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
    
    document.querySelector(CONFIRM_BUTTOM).onclick = getRandomQuestion
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
