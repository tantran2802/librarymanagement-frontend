import './App.css';
import { Route, Routes } from 'react-router-dom';
import History from './components/history/History'
import Home from './components/home/Home';
import Layout from './components/navigation/layou';
import Report from './components/report/Report';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/history' element={<History />}></Route>
        <Route path='/report'element={<Report />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
