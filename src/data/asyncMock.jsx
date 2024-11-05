export const products = [
    {
        id: 1,
        name: 'Notebook Legion 5 Ryzen 7',
        category: 'laptop gamer',
        price: 1484090,
        description: 'Notebook Legion 5 Ryzen 7 5800H RX 6600M 8GB 15.6" FHD 165 Hz 16GB RAM 1TB SSD Windows 10 Wifi 6 Phantom Blue',
        stock: 2,
        img: 'https://assets.pcfactory.cl/public/foto/42382/1_1000.jpg?t=1727672847831'
    },
    {
        id: 2,
        name: 'Acer TUF F15 Intel Core i7-13620H',
        category: 'laptop gamer',
        price: 1280390,
        description: 'Notebook Gamer TUF F15 Intel Core i7-13620H NVIDIA GeForce RTX 4060 8GB 15.6" FHD 144Hz RAM 16GB 512 SSD Mecha Gray FX507VV-LP139W',
        stock: 3,
        img: 'https://assets.pcfactory.cl/public/foto/51724/1_1000.jpg?t=1728649781573'
    },
    {
        id: 3,
        name: 'Dell G15 5530 Intel Core i5-13450HX',
        category: 'laptop gamer',
        price: 1163990,
        description: 'Notebook Gamer G15 5530 Intel Core i5-13450HX NVIDIA RTX 4050 15.6" FHD 120Hz 16GB 512SSD Windows 11 Black',
        stock: 7,
        img: 'https://assets.pcfactory.cl/public/foto/49805/1_1000.jpg?t=1725147151998'
    },
    {
        id: 4,
        name: 'HP Victus Intel Core i5-12500H',
        category: 'laptop gamer',
        price: 698390,
        description: 'Notebook Gamer Victus Intel Core i5-12500H NVIDIA GeForce RTX 4050 6GB 15.6" FHD 144Hz 16GB RAM 512GB 15-fa1003la',
        stock: 6,
        img: 'https://assets.pcfactory.cl/public/foto/51724/1_1000.jpg?t=1728649781573'
    },
    {
        id: 5,
        name: 'Acer Nitro 5 Intel Core i7',
        category: 'laptop gamer',
        price: 1018490,
        description: 'Notebook Gamer Nitro 5 Intel Core i7 11800H 15.6" FHD 144Hz RTX 3050Ti 4GB RAM 16GB 512SSD Windows 11 Black AN515-57-75P8-1',
        stock: 11,
        img: 'https://assets.pcfactory.cl/public/foto/49060/1_1000.jpg?t=1725147064026'
    },
    {
        id: 6,
        name: 'Motorola Moto E14 64GB/2GB',
        category: 'celular',
        price: 69990,
        description: 'Smartphone Moto E14 64GB/2GB Lavanda Liberado',
        stock: 9,
        img: 'https://assets.pcfactory.cl/public/foto/52542/1_1000.jpg?t=1730721787020'
    },   
    {
        id: 7,
        name: 'Xiaomi Redmi 13C 128GB/4GB',
        category: 'celular',
        price: 114990,
        description: 'Smartphone Xiaomi Redmi 13C 128GB/4GB Negro Liberado',
        stock: 12,
        img: 'https://assets.pcfactory.cl/public/foto/50677/1_1000.jpg?t=1728389746152'
    },    
    {
        id: 8,
        name: 'Xiaomi Redmi Note 12 Pro 256GB/8GB',
        category: 'celular',
        price: 299990,
        description: 'Smartphone Redmi Note 12 Pro 256GB/8GB 5G Negro Liberado',
        stock: 6,
        img: 'https://assets.pcfactory.cl/public/foto/42069/1_1000.jpg?t=1722342761442'
    },
];

export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(()=>{
            res(products); 
        },2500);
    })
}
export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2500);
    });
};
export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 2500);
    });
};  