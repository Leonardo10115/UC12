const COVER = 'assets/imagem/cover.png'

const figurinhas = [
    'assets/imagem/alisson.webp',
    'assets/imagem/mbape.webp',
    'assets/imagem/neymar.webp',
    'assets/imagem/messi.webp',
    'assets/imagem/cristiano.webp',
    'assets/imagem/endrick.webp'

];




//Embaralha o array de cartas
//Pesquise algoritimo Fisher-Yates
function shuffle(array) {
    let indice = array.length;

    while (indice > 0) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        indice--;

        const temp = array[indice];
        array[indice] = array[indiceAleatorio];
        array[indiceAleatorio] = temp;
    }
    return array;

}

let cartasJogo = [];
let primeiraCarta = null;
let segundaCarta = null;
let bloqueiaTabuleiro = false;

//Inicia ou reinicia o jogo
function startGame(){
cartasJogo = [...figurinhas, ...figurinhas];

cartasJogo = shuffle(cartasJogo);

const container = document.querySelector('.principal');
container.innerHTML = '';

cartasJogo.forEach((figurinha, index) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('carta');
    cardDiv.dataset.value = figurinha;
    cardDiv.dataset.index = index;

    const img = document.createElement('img');
    img.src = COVER;

    cardDiv.addEventListener('click', () => flipCard(cardDiv));

    cardDiv.appendChild(img);
    container.appendChild(cardDiv);
});

}
startGame();


//vira uma carta
function flipCard(card){
      if(bloqueiaTabuleiro) return;
      if(card === primeiraCarta) return;

      const img = card.querySelector('img');
      img.src = card.dataset.value;

      if(!primeiraCarta){
        primeiraCarta = card;
        return;
      }

      segundaCarta = card;

      checkPair();
}

//Verifica se encontrou um par
function checkPair(){
    const eIgual = primeiraCarta.dataset.value === segundaCarta.dataset.value;
    if(eIgual) {
        desabilitaCartas();
    }else{
        desviraCartas();
    }
}



