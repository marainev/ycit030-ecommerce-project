import React from 'react';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className='page-heading'>
            <h2>About</h2>
            <div className='about'>
                <p>
                    sputnik is an independent bookstore for sci-fi enthusiasts in the heart of Prague. Since its establishment, we have been 
                    diligently curating a collection of science fiction books that will transport you to otherworldly realms and ignite your 
                    imagination. Our store is a sanctuary for avid readers seeking thrilling adventures, mind-bending concepts, and thought-provoking 
                    narratives.
                </p> 
                &nbsp;
                <p>
                    At sputnik, we take pride in offering a carefully selected range of science fiction literature, including classic works, 
                    contemporary masterpieces, and hidden gems waiting to be discovered. From dystopian futures to interstellar journeys, our shelves are filled with 
                    captivating stories that explore the wonders and possibilities of the cosmos.
                </p>  
                &nbsp;
                <p> 
                    Whether you are a seasoned sci-fi aficionado or just dipping your toes into the genre, sputnik invites you to embark on an extraordinary reading journey. 
                </p>  
                &nbsp;   
                <p>
                    Come immerse yourself in the boundless worlds of science fiction.
                </p>
            </div>
            <Footer/>
        </div>
    );
};

export default About;