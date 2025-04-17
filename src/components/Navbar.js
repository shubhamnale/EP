import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.jpg';
import './Navbar.css';
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useCart } from './CartContext';


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cart } = useCart();
    

return (
        <nav>
            {/* Hamburger Menu Icon (Before Logo in Mobile) */}
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </button>

            {/* Logo Section */}
            <div className="logo-container">
                <img className='logo-img' src={Logo} alt="Logo" />
            </div>

            {/* Menu Items */}
            <div className={`menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to='/New' onClick={() => setMenuOpen(false)}>New & Featured</Link></li>
                    <li><Link to='/Men' onClick={() => setMenuOpen(false)}>Men</Link></li>
                    <li><Link to='/Women' onClick={() => setMenuOpen(false)}>Women</Link></li>
                    <li><Link to='/Sales' onClick={() => setMenuOpen(false)}>Sale</Link></li>
                    <li><Link to='/signup' onClick={() => setMenuOpen(false)}>Signup</Link></li>
                </ul>
            </div>
            <div className="auth-links">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
            {/* Icons */}
            <div className='icons'>
                <button><FiSearch size={21} /></button>
                <Link to=""><FaRegHeart size={20} /></Link>
                <Link to="/cart">
                    <AiOutlineShopping color='black' size={25} />
                    <span className="cart-count"><sub>{cart.length}</sub></span>
                </Link>
            </div>
        </nav>
    );
}


export default Navbar