import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useWishlist } from '../components/WishlistContext';

const Wishlist = () => {
    const { wishlist } = useWishlist();
    return (
        <div className="wishlist-page">
            <h1>Wishlist</h1>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <div className="wishlist-items">
                    {wishlist.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h2>{product.name}</h2>
                            <p className="product-price">₹{product.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;