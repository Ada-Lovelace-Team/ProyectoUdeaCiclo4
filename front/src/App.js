import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';
import { ProductDetails } from './components/products/ProductDetails';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/Admin/Dashboard';
import { ListProducts } from './components/Admin/ListProducts.js';
import NewProduct from './components/Admin/NewProduct';
import Carro from './components/Carrito/Carro';
import ModProduct from './components/Admin/ModProduct';
import { Login } from './components/user/Login';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Navbar />
      <div className='container container-fluid'>
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/Home" element={<Home /> }/>
          <Route path="/producto/:id" element={<ProductDetails />}/>
          <Route path="/admin/Dashboard" element={<Dashboard/>}/>
          <Route path="/listaProductos" element={<ListProducts/>}/>
          <Route path="/nuevoProducto" element={<NewProduct />}/>
          <Route path="/modProducto" element={<ModProduct />}/>
          <Route path="/search/:keyword" element={<Home />}/>
          <Route path="/carrito" element={<Carro />}/>
          <Route path="/login" element={<Login/>}/>

          


         </Routes>
      </div>
      <Footer />

    </div>
    </Router>
  );
}

export default App;
