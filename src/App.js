import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Men from './components/Men';
import Main from './components/Main';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import Signup from './components/signup';
import Login from './components/Login';
import User from './components/user';
import Footer from './components/Footer';

function App() {
    return (
        <CartProvider> {/* Wrap everything in CartProvider */}
            <Router>
                <Navbar />
                
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/men" element={<Men />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/women" element={<div>Women Page Coming Soon</div>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/user" element={<User />} />
                </Routes>
                <Footer/>
            </Router>

            
        </CartProvider>
    );
}

export default App;
