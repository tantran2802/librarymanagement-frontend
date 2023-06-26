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
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/home' element={<Home />}></Route>

        <Route path='/bookservice' element={<BookService/>}></Route>
        
        <Route path='/borrownote' element={<ServiceOption />}>
            <Route path='/borrownote/borrow' element={<Borrow />}></Route>
            <Route path='/borrownote/return' element={<ReturnForm />}></Route>
        </Route>

        <Route path='/customers' element={<Customer />}></Route>
        <Route path='/report'element={<Report />}></Route>

      </Routes>
    </Layout>
    
  );
}

export default App;
