// Cart.jsx
import React from "react";
import Card from "../Card/Card";
import "./Cart.css"; // Import the CSS file

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p>Discount Price: ${item.discountPercentage}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;