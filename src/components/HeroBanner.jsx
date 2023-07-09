import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.scss'

const HeroBanner = () => {
    return (
        <div className='hero-banner-container'>
            <div>
                <p className='tin-drum'>Günter Grass</p>
            </div>
            <h3>Tin Drum</h3>
            <h1>20%</h1>
            <img src='' alt='book' 
            className='hero-banner-image'/>

            <div>
            <Link to='/books/1003'>
                <button type='button'>
                    Shop Now
                </button>
            </Link>
            <div className='desc'>
                <h5>description</h5>
                <p>description</p>
            </div>
            </div>
        </div>
    )
}

export default HeroBanner;