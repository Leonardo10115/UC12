import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffectComponent from './UseEffectComponent'

function App() {
  const [count, setCount] = useState(0)
  const [curtida, setCurtida] = useState(false)

  const alternarCurtir = () => {
    setCurtida(!curtida)
  }
  const adicionarCurtida = () => {
    setCurtida(curtida + 1)
  }

   const aumentar = () => {
      setCount(count + 1)
  }

  const diminuir = () => {
    if(count > 0){
       setCount(count -1)
    }
    
    }
   const resetar = () => {
      setCount(0)
  } 
  const [tema, setTema] = useState('claro')
  const[coloDefundo, setCorDeFundo] = useState('white')
  

  return (
    <>
       <UseEffectComponent/>    
      <div>
        <h2>Contador</h2>
        <h1>{count}</h1>
        <button onClick={aumentar}>+</button>
        <button onClick={diminuir}>-</button>
        <button onClick={resetar}>Reset</button>
      </div>
     
       <hr />
      <div>
        <h2> Botão Curtir</h2>
        <button onClick={adicionarCurtida}>
          Like 
        </button>
        <p style={{color: curtida >= 100 ? 'red' : 'black', fontWeight: 'bold'}}>
          curtida: {curtida}
        </p>
      </div>

    </>
  )
}

export default App
