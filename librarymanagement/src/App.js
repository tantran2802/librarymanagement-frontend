import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './components/navigation/Layout';
import BookService from './components/book/BookService';
import Borrow from './components/book/BorrowForm';
import Customer from './pages/Customer/Customer';
import ServiceOption from './components/book/ServiceOption';
import ReturnForm from './components/book/ReturnForm';
import Book from './pages/Book/book';
import BorrowNote from './pages/BorrowNote/BorrowNote';
import Orders from './pages/Orders';
import ImportPhysicalBook from './components/book/ImportPhysicalBook';
import Responses from './pages/Response/response';
import ReturnLate from './components/book/ReturnLate';
import Report from './components/report/Report';
import CreateAndImportBook from './components/book/CreateBookAndImport';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/borrownote' element={<ServiceOption />}>
          <Route exact path="/borrownote/borrow-notes" element={<BorrowNote />} />
          <Route path='/borrownote/borrow' element={<Borrow />}></Route>
          <Route path='/borrownote/ImportPhysicalBook' element={<ImportPhysicalBook />}></Route>
          <Route path='/borrownote/return' element={<ReturnForm />}></Route>
          <Route path='/borrownote/returnlate' element={<ReturnLate />}></Route>
          <Route path='/borrownote/bookservice' element={<BookService />}></Route>
          <Route path='/borrownote/create-import' element={<CreateAndImportBook />}></Route>
          <Route path='/borrownote/customer' element={<Customer />}></Route>
        </Route>
        <Route exact path="/books" element={<Book />} />
        <Route exact path="/customers" element={<Orders />} />
        <Route path='/response' element={<Responses />}></Route>
        <Route path='/report' element={<Report/>}></Route>

      </Routes>
    </Layout>

  );
}

export default App;
