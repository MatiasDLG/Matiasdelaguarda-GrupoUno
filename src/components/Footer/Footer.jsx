import './Footer.css'
import Miimagen from '../Imagen/Imagen';
import logo from '../../assets/img/carrito.png';
export default function Footer(){
    return(
      <footer className="footer">
        <div className="footer-logo"><Miimagen src={logo} alt="Carrito" width="50px" height="auto" /></div>
        <nav className="footer-menu">
          <ul>
            <li><a href="#Privacidad">Privacidad</a></li>
            <li><a href="#Terminos">Terminos</a></li>
            <li><a href="#Acerca">Acerca</a></li>
            <li><a href="#Contactos">Contactos</a></li>
          </ul>
        </nav>
      </footer>
    )
}