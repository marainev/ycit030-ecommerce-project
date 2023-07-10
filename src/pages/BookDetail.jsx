import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PlusCircle, MinusCircle } from 'phosphor-react';
import Data from '../data/Data';
import Footer from '../components/Footer';
import '../styles/data.scss';

const BookDetail = ({ addToCart }) => {
    const { id } = useParams();
    const book = Data.find((book) => book.id === parseInt(id));

    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        const cartItem = {
        id: book.id,
        title: book.title,
        price: book.price,
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
                    <img src={book.imageURL} alt={book.title} className='book-image' />
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                    <p>{book.description}</p>
                    <p>Price: ${book.price}</p>

                    <div className='quantity-controls-bookdetail'>
                        <button onClick={handleDecrement}>
                        <MinusCircle size={30} />
                        </button>
                        <span>{quantity}</span>
                        <button onClick={handleIncrement}>
                        <PlusCircle size={30} />
                        </button>
                    </div>

                    <button className='button-add-to-cart' onClick={handleAddToCart}>
                        Add to Cart
                    </button>

                    <Link className='link-back-to-books' to='/books'>
                        Back to Books
                    </Link>
                </div>
            ) : (
                <div>
                    <p>
                        "Oops! It seems like you've stumbled upon a page that doesn't exist in our universe. It might have been swallowed by a black hole or ventured into a parallel dimension. Don't worry, our cosmic engineers are working diligently to bring it back. In the meantime, feel free to explore the other celestial wonders we have in store for you!"
                    </p>
                    &nbsp;
                    <p>
                        If you'd like to continue your journey, click <Link to="/books"><b>[here]</b> </Link>to return to our collection of books.
                    </p>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default BookDetail;
