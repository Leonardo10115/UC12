const perguntas = [
    {
        categoria: "Futebol",
        texto: "Quem foi o campeão da copa do mundo em 2006?",
        opcoes: ["Alemanha", "Itália", "França", "Espanha"],
        correta: 1,
        explicacao: "A seleção campeã EM 2006 foi a Itália "
    },

    {
        categoria: "Futebol",
        texto: "Quem venceu a bola de ouro 1995?",
        opcoes: ["Maldini", "Romario", "Laudrup", "Weah"],
        correta: 3,
        explicacao: "Correto! George Weah foi o vencedor "
    },

    {
        categoria: "Futebol",
        texto: "Quem foi o campeão da champions league de 2014?",
        opcoes: ["Barcelona", "Milan", "Real Madrid", "Manchester United"],
        correta: 2,
        explicacao: "O time vencedor desta edição da Champions foi o Real Madrid!"
    },
     
    {
        categoria: "Futebol",
        texto: "Que ano Pavel Nedved venceu a bola de ouro?",
        opcoes: ["2000", "2003", "2001", "1999"],
        correta: 1,
        explicacao: "O ano que ele venceu foi em 2003!"
    },

    {
        categoria: "Futebol",
        texto: "Qual foi o segundo time em que Romario passou?",
        opcoes: ["Flamengo", "Vasco", "Barcelona", "PSV"],
        correta: 3,
        explicacao: "O segundo time dele foi o PSV!"
    },

    {
        categoria: "Futebol",
        texto: "Qual desses times da bundesliga já jogou uma Champions League?",
        opcoes: ["FC Augsburg", "Mainz 05", "SC Freiburg", "SV Werder Bremen"],
        correta: 3,
        explicacao: "O SV Werder Bremer ja jogou uma Champions League!"
    },
  
    {
        categoria: "Futebol",
        texto: "Qual primeiro time a vencer a triplece coroa?",
        opcoes: ["Ajax", "PSV Eindhoven", "Celtic", "Manchester United"],
        correta: 2,
        explicacao: "O primeiro time foi o Celtic em 1966/67!"
    },

    {
        categoria: "Futebol",
        texto: "Quem era o recordista de bola de ouro antes de Messi/C.Ronaldo?",
        opcoes: ["Platini", "Beckenbauer", "Gullit", "Ronaldo"],
        correta: 0,
        explicacao: "O antigo vencedor era com 3 seguidas era Michael Platini!"
    },

    {
        categoria: "Futebol",
        texto: "Qual o maior perdedor de finais da Champions League?",
        opcoes: ["Bayer de Munique", "Benfica", "Juventus", "Atletico de Madrid"],
        correta: 2,
        explicacao: "O maior perdedor de finais é a Juventus com 7 derrotas!"
    },

    {
        categoria: "Futebol",
        texto: "Qual o clube com mais derrotas na Champions League?",
        opcoes: ["Ajax", "Porto", "Benfica", "Real Madrid"],
        correta: 3,
        explicacao: "O time com mais derrotas é o Real Mdrid com 121!"
    },


];

//Estado do jogo

let indiceAtual = 0;
let pontos = 0;
let acertos = 0;
let respostas = [];


//Elementos

const telaInicio = document.getElementById("tela-inicio");
const telaQuiz = document.getElementById("tela-quiz");
const telaResultado = document.getElementById("tela-resultado");

const btnComecar = document.getElementById("btn-comecar");
const btnProxima = document.getElementById("btn-proxima");
const btnReiniciar = document.getElementById("btn-reiniciar");

const numeroPergunta = document.getElementById("numero-pergunta");
const placarAtual = document.getElementById("placar-atual");
const barraFill = document.getElementById("barra-fill");
const categoriaBadge = document.getElementById("categoria-badge");
const textoPergunta = document.getElementById("texto-pergunta");
const opcoesContainer = document.getElementById("opcoes-container");
const feedback = document.getElementById("feedback");
const feedbackIcone = document.getElementById("feedback-icone");
const feedbackTexto = document.getElementById("feedback-texto");

function mostrarTela(tela){
     //seleciona tudo que tem a classe 'tela'
     document.querySelectorAll(".tela").forEach((t) => t.classList.remove("ativa"));
     tela.classList.add("ativa");
}

