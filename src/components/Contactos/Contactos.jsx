import React from 'react';

export default function Contactos() {
    return (
        <div className="container mx-auto max-w-4xl p-8">
            <h1 className="text-4xl font-semibold text-gray-200 mb-6">Contáctanos</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-gray-300">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Información de Contacto</h2>
                    <p className="mb-2">Dirección: Juan Ladrilleros 302, Quellón, Chile</p>
                    <p className="mb-2">Teléfono: +56912345678</p>
                    <p>Email: contacto@tecomline.com</p>
                </div>
                

            </div>

            {/* Formulario de contacto */}
            <form className="grid grid-cols-1 gap-6">
                <div>
                    <label htmlFor="name" className="block text-gray-300">Nombre</label>
                    <input 
                        type="text" 

                        className="w-full px-4 py-2 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tu nombre" 
                    />
                </div>
                
                <div>
                    <label htmlFor="email" className="block text-gray-300">Correo electrónico</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tu correo electrónico" 
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-gray-300">Mensaje</label>
                    <textarea 
 
                        className="w-full px-4 py-2 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Escribe tu mensaje aquí..." 
                    ></textarea>
                </div>

                <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-500 transition duration-300">
                    Enviar Mensaje
                </button>
            </form>
        </div>
    );
}