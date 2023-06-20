import './App.css';
import { Route, Routes } from 'react-router-dom';
import History from './components/history/History'
import Home from './components/home/Home';
import Layout from './components/navigation/Layout';
import Report from './components/report/Report';
import BookService from './components/book/BookService';
import ImportPhysicalBook from './components/book/ImportPhysicalBook'
import Borrow from './components/book/BorrowForm'
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/home' element={<Home />}></Route>

        <Route path='/bookservice' element={<BookService/>}>
          <Route path='/bookservice/importphysicalbook' element={<ImportPhysicalBook />}></Route>
          <Route path='/bookservice/borrownote' element={<Borrow />}></Route>
        </Route>
        
        <Route path='/history' element={<History />}></Route>

        <Route path='/report'element={<Report />}></Route>

      </Routes>
    </Layout>
  );
}

export default App;
