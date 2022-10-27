import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';



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
         </Routes>
      </div>
      <Footer />

    </div>
    </Router>
  );
}

export default App;
