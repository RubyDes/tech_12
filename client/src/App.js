import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './utils/scrollToTop';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home';
import Basket from './pages/basket';
import Product from './pages/product';
import AdminPanel from './pages/adminpanel';
import Login from './pages/login';
import AdminMenu from './components/adminmenu/adminmenu'; // Импорт AdminMenu
import { BasketProvider } from './components/context/basketcontext';
import './style/common.css';
import './style/reset.css';

function App() {
  return (
    <div className="App">
      <BasketProvider>
        <Router>
          <AdminMenu /> {/* Добавляем AdminMenu над header */}
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/admin' element={<AdminPanel />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </BasketProvider>
    </div>
  );
}

export default App;