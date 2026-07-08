import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

/*   const aumentar = () => {
      setCount(count + 1)
  }

  const diminuir = () => {
    if(count > 0){
       setCount(count -1)
    }
    
    }
   const resetar = () => {
      setCount(0)
  } */

  return (
    <>
     {/*  <div className='flex flex-col items-center justify-center min-h-screen bg-gray-500 
      text-white p-4'>
        <div className='bg-gray-400 p-8 rounded-2xl shadow-lg text-center max-w-sm w-full'></div>
        <h2 className='text-xl font-bold mb-4 text-gray-300'> Contador</h2>

        <h1 className='text-6xl font-extrabold my-6 text-indigo-400 transition-all'>
          {count}
        </h1>

        <div className='flex gap-3 justify-center'>
          <button onClick={aumentar} className=''>+</button>

          <button onClick={diminuir} disabled={count === 0} 
          className='bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg transition-colors 
          shadow-md'> -</button>

          <button onClick={resetar}>reset</button>
        </div>
      </div> */}
    </>
  )
}

export default App
