import { List } from '@mui/material';
import './App.css';
import Landing from './components/Landing';
import Logistics from './components/Logistics';
import Aboutus from './components/Aboutus';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/logistics' element={<Logistics />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/aboutus' element={<Aboutus />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
https://numis-nexus.vercel.app/
*/
