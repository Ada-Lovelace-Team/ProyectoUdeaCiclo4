<<<<<<< HEAD

import './App.css';
import React from 'react';
import Header from './componentes/layout/Header';
import {Footer} from './componentes/layout/Footer'

function App() {
  return (
    <div className="App">
        <Header/>
        <center>Contenido aqui</center>
        <center>Contenido aqui</center>
        <center>Contenido aqui</center>
        <center>Contenido aqui</center>
        <center>Contenido aqui</center>
        <center>Contenido aqui</center>
        <center>Contenido aqui</center>
        <center>Contenido aqui</center>
        <center>Contenido aqui</center>
        <Footer/>
      
    </div>
=======
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
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          <Route path="/admin/listaProductos" element={<ListProducts/>}/>
          <Route path="/admin/nuevoProducto" element={<NewProduct />}/>
          <Route path="/admin/modProducto" element={<ModProduct />}/>
          <Route path="/carrito" element={<Carro />}/>

         </Routes>
      </div>
      <Footer />

    </div>
    </Router>
>>>>>>> 4f95562cd8ded416edee21f87ecf7e6baf71eb21
  );
}

export default App;
