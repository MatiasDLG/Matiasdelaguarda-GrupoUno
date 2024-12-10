import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 sm:p-0">
      <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
        <li>
          <Link
            to="/"
            className="text-white text-lg font-medium hover:text-blue-400 transition-colors duration-200"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/nosotros"
            className="text-white text-lg font-medium hover:text-blue-400 transition-colors duration-200"
          >
            Nosotros
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="text-white text-lg font-medium hover:text-blue-400 transition-colors duration-200"
          >
            Tienda
          </Link>
        </li>
        <li>
          <Link
            to="/servicios"
            className="text-white text-lg font-medium hover:text-blue-400 transition-colors duration-200"
          >
            Servicios
          </Link>
        </li>
        <li>
          <Link
            to="/contactos"
            className="text-white text-lg font-medium hover:text-blue-400 transition-colors duration-200"
          >
            Contactos
          </Link>
        </li>
      </ul>
    </nav>
  );
}