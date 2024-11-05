import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock';
import Loading from '../Loading/Loading';

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({ stock: 0 });
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const incrementQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const totalPrice = product.price * quantity;

    if (loading) {
        return <div className='container mx-auto max-w-[1170px]'><Loading /></div>;
    }

    if (!product) {
        return <div className='text-center text-white'>Producto no encontrado</div>;
    }

    return (
        <div className='min-h-screen flex items-center justify-center py-10'>
            <div className='max-w-xl w-full bg-white rounded-lg shadow-lg overflow-hidden p-6'>
                <div className="flex flex-col items-center gap-6">
                    <img src={product.img} alt={product.name} className='w-full h-auto max-h-80 object-cover rounded-md' />
                    
                    <h1 className='text-2xl font-semibold text-gray-900 text-center'>{product.name}</h1>
                    <p className='text-gray-700 text-center'>{product.description}</p>

                    <div className='flex items-center justify-between w-full text-gray-800'>
                        <span className='font-semibold'>En stock: {product.stock}</span>
                        <span className='font-bold text-lg'>${product.price}</span>
                    </div>

                    <div className='flex items-center mt-4'>
                        <button onClick={decrementQuantity} className='bg-blue-800 text-white px-4 py-1 rounded-l hover:bg-blue-700'>-</button>
                        <span className='w-12 text-center border border-gray-300 py-1'>{quantity}</span>
                        <button onClick={incrementQuantity} className='bg-blue-800 text-white px-4 py-1 rounded-r hover:bg-blue-700'>+</button>
                    </div>

                    <div className='mt-6 text-center w-full'>
                        <p className='text-lg font-semibold'>Total: <span className='text-blue-800'>${totalPrice}</span></p>
                        <button className='mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 transition duration-200'>
                            Añadir al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}