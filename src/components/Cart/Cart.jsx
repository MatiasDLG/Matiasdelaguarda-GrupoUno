import React from 'react';
import { useCartStore } from '../../Store/Store';
import { Link } from "react-router-dom";

export default function Cart (){

  const { cart, removeFromCart, updateCartItem } = useCartStore();
  const CartEmpty= "/Carrito_vacio.png";

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        {/* Imagen del carrito vacío */}
        <img
          src={CartEmpty}
          alt="Carrito vacío"
          className="w-48 h-auto mb-6"
        />
  
        {/* Mensaje del carrito vacío */}
        <h1 className="text-2xl font-bold">Tu carrito está vacío</h1>
        <p className="mt-2 text-sm text-gray-400">
          Agrega productos para empezar a comprar.
        </p>
  
        {/* Botón para explorar productos */}
        <Link
          to="/products"
          className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md transition"
        >
          Explorar productos
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-900">Carrito de Compras</h2>
        <div className="mt-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-3 border-b">
              <img src={item.img} alt={item.name} className="w-20 h-20 object-cover" />
              <div className="flex-1 ml-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => updateCartItem(item.id, item.quantity - 1)}
                  className="bg-blue-800 text-white px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateCartItem(item.id, item.quantity + 1)}
                  className="bg-blue-800 text-white px-2 py-1 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 bg-red-600 text-white px-2 py-1 rounded"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <p className="text-lg font-semibold">Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
          <button className="bg-green-600 text-white px-6 py-2 rounded">COMPRAR</button>
        </div>
      </div>
    </div>
  );
};

