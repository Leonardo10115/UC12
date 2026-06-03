/* const botao = document.getElementById("btn-trocar")
const texto = document.getElementById("titulo")

botao.addEventListener("click", () => {
    texto.textContent = "texto alterado"
}) */


/*
EXERCICIO 2
const btn = document.getElementById("btn")
const box = document.getElementById("box")

btn.addEventListener("click", () => {
    box.classList.toggle("ativo")
}) */

const input = document.getElementById("input")
const p = document.querySelector("p")

input.addEventListener("change", () => {
    p.textContent = input.value
})