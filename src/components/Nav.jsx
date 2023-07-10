import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Circle, List, MagnifyingGlass } from 'phosphor-react';

const Nav = ({ cartItems }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const getCartItemCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    return (
        <div className='navbar-container'>
            <div>
                <button className='phosphor-icon' onClick={toggleMenu}>
                <List size={50} />
                </button>
                {menuVisible && (
                <div>
                <p className='logo'>
                    <Link to='/'>Home</Link>
                </p>
                <p className='logo'>
                    <Link to='/books'>Books</Link>
                </p>
                <p className='logo'>
                    <Link to='/about'>About</Link>
                </p>
                <p className='logo'>
                    <Link to='/contact'>Contact</Link>
                </p>
                </div>
                )}
            </div>
            <div className='icon-container'>
                <Link to='/search' className='phosphor-icon'>
                <MagnifyingGlass size={45} />
                </Link>
                <Link to='/cart' className='phosphor-icon'>
                <ShoppingBag size={50} />
                {cartItems.length > 0 && (
                    <span className='cart-item-count'>
                    <Circle size={12} color='#FBBF24' weight='bold' /> {getCartItemCount()}
                    </span>
                )}
                </Link>
            </div>
        </div>
    )
};

export default Nav;
