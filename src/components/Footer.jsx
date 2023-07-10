import React from 'react';
import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';

const Footer = () => {
    return (
        <div className='footer-container'>
            <footer className='page-heading'>
                <h6>&copy; sputnik</h6>
                <p className='footer-icons'>
                    <InstagramLogo/>
                    <FacebookLogo/> 
                    <TwitterLogo/>  
                </p>
            </footer>
        </div>
    );
};

export default Footer;