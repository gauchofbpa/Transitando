addEventListener("load", dropDown)

function dropDown(){
    const dropDownElement = document.querySelector(".dropdown")
    console.log(dropDownElement)
    const buttonElement = document.querySelector(".mainmenubtn")
    buttonElement.addEventListener("click", () => handleToggleMenu(dropDownElement))
}

/**
 * 
 * @param {Element} dropDownElement 
 */
function handleToggleMenu(dropDownElement){
    const isActive = dropDownElement.getAttribute("active") === "true"

    dropDownElement.setAttribute("active", !isActive)

    console.log(dropDownElement.getAttribute("active"))

}

