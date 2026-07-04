
import './App.css'
import Botao from './components/Botao'

import Card from './components/Card'

function App() {
  
  function mostrarMensagem(){
    alert("Terceiro-botão")
  }

  return (
    <div>
      {/* <h1>Ola</h1>
      <Botao func={() => alert("Primeiro-botão")} text={"Clique aqui"} background={"btn-primario"} />
      <Botao func={() => alert("Segundo-botão")} text={"Clique tambem"} background={"btn-secundario"} />
      <Botao func={mostrarMensagem} text={"Saiba mais"} background={"btn-desativado"} /> */}
      <Botao text={"Clique"}/>

      <Card foto={"https://2.bp.blogspot.com/-RtyULpny4oI/V5GGedcM8WI/AAAAAAAAIXQ/OmG-RvzdbEkLs7wbLRXV4pE_fQ7MsUdRgCLcB/s1600/escudo_brasil_cbf.png"}
      titulo={"Bom dia!"}
      paragrafo={"sfkjhaskjghasjklgjhkalsjgklsajgklasjgklasjgklgklsajgklasjgklas"}
       botao={"Clique"}/>
      
      
      
       
    </div>
  )
}

export default App
