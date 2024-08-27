import './Contador.css'

import React, {useState} from 'react'

export default function Contador(){
    const [contador, setContador] = useState(0);

    const [texto, setTexto] = useState('/');

    const cambiarTexto = () =>{
        setTexto('Nuevo Texto')
    }

    let nuevoTexto = '/shop'

    return(
    <div className="contador">

        <a href={texto}>Carrito</a>
        <button onClick={() => setTexto(nuevoTexto)}>Cambiar</button>
    </div>
    )
};