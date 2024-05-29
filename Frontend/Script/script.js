// SCRIPT DA PÁGINA DE ESCOLHA DAS SÉRIES - NICOLAS
//Botões para mudar a série
addEventListener('load', () => {
    const containerTotal = document.querySelector("#carousel")
    const element = document.querySelector("#ContainerTotal")

    let change = 0;

    const possitions = ["translateX(-16.4%)", "translateX(-50%)", "translateX(-83.5%)"]    
     
    const buttonLeft = document.createElement('button')
    buttonLeft.innerText = "<"
    buttonLeft.id = "left"
    buttonLeft.addEventListener('click', () => {
        change = Math.max(change - 1, 0)
        element.style.transform = possitions[change];
        console.log(change)
    })
    
    const buttonRight = document.createElement('button')
    buttonRight.innerText = ">"
    buttonRight.id = "right"
    buttonRight.addEventListener('click', () => {
        change = Math.min(change + 1, 2)
        element.style.transform = possitions[change];
        console.log(change)
    })
    
    containerTotal.appendChild(buttonLeft)
    containerTotal.appendChild(buttonRight)
})
// FIM DO SCRIPT DA PÁGINA DE ESCOLHA DAS SÉRIES