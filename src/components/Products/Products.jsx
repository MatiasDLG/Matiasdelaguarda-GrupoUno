import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading" 
import {useState} from "react";

export default function ProductPage(){
    const[loading,setLoading] = useState{true};
    return(
        <div className="container mx-auto max-w[1170px]">
        <ItemList />
        </div>
    )
}