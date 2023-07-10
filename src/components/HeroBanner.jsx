import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'phosphor-react';
import '../styles/components.scss';

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div className='eye-icon'>
        <Eye size={190} />
      </div>
      &nbsp;
      <div>  
        <p>DELVE INTO</p>      
        <h2>George Orwell's</h2>
        <h1>1984</h1>
        <h3><i>"Big Brother is watching you"</i></h3>
      </div>

      <div>
        <Link to='/books/1001'>
          <button type='button'>Shop Now</button>
        </Link>
        <div className='desc'>
          <p>A dystopian novel depicting a totalitarian regime.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
