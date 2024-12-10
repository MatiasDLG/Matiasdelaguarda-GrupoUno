import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

export default function Inicio() {
    const Background = './background_carrito.png';
    return (
        <div className="min-h-screen">
            <div className="h-[900px] w-full bg-cover bg-center" style={{ backgroundImage: `url(${Background})` }}>
                <div className="container mx-auto max-w-[1170px] flex flex-col h-full justify-center h-[500px]">
                    <h2 className="text-center text-[#ffffff] font-bold text-[90px] leading-[90px] uppercase">
                        TECOMLINE 
                    </h2>
                    <Link to="/products" className="bg-[#2d3a4b] px-[50px] py-[10px] text-[22px] uppercase flex items-center justify-center w-[210px] text-center text-[#ffffff] mt-[30px] mx-auto">
                        TIENDA
                    </Link>
                </div>
            </div>
            <div className="container mx-auto max-w-[1200px] my-[50px]">
                <ItemList />
            </div>
        </div>
    );
}