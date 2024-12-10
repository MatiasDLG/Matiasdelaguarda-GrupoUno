import { useState, useEffect } from "react";
import { getProducts } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("Todos");

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
            setFilteredProducts(data);
            const uniqueCategories = ["Todos", ...new Set(data.map((product) => product.category))];
            setCategories(uniqueCategories);
        });
    }, []);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        if (category === "Todos") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) => product.category === category);
            setFilteredProducts(filtered);
        }
    };

    return (
        <div className="bg-sky-950 p-4 min-h-screen">
            <div className="container mx-auto max-w-screen-lg">
                <ItemList products={filteredProducts} />
            </div>
        </div>
    );
}