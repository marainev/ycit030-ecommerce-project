import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PlusCircle, MinusCircle } from 'phosphor-react'; 
import Data from '../data/Data';
import Footer from '../components/Footer';

const BookDetail = ({ addToCart }) => {
  const { id } = useParams();
  const book = Data.find((book) => book.id === parseInt(id));

  const [quantity, setQuantity] = useState(1); 

  const handleAddToCart = () => {
    const cartItem = {
      book,
      quantity,
    };
    addToCart(cartItem);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className='page-heading'>
      {book ? (
        <div>
          <h2>{book.title}</h2>
          
          <img src={book.imageURL} alt={book.title} /> 
          <p>{book.author}</p>
          <p>{book.description}</p>
          <p>Price: ${book.price}</p>

          &nbsp; 
          <div>
            <button onClick={handleDecrement}>
              <MinusCircle size={24} />
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>
              <PlusCircle size={24} />
            </button>
          </div>
          <button onClick={handleAddToCart}>Add to Cart</button>
          <Link to="/books">Back to Books</Link>
        </div>

        
      ) : (
        <div>Book not found</div>
      )}
      <Footer/>
    </div>
  );
};

export default BookDetail;


