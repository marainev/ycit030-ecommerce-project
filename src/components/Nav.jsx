import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Circle, List } from 'phosphor-react';

const Nav = ({ cartItems }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <div className="navbar-container">
      <div>
        <button className="button-add-to-cart" onClick={toggleMenu}>
          <List size={50} />
        </button>
        {menuVisible && (
           <div>
           <p className="logo">
             <Link to="/">Home</Link>
           </p>
           <p className="logo">
             <Link to="/books">Books</Link>
           </p>
           <p className="logo">
             <Link to="/about">About</Link>
           </p>
           <p className="logo">
             <Link to="/contact">Contact</Link> {/* New "Contact" link */}
           </p>
         </div>
        )}
      </div>
      <div className="icon-container">
        <Link to="/cart" className="button-add-to-cart">
          <ShoppingBag size={50} />
          {cartItems.length > 0 && (
            <span className="cart-item-count">
              <Circle size={12} color="#FBBF24" weight="bold" /> {getCartItemCount()}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Nav;
