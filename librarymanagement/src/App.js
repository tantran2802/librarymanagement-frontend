import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './components/navigation/Layout';
import Report from './components/report/Report';
import BookService from './components/book/BookService';
import Borrow from './components/book/BorrowForm';
import Customer from './pages/Customer/Customer';
import ServiceOption from './components/book/ServiceOption';
import ReturnForm from './components/book/ReturnForm';
import Book from './pages/Book/book';
import BorrowNote from './pages/BorrowNote/BorrowNote';
import Orders from './pages/Orders';
import Responses from './pages/Response/response';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/bookservice' element={<BookService />}></Route>
        <Route path='/borrownote' element={<ServiceOption />}>
          <Route exact path="/borrownote/borrow-notes" element={<BorrowNote />} />
          <Route path='/borrownote/borrow' element={<Borrow />}></Route>
          <Route path='/borrownote/return' element={<ReturnForm />}></Route>
        </Route>
        <Route exact path="/books" element={<Book />} />
        <Route path='/customer' element={<Customer />}></Route>
        <Route exact path="/customers" element={<Orders />} />
        <Route path='/response' element={<Responses />}></Route>

      </Routes>
    </Layout>

  );
}

export default App;
