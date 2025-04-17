import React from 'react';
import { useCart } from './CartContext';
import './Cart.css'; // Ensure you have this file for styling

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();

    // Calculate total price
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h1 className="cart-title">Shopping Cart</h1>
            <hr />
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-product-image" />
                            <div className="cart-item-details">
                                <h2 className="product-name">{item.name}</h2>
                                <p className="in-stock">In stock</p>
                                <p className="free-shipping">Eligible for FREE Shipping</p>
                                <p className="product-price">₹{item.price.toLocaleString()}</p>
                                <div className="cart-actions">
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>➖</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>➕</button>
                                    </div>
                                    <button className="delete-btn" onClick={() => removeFromCart(item.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <hr />
                    <h2 className="subtotal">Subtotal ({cart.length} items): ₹{totalPrice.toLocaleString()}</h2>
                    <button className="place-order-btn">Place Order</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
