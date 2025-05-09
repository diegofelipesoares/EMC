import './App.css'

import Perfil from "./components/perfil/Perfil";
import Formulario from './components/Formulario';

function App() {

  return (
    <>
      <Perfil nome="Diego" endereco="http://github.com/diegofelipesoares.png"/>
      <Formulario />
    </>
  )
}

export default App
