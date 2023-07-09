import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../data/Data';
import Footer from '../components/Footer';

const BookList = () => {
  return (
    <div>
        <div className='page-heading'>
            <h2>Books</h2>
        </div>
        <div className='book-view'>
            <ul>
                {Data.map((book) => (
                <li key={book.id}>
                    <Link to={`/books/${book.id}`}>
                        <div>
                            <img src={book.image} alt={book.title}/>
                            <h2>{book.title}</h2> 
                            <p>{book.author}</p>
                        </div>
                    </Link>
                </li>
                ))}
            </ul>
        </div>
        <Footer/>
    </div>
  );
};

export default BookList;