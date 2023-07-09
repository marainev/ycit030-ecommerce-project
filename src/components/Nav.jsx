import React from 'react';
import {Link} from 'react-router-dom';
import { ShoppingBag } from 'phosphor-react';

const Nav = () => {
    return (
        <div className='navbar-container'>
            <div className='logo'>
                <p><Link to='/'>Home</Link></p>
                <p><Link to='/books'>Books</Link></p>
                <p><Link to='/about'>About</Link></p>               
            </div>
            <div>
                <p className='bag-icon'><Link to='/cart'><ShoppingBag/></Link></p>
            </div>
        </div>    
    )
};

export default Nav;