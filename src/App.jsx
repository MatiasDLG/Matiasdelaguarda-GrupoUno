  import { useState } from 'react';
  import './App.css' 
  import Header from './components/Header/Header'
  import Footer from './components/Footer/Footer'
  // import Miboton from './components/Botones/Botones'
  import Mititulo from './components/Titulos/Titulos'

  function App() {
    return (
      <div className="contenido">
        <Header/>
        <section className="section">  
          <Mititulo titulo= "TECOMLINE"/>
          <h1>Tecnología y Componentes Online</h1>
        </section>
        <Footer/>
      </div>
    )
  }

  export default App

{/* <Miboton titulo= "Click aquí"/>
     <Miboton titulo= "Reestablecer"/> */}