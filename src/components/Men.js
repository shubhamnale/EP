import React, { useState, useEffect } from 'react';
import { useCart } from '../components/CartContext';
import './Men.css';

const Men = () => {
    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState('');
    const [priceFilter, setPriceFilter] = useState('');

    // 🔁 Fetch products from API
    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Failed to fetch products:", err));
    }, []);

    // 🔃 Sort handler
    const handleSort = (order) => {
        let sorted = [...products];
        if (order === 'low-high') {
            sorted.sort((a, b) => a.price - b.price);
        } else if (order === 'high-low') {
            sorted.sort((a, b) => b.price - a.price);
        }
        setProducts(sorted);
        setSortOrder(order);
    };

    // 🔃 Filter handler
    const handlePriceFilter = (range) => {
        fetch("http://localhost:5000/api/products")
            .then(res => res.json())
            .then(data => {
                let filtered = data;
                if (range === 'below-500') filtered = data.filter(p => p.price < 500);
                else if (range === '500-700') filtered = data.filter(p => p.price >= 500 && p.price <= 700);
                else if (range === 'above-700') filtered = data.filter(p => p.price > 700);
                setProducts(filtered);
                setPriceFilter(range);
            });
    };

    return (
        <div className="men-page">
            <div className="filter-section">
                <h2>Filters</h2>
                <div>
                    <h3>Sort by Price</h3>
                    <button onClick={() => handleSort('low-high')} className={sortOrder === 'low-high' ? 'active' : ''}>Low to High</button>
                    <button onClick={() => handleSort('high-low')} className={sortOrder === 'high-low' ? 'active' : ''}>High to Low</button>
                </div>
                <div>
                    <h3>Price Range</h3>
                    <button onClick={() => handlePriceFilter('below-500')} className={priceFilter === 'below-500' ? 'active' : ''}>Below ₹500</button>
                    <button onClick={() => handlePriceFilter('500-700')} className={priceFilter === '500-700' ? 'active' : ''}>₹500 - ₹700</button>
                    <button onClick={() => handlePriceFilter('above-700')} className={priceFilter === 'above-700' ? 'active' : ''}>Above ₹700</button>
                </div>
            </div>

            <div className="men-section">
                <h1>Men's Collection</h1>
                <div className="product-grid">
                    {products.map(product => (
                        <div key={product._id} className="product-card">
                            <img src={`/images/${product.image}`} alt={product.name} className="product-image" />
                            <h2>{product.name}</h2>
                            <p className="product-price">₹{product.price}</p>
                            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Men;
