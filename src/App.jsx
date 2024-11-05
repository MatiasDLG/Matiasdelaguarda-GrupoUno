import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from "./components/Inicio/Inicio";
import Acerca from './components/Acerca/Acerca';
import Products from './components/Products/Products';
import Servicios from './components/Servicios/Servicios';
import Contactos from './components/Contactos/Contactos';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Category from './components/Category/Category';

function App() {
  return (
    <div className="bg-sky-950 min-h-screen overflow-x-hidden">
      <BrowserRouter>
          <Header/>
            <Routes>
              <Route path="/" element={<Inicio />}/>
              <Route path="/acerca" element={<Acerca />}/>
              <Route path="/products" element={<Products />}/>
              <Route path="/servicios" element={<Servicios />}/>
              <Route path="/contactos" element={<Contactos />}/>
              <Route path='/category/:categoryId' element={<Category />} />
              <Route path='/products/:productId' element={<ItemDetail />} />
            </Routes>
          <Footer/>
      </BrowserRouter>       
    </div>
  )
}
export default App;