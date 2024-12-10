import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Navegación</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-blue-400 transition-colors duration-200"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/nosotros"
                  className="text-white hover:text-blue-400 transition-colors duration-200"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-white hover:text-blue-400 transition-colors duration-200"
                >
                  Tienda
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  className="text-white hover:text-blue-400 transition-colors duration-200"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/contactos"
                  className="text-white hover:text-blue-400 transition-colors duration-200"
                >
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold mb-4">Redes Sociales</h2>
            <div className="flex justify-center sm:justify-start space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-white text-2xl hover:text-blue-500 transition-colors duration-200" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white text-2xl hover:text-pink-500 transition-colors duration-200" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-white text-2xl hover:text-blue-400 transition-colors duration-200" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Contáctanos</h2>
            <p className="text-white">Email: contacto@tecomline.com</p>
            <p className="text-white">Teléfono: +56912345678</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">&copy; 2024 Tecomline. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}