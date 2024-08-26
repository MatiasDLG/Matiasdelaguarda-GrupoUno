import { useState } from 'react'
import './App.css'
import Miboton from './components/Botones/Botones'
import Mititulo from './components/Titulos/Titulos'
import Miimagen from './components/Imagen/Imagen'



function App() {
  const Foto = "/vite.svg";

  return (
    <>
    <Mititulo titulo= "Soi s"/>
    <h1>Hola</h1>
    <Miboton titulo= "Click aquí"/>
    <Miboton titulo= "Reestablecer"/>
    <Miimagen url={Foto} alt="Wa0s"/>
    



    </>
  )
}

export default App
