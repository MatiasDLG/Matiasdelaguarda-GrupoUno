import { useState } from 'react'
import './App.css' 
import Miboton from './components/Botones/Botones'
import Mititulo from './components/Titulos/Titulos'
import Miimagen from './components/Imagen/Imagen'



function App() {
  const Foto = ".src/components/Imagen/Carrito.png";

  return (
    <>
    <Mititulo titulo= "TECOMLINE"/>
    <h1>Tecnología y Componentes Online </h1>
    <Miboton titulo= "Click aquí"/>
    <Miboton titulo= "Reestablecer"/>
    <Miimagen src={Foto} alt="Wa0s"/>
    



    </>
  )
}

export default App
