import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import CotizadorPage from './pages/CotizadorPage';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import BlogDetailPage from './features/blog/BlogDetailPage';
import ProductDetailPage from './components/ProductDetailPage';
import './App.css';
import './css/blog.css';
import CheckoutPage from './pages/CheckoutPage';
import OrderPage from './pages/Orderpage';
import HousePage from './pages/HousePage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Header />
        <ScrollToTop /> {/*this component is to scroll to the top*/}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='Contacto' element={<ContactPage />} />
            <Route path='Cotizador' element={<CotizadorPage />} />
            <Route path='Nosotros' element={<AboutPage />} />
            <Route path='Blog' element={<BlogPage />} />
            <Route path='Blog/:blogSlug' element={<BlogDetailPage />} />
            <Route path='Tienda' element={<StorePage />} />
            <Route path='Casa-Kauil' element={<HousePage />} />
            <Route path='/product/:slug' element={<ProductDetailPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
