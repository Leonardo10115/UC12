const COVER = '../imagem/cover.png'

const figurinhas = [
    '../imagem/alisson.webp',
    '../imagem/mbape.webp',
    '../imagem/neymar.webp',
    '../imagem/messi.webp',
    '../imagem/cristiano.webp',
    '../imagem/endrick.webp'

];




//Embaralha o array de cartas
//Pesquise algoritimo Fisher-Yates
function shuffle(array) {
    let indice = array.lenght;

    while (indice > 0) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        indice--;

        const temp = array[indice];
        array[indice] = array[indiceAleatorio];
        array[indiceAleatorio] = temp;
    }
    return array;

}

//Inicia ou reinicia o jogo
function startGame(){

}


//vira uma carta
function flipCard(card){

}

//Verifica se encontrou um par
function checkPair(){

}



