import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'phosphor-react';
import '../styles/components.scss';

const HeroBanner = () => {
  return (
    <>
      <div className='grid-container'>
        <div className='hero-banner-container welcome-container'>
            <div>
                <h2>Welcome to sputnik!</h2>
                <p>Explore our collection of books and discover new worlds.</p>
                <Link to='/books'>
                    <button className='button' type='button'>Browse Books</button>
                </Link>
            </div>`
        </div>

        <div className='hero-banner-container orwell-container'>
            <div className='eye-icon'>
                <Eye size={200} />
            </div>
            <div className='orwell-content'>
                <p>DELVE INTO</p>
                <h2>George Orwell's</h2>
                <h1>1984</h1>
                <h3>
                    <i>"Freedom is the freedom to say that two plus two make four."</i>
                </h3>
                <Link to='/books/1001'>
                    <button className='button' type='button'>Shop Now</button>
                </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;

