import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.scss'

const HeroBanner = () => {
    return (
        <div className='hero-banner-container'>
            <div>
                <p className='orwell'></p>
            </div>
            <h2>George Orwell</h2>
            <h1>1984</h1>
            <img src='' alt='book' 
            className='hero-banner-image'/>

            <div>
            <Link to='/books/1001'>
                <button type='button'>
                    Shop Now
                </button>
            </Link>
            <div className='desc'>
                <p>A dystopian novel depicting a totalitarian regime.</p>
            </div>
            </div>
        </div>
    )
}

export default HeroBanner;