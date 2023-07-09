import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, ShoppingBagOpen } from 'phosphor-react';
import Footer from '../components/Footer';

const Cart = () => {

    // const { cartItems, setCartItems } = useContext(Data);


    return (
        <div>
            <div className='page-heading'>
                <h2>Shopping Cart</h2>
            </div>
            <div className='empty-cart'>
                <ShoppingBagOpen size={80}/>
                <h3>Your bag is empty</h3>

            </div>

            <Footer/>
        </div>
    )
};

export default Cart;