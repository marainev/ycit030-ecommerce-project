import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, MinusCircle } from 'phosphor-react';
import Data from '../data/Data';
import '../styles/cart.scss';
import Footer from '../components/Footer';

const Cart = ({ cartItems, updateQuantity }) => {
  const handleIncrement = (itemId) => {
    const updatedQuantity = cartItems.find((item) => item.id === itemId).quantity + 1;
    updateQuantity(itemId, updatedQuantity);
  };

  const handleDecrement = (itemId) => {
    const currentQuantity = cartItems.find((item) => item.id === itemId).quantity;
    if (currentQuantity > 1) {
      const updatedQuantity = currentQuantity - 1;
      updateQuantity(itemId, updatedQuantity);
    }
  };

  const getBookById = (id) => {
    return Data.find((book) => book.id === id);
  };

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const taxAmount = totalCost * 0.05; // Assuming a 5% tax rate
  const totalCostWithTax = totalCost + taxAmount;

  return (
    <div className="page-heading">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
            <p>Your cart is empty.
            <Link to="/books"><b>[click here]</b> </Link>
            </p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => {
              const book = getBookById(item.id);
              return (
                <li key={item.id}>
                  <div className="item-info">
                    <img src={book.imageURL} alt={book.title} className="book-image" />
                    <div className="item-details">
                      <h3>{book.title}</h3>
                      <p>Author: {book.author}</p>
                      <p>Price: ${book.price}</p>
                      <div className="quantity-controls">
                        <button onClick={() => handleDecrement(item.id)}>
                          <MinusCircle size={30} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleIncrement(item.id)}>
                          <PlusCircle size={30} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="total-cost">
            <p>
              <span className="bold">SubTotal Cost:</span>
              <span className="bold cost-amount">{`$${totalCost.toFixed(2)}`}</span>
            </p>
            <p>
              <span className="bold">Tax (GST):</span>
              <span className="bold cost-amount">{`$${taxAmount.toFixed(2)}`}</span>
            </p>
            <p>
              <span className="bold">Total Cost:</span>
              <span className="bold cost-amount">{`$${totalCostWithTax.toFixed(2)}`}</span>
            </p>
          </div>
          <div className="cart-buttons">
            <Link to="/books">
              <button className="button-add-to-cart">Continue Shopping</button>
            </Link>
            <Link to="/checkout">
              <button className="button-add-to-cart">Continue to Checkout</button>
            </Link>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
