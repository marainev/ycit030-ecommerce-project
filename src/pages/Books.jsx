import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom'; 
import Data from '../data/Data';
import Footer from '../components/Footer';
import BookDetail from './BookDetail';
import '../styles/data.scss'

const Books = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    const newItem = {
      id: book.id,
      title: book.title,
      price: book.price,
    };
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

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
                  <img src={book.imageURL} alt={book.title} className="book-image"/>
                  <h2>{book.title}</h2>
                  <p>{book.author}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
      <Routes> 
        <Route path='/books/:id' element={<BookDetail addToCart={addToCart} />} />
      </Routes>
    </div>
  );
};

export default Books;