function carregarPergunta(){
    const pergunta = perguntas[indiceAtual];

    //Atualizar header
    numeroPergunta.textContent = `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;
    placarAtual.innerHTML = `<i class="fas fa-star"></i> ${pontos} pts`;
    barraFill.style.width = `${(indiceAtual / perguntas.length) * 100}%`;

    //ATUALIZAR PERGUNTA
    categoriaBadge.textContent = pergunta.categoria;
    textoPergunta.textContent = pergunta.texto;

    //LIMPA OPÇÕES DE FEEDBACK
    opcoesContainer.innerHTML = "";
    feedback.classList.add("escondido");
    btnProxima.classList.add("escondido")

    //CRIA BOTÕES DE OPCAO
    pergunta.opcoes.forEach((opcao, i) => {
        const btn = document.createElement("button");
        btn.classList.add("opcao-btn");
        btn.innerHTML = `<spam class="opcao-letra">${i+1}</spam> ${opcao}`;
        btn.addEventListener("click", () => responder(i, btn));
        opcoesContainer.appendChild(btn);
    });
}

function responder(indiceEscolhido, btnClicado){
    const pergunta = perguntas[indiceAtual];
    const acertou = indiceEscolhido === pergunta.correta;

    //Desabilita todos os botões
    document.querySelectorAll(".opcao-btn").forEach((btn, i) => {
      btn.disabled = true;
      if (i === pergunta.correta) btn.classList.add("correta");
      if (i === indiceEscolhido && !acertou) btn.classList.add("errada");
    });

    // Atualiza pontos e registros
    if(acertou) {
        pontos += 10;
        acertos++;
    }
    respostas.push({ pergunta, escolhida: indiceEscolhido, acertou });

    //Mostra feedback
    feedback.classList.remove("escondido", "feedback-certo", "feedback-errado");
    if(acertou) {
        feedback.classList.add("feedback-certo");
        feedbackIcone.innerHTML = "💯";
        feedbackTexto.textContent = `Correto! ${pergunta.explicacao}`;
    }else{
        feedback.classList.add("feedback-errado");
        feedbackIcone.innerHTML = "❌"
        feedbackTexto.textContent = `Errado! ${pergunta.explicacao}`;
    }
    btnProxima.classList.remove("escondido");

    //Ultima pergunta: muda texto do botao
    if (indiceAtual === perguntas.length -1){
         btnProxima.innerHTML = `Ver Resultado `
    }else{
        btnProxima.innerHTML = `Proxima <i class="fas fa-arrow-right"></i>`
    }
}

function proximaPergunta(){
    indiceAtual++;
    if (indiceAtual < perguntas.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }

}

function mostrarResultado(){
    mostrarTela(telaResultado);
    barraFill.style.width = "100%";

    const erros = perguntas.length - acertos;
    const porcentagem = (acertos / perguntas.length) * 100;

    //Emoji e mensagme
    const resultadoEmoji = document.getElementById("resultado-emoji");
    const resultadoTitulo = document.getElementById("resultado-titulo");
    const resultadoDescricao = document.getElementById("resultado-descricao");

    if (porcentagem === 100) {
        resultadoEmoji.textContent = "🏆";
        resultadoTitulo.textContent = "Perfeito!";
        resultadoDescricao.textContent = "Você acertou tudo! incrivel!"
    }else if (porcentagem >=70) {
        resultadoEmoji.textContent = "🎉";
        resultadoTitulo.textContent =" Muito bem!"
        resultadoDescricao.textContent = "Voce foi muito bem! continue assim!"
    }else if(porcentagem >= 40) {
        resultadoEmoji.textContent = "📚";
        resultadoTitulo.textContent = "Quase lá";
        resultadoDescricao.textContent = "Continue estudando";
    }else{
        resultadoEmoji.textContent = "💪🏻";
        resultadoTitulo.textContent = "Continue estudando!";
        resultadoDescricao.textContent = "Não desista"
    }

    document.getElementById("acertos-numero").textContent = acertos;
    document.getElementById("acertos-numero").textContent = pontos;
    document.getElementById("acertos-numero").textContent = erros;


    const revisaoLista = document.getElementById("revisao-lista");
    revisaoLista.innerHTML = " ";
    respostas.forEach((r, i) => {
         const item = document.createElement("div");
         item.classList.add("revisao-item", r.acertou ? "revisao-certa" : "revisao-errada");
         item.innerHTML = `<span class="revisao-icone">${r.acertou ? "💯" : "❌"}</span>
         <div>
         <strong>Q${i + 1}:</strong> ${r.pergunta.texto}
         ${!r.acertou ? `<br><small>Resposta certa: <b>${r.pergunta.opcoes [r.pergunta.correta]}</b>
         </small>` : ""}
         </div>
         `;
         revisaoLista.appendChild(item);
    });

}

function reiniciar() {
    indiceAtual = 0;
    pontos = 0;
    acertos = 0;
    respostas = [];
    barraFill.style.width = "0%";
    mostrarTela(telaInicio);
}

//EVENTOS

btnComecar.addEventListener("click", () => {
    mostrarTela(telaQuiz);
    carregarPergunta();
});

btnProxima.addEventListener("click", proximaPergunta);
btnReiniciar.addEventListener("click", reiniciar);
