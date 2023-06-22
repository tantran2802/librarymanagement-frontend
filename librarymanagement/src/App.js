import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './components/navigation/Layout';
import Report from './components/report/Report';
import BookService from './components/book/BookService';
import Borrow from './components/book/BorrowForm';
import Orders from './pages/Orders/Customer';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/home' element={<Home />}></Route>

        <Route path='/bookservice' element={<BookService/>}></Route>
        
        <Route path='/borrownote' element={<Borrow />}></Route>
        <Route path='/customers' element={<Orders />}></Route>
        <Route path='/report'element={<Report />}></Route>

      </Routes>
    </Layout>
    
  );
}

export default App;
