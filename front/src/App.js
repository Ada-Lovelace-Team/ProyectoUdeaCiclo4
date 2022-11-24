import './App.css';
import React, { useEffect } from 'react';
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
import { Login } from './components/user/Login';
import { Register } from './components/user/Register';
import { UpdateProduct } from './components/Admin/UpdateProduct';
import { loadUser } from './actions/authActions';
import store from "./store"
import { Profile } from './components/user/Profile';
import ProtectedRoute from './routes/ProtectedRoute';
import Envio from './components/Carrito/Envio';
import { ConfirmOrder } from './components/Carrito/ConfirmOrder';
import { Payment } from './components/Carrito/Payment';
import { Succes } from './components/Carrito/Succes';

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/producto/:id" element={<ProductDetails />} />
            <Route path="/listaProductos" element={<ListProducts />} />
            <Route path="/nuevoProducto" element={<NewProduct />} />
            <Route path="/search/:keyword" element={<Home />} />
            <Route path="/carrito" element={<Carro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/myAccount" element={<Profile />} />




            {/*Ruta protegida*/}
            <Route path="/dashboard"
              element={<ProtectedRoute isAdmin={true}><Dashboard /></ProtectedRoute>} />

            <Route path="/updateProduct/:id"
              element={<ProtectedRoute isAdmin={true}><UpdateProduct /></ProtectedRoute>} />
            <Route path="/shipping"
              element={<ProtectedRoute><Envio /></ProtectedRoute>} />
            <Route path="/order/confirm"
              element={<ProtectedRoute><ConfirmOrder /></ProtectedRoute>} />

            <Route path="/payment"
              element={<ProtectedRoute><Payment /></ProtectedRoute>} />

            <Route path="/success"
              element={<ProtectedRoute><Succes /></ProtectedRoute>} />






          </Routes>
        </div>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
