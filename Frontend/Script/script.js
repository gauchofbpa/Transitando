
// Script tela Escolha

//Botões para mudar a série
addEventListener('load', () => {
    const containerTotal = document.querySelector("#carousel")
    const element = document.querySelector("#ContainerTotal")

    let change = 0;


    const buttonLeft = document.createElement('button')
    buttonLeft.innerText = "<"
    buttonLeft.id = "left"
    buttonLeft.addEventListener('click', () => {
        if (change == 1) {
            element.style.transform = "translateX(-15%)"
        } else if (change == 2) {
            element.style.transform = "translateX(-47%)"
        }
        change -=1
        console.log(change)
    })
    
    const buttonRight = document.createElement('button')
    buttonRight.innerText = ">"
    buttonRight.id = "right"
    buttonRight.addEventListener('click', () => {
        if (change == 0) {
            element.style.transform = "translateX(-47%)"
        } else if (change == 1) {
        element.style.transform = "translateX(-79%)"
        }
        change += 1
    })
    
    containerTotal.appendChild(buttonLeft)
    containerTotal.appendChild(buttonRight)
})

