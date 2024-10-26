import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalQuantity = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-list">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <h3>{item.name} (x{item.quantity || 1})</h3>
              <p>Price: ${(item.price * (item.quantity || 1)).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total Items: {totalQuantity}</h3>
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            <button className="checkout-button">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
