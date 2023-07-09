import React from 'react';
import { InstagramLogo, TwitterLogo } from 'phosphor-react';

const Footer = () => {
    return (
        <div className='footer-container'>
            <footer className='page-heading'>
                <h6>&copy; 2023 Sea Gato</h6>
                <p className='icons'>
                    <InstagramLogo/> &nbsp;
                    <TwitterLogo/> &nbsp;   
                </p>
            </footer>
        </div>
    )
};

export default Footer;