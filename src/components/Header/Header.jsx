import './Header.css'
import Miimagen from '../Imagen/Imagen';
import logo from '../../assets/img/carrito.png';
export default function Header(){
  return(
    <header className="cabezal">
      <div className="header-logo"><Miimagen src={logo} alt="Carrito" width="50px" height="auto" /></div>
      <nav className="menu">
        <ul>
          <li><a href="Inicio">Inicio</a></li>
          <li><a href="Acerca">Acerca</a></li>
          <li><a href="Servicios">Servicios</a></li>
          <li><a href="Contactos">Contactos</a></li>
        </ul>
      </nav>
    </header>   
  )
} 


{/*
const Header ) ( ) =>{
    return(<><h1>Hola mundo</h1></>)
}

export default Header; */}