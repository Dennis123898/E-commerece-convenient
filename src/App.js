import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Mainbody from './components/Mainbody';
import ProductList from './components/ProductList';
import FrozenProducts from './Products/FronzenProducts';
import Cart from './cart/Cart';
import { CartProvider } from './cart/CartContext';
import './App.css';

const App = () => {
  const location = useLocation();
  const isCartPage = location.pathname === '/cart';

  if (isCartPage) {
    return (
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col">
        <Categories />
        <Routes>
          <Route path="/" element={<Mainbody />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/fronzen-products" element={<FrozenProducts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <CartProvider>
     <App />
    </CartProvider>
  </Router>
);



export default AppWrapper;