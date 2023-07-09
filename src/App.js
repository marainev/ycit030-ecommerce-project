import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout';

function App() {
  return (
    <div className='App'>
      <Layout/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/books' element={<Books/>} />
            <Route path='/books/:productId' element={<BookDetail/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
    </div>
  );
}

export default App;
