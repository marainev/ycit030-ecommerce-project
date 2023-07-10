import React from 'react';
import Data from '../data/Data';
import HeroBanner from '../components/HeroBanner';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <HeroBanner />

      <div className="page-heading">
        <h2>Best Sellers</h2>
      </div>

      <div className="best-sellers">
        <div className="page-heading">
          {Data.slice(0, 4).map((book) => (
            <div key={book.id} className="book-item book-view">
              <img className="book-image" src={book.imageURL} alt={book.title} />
              <div className="book-details">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
