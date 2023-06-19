import './App.css';
import { Route, Routes } from 'react-router-dom';
import History from './components/history/History'
import Home from './components/home/Home';
import Layout from './components/navigation/layou';
import Report from './components/report/Report';
import Signing from './components/sign/Signing';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Signing />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/history' element={<History />}></Route>
        <Route path='/report'element={<Report />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
