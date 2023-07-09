import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';
import SearchPage from './pages/SearchPage';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout'
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Nav/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/books' element={<Books/>} />
            <Route path='/books/:id' element={<BookDetail/>} />
            <Route path='/search' element={<SearchPage/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
    </div>
  );
}

export default App;