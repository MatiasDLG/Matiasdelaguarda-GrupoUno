  import { useState } from 'react';
  import './App.css' 
  import Header from './components/Header/Header'
  import Footer from './components/Footer/Footer'
  // import Miboton from './components/Botones/Botones'
  import Mititulo from './components/Titulos/Titulos'

  function App() {
    return (
      <div>
        <Header/>
        <section className="m-0 p-0 pt-60 none max-w-1200 box-border text-center ">  
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