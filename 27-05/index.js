var conta = ""

var valores = ["C", "()", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "+/-", "0", ",", "="]

for(var i = 0; i < valores.length; i++) {
    var botao = document.getElementById("btn" + (i + 1))
    var valor = valores[i]

    botao.addEventListener("click", function() {
        var v = this.getAttribute("data-valor")
        if (v === "C") limpar()
        else if (v === "=") calcular()
        else inserir(v)
    }) 
        
    botao.setAttribute("data-valor", valor)
}
function inserir(valor) {
    var visor = document.getElementById("display")
    if(visor.textContent === "Erro") conta = ""

    if(valor === "+/-") {
        if(conta.startsWith("-")) conta = conta.slice(1)
        else conta = "-" + conta
        visor.textContent = conta
        return
    }
    conta = conta + valor

    visor.textContent = conta
}
function calcular() {
    var visor = document.getElementById("display")
    var exprVisor = document.getElementById("expr")

    if(conta === "") return

    try{
        var i = 0
        while (i < PaymentResponse.length) {
            if(partes[i] === "*" || partes[i] === "/") {
                
            }
        }
    }
}