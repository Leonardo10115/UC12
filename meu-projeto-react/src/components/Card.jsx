

function Card({foto, titulo, paragrafo, botao, background}) {
  return (
    <div className="card">
      <div className="header"> <img className="imagem" src={foto} alt="LEO" />
        <h1 className="titulo">{titulo}</h1>
        </div>
       <p className="paragrafo"> {paragrafo}</p>
       <button className="botao">{botao}</button>  
    </div>
  )
}

export default Card