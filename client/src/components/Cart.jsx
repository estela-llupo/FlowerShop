import React from 'react';
import Navigation from './Navigation';

function Cart ({ cart, setCart }) {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const removeFromCart = (index) => {
        setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    };

    return (
        <div className="cart-container">
            <nav className="navLinks">
                <Navigation />
            </nav>
            <div className="cart-items">
                <h2>Shopping Cart</h2>
                {cart?.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <div className="cart-list">
                        {cart.map((item, index) => (
                            <div key={index} className="cart-item">
                                <img src={item.imageUrl} alt={item.name} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                    <button onClick={() => removeFromCart(index)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="cart-summary">
                <h2>Summary</h2>
                <p>Total Price: ${totalPrice.toFixed(2)}</p>
                <button>Checkout Now</button>
            </div>
        </div>
    );
};

export default Cart;