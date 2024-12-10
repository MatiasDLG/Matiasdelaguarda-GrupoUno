import { useCartStore } from '../../Store/Store';
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const Logo = '/tecomline_logo.png';
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo Principal" className="w-36" />
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden flex items-center text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>

        <div className={`flex items-center space-x-4 sm:flex sm:items-center ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
          <Navbar />
          <Link to="/cart" className="relative flex items-center">
            <img src="/carrito.png" alt="Logo carrito" className="w-8 h-8" />
            {totalItems > 0 && (
              <div className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}