import React from 'react';
import HeroBanner from '../components/HeroBanner';
import FooterBanner from '../components/FooterBanner';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
        <HeroBanner/>

            <div className='page-heading'>
                <h2>Best Sellers</h2>
            </div>

        <FooterBanner/>
        <Footer/>
        </div>
    )
};

export default Home;
