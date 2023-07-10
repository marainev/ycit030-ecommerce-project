import React from 'react';
import '../styles/cart.scss';
import '../styles/data.scss'

const Cart = ({ cartItems }) => {
  const getTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p className='page-heading'>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="page-heading">
                  <img src={item.imageURL} alt={item.title} className="book-image" />
                  <div className="page-heading">
                    <h3>{item.title}</h3>
                    <p>Author: {item.author}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-cost">
            <p>Total Cost: ${getTotalCost()}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
