import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';
//importing pages
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import CotizadorPage from './pages/CotizadorPage';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='Contacto' element={<ContactPage/>} />
          <Route path='Cotizador' element={<CotizadorPage/>} />
          <Route path='Nosotros' element={<AboutPage/>} />
          <Route path='Blog' element={<BlogPage/>} />
          <Route path='Tienda' element={<StorePage/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
