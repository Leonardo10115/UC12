const div = document.querySelector("div")
const btn = document.getElementById("btn")
const btnRem = document.getElementById("btn-remove")

btn.addEventListener("click", () => {

    // criamos um elemento de tag p 
    const paragrafo = document.createElement("p")
    
    
    //precisamos dar um texto conteudo a ele
    paragrafo.textContent = "Novo texto criado"

    //depois, precisamos dizer aonde ele ficará  no html
    div.appendChild(paragrafo)
})

btnRem.addEventListener("click", () => {
    const paragrafos = div.querySelectorAll("p")
     if(paragrafos.length > 0){
        paragrafos[0].remove()
     }
    
})