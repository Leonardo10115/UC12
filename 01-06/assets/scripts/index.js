/* const h1 = document.querySelector("h1")
const btn = document.querySelector("button")

btn.addEventListener("Click", () => {
    // adiciona a classe escolhida ao elemento
    /* h1.classList.add("texto") */

    /* elemento.classeList.toggle("classe") adiciona uma classe SE p elemento NÃO TEM ELA AINDA, ou remove uma classe SE o elemento JÁ TEM ELA 
    h1.classList.toggle("texto")

    const h1 = document.querySelector("h1")
    const button = document.querySelector("button")
    const div = document.querySelector("div")

    btn.addEventListener("click", () => {
        div
    })
}) */

const menu = document.getElementById("menu-desktop")
const btn = document.getElementById("btn-menu")

btn.addEventListener("click", () => {
    menu.classList.toggle("menu-mobile")
})