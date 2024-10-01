export default function Item(){
    const imgProducto = './'

    return(
        <div className="">
         <img src={imgProducto} alt="Imagen Productos" />
         <h3>Titulo Producto</h3>
         <h4>Precio</h4>
        </div>
    )

}