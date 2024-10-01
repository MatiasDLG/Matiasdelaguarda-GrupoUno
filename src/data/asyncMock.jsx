export const products = [
    {
        id: 1,
        name: 'stone cup',
        price: 299,
        description: 'Lorem ipsum dolor sit atem'
        stock: 5,
        img: 'https://www.bellasartes.gob.ar/media/uploads/coleccion/9104.jpg'
    },
    {
        id: 2,
        name: 'stone cup',
        price: 299,
        description: 'Lorem ipsum dolor sit atem'
        stock: 5,
        img: 'https://www.bellasartes.gob.ar/media/uploads/coleccion/9104.jpg'
    },


]

export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(()=>{
            res(products); 
        },2000);
    })
}