import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';
import SearchPage from './pages/SearchPage';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import PaymentSuccess from './pages/PaymentSuccess';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const updateQuantity = (itemId, updatedQuantity) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });

    setCartItems(updatedItems);
  };

  const addToCart = (book) => {
    const newItem = {
      id: book.id,
      title: book.title,
      price: book.price,
      quantity: book.quantity,
    };
    setCartItems((prevItems) => [...prevItems, newItem]);
  };


  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <div className='App'>
        <Header />
        <Nav cartItems={cartItems} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/books/:id' element={<BookDetail addToCart={addToCart} />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/cart' element={<Cart cartItems={cartItems} updateQuantity={updateQuantity } />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/payment-success' element={<PaymentSuccess clearCart={clearCart}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
