import { useState } from 'react'
import './App.css' 
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Miboton from './components/Botones/Botones'
import Mititulo from './components/Titulos/Titulos'
import Miimagen from './components/Imagen/Imagen'



function App() {
  const Foto = ".src/components/Imagen/Carrito.png";

  return (
    
    <div>
    <Header/>
    <Mititulo titulo= "TECOMLINE"/>
    <h1>Tecnología y Componentes Online </h1>
    <Miboton titulo= "Click aquí"/>
    <Miboton titulo= "Reestablecer"/>
    <Miimagen src={Foto} alt="Wa0s"/>
    <Footer/>
    </div>
  )
}

export default App
