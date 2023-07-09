import React from 'react';
import { Link } from 'react-router-dom';

const FooterBanner = () => {
    return (
        <div className='footer-banner-container'>
            <div className='banner-desc'>
                <div className='left'>
                </div>
                <div className='right'>
                    <Link to='/contact'><p>Contact</p></Link>
                    
                </div>
            </div>
        </div>
    )
}

export default FooterBanner;