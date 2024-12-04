import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import CreateProduct from './components/CreateProduct';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdateDeleteProduct from './components/UpdateDeleteProduct';
import Products from './components/Products';
import Contact from './components/Contact';

function App() {
  return (
    <div className='container text-primary'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>} />
        
        <Route path='/CreateProduct' element={<CreateProduct/>} />
        <Route path='//products/:id' element={<UpdateDeleteProduct/>} />
        <Route path='/Products' element={<Products/>} />
        <Route path='/Contact' element={<Contact/>} />

        </Route>
      </Routes>
      </BrowserRouter>
     
    </div>
    
  );
}

export default App;
