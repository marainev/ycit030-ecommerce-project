import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Data from '../data/Data';
import Footer from '../components/Footer';
import { FlyingSaucer, MagnifyingGlass } from 'phosphor-react';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);

  const handleSearch = () => {
    const results = Data.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
    setShowNoResults(results.length === 0);
  };

  const handleAddToCart = (bookId) => {
  };

  return (
    <div className='page-heading'>
      <h2>Search</h2>
      <div className='search-container'>
        <div className='search-bar'>
          <input
            type='text'
            placeholder='Search for a book'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='search-input'
          />
          <button className='button-add-to-cart' onClick={handleSearch}>
            <MagnifyingGlass size={40} />
          </button>
        </div>
      </div>
      {searchResults.length > 0 ? (
        <ul className='search-results'>
          {searchResults.map((book) => (
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
      ) : showNoResults && (
        <div className='page-heading'>
            <p>Sorry, we couldn't find the book you're looking for.</p>
            <p>It seems to have vanished into a temporal anomaly.</p>
            <div>
                <FlyingSaucer size={64} /> 
            </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SearchPage;
