import React from 'react'
import { useState, useEffect } from 'react'

function UseEffectComponent() {
    const [contador, setContador] = useState(0);
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
    if(contador === 10){
         alert('chegou a 10')
    }else if(contador === 20){
         document.title = 'chegou a 20'
    }else if(contador === 30){
         setMensagem('Chegou ao 30')
    }
    }, [contador]);
  return (
    <div>
     <h1>Contador:{contador}</h1>
     <hr />
        <button onClick={() => setContador (contador +1)}>Clique aqui</button>
      <hr />
      {mensagem && <p>{mensagem}</p>}
    </div>
  )
}

export default UseEffectComponent