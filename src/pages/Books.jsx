import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../data/Data';
import Footer from '../components/Footer';
import '../styles/components.scss';

const Books = ({ addToCart }) => {
  const books = Data; 

  return (
    <div>
        <div className='page-heading'>
            <h2>Books</h2>
        </div>
        <div className='book-view'>
            <ul>
            {books.map((book) => (
                <li key={book.id}>
                    <Link to={`/books/${book.id}`}>
                        <div>
                            <img src={book.imageURL} alt={book.title} className='book-image' />
                            <h2>{book.title}</h2>
                            <p>{book.author}</p>
                        </div>
                    </Link>
                </li>
            ))}
            </ul>
        </div>
      <Footer />
    </div>
  );
};

export default Books;

