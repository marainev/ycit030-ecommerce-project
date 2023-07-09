import React from 'react';
import {Link} from 'react-router-dom';
import { ShoppingBag } from 'phosphor-react';


const Nav = () => {
    return (
        <div className='navbar-container'>
            <div>
                <p className='logo'><Link to='/'>Home</Link></p> 

                <p className='logo'><Link to='/books'>Books</Link></p>

                <p className='logo'><Link to='/about'>About</Link></p>  
            </div>
            <div>
                <p className='icon'><Link to='/cart'><ShoppingBag/></Link></p>
            </div>
        </div>    
    )
};

export default Nav;