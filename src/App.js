import './App.css';
import Home from './components/pages/Home/Home';
import Navbar from './components/pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/pages/About us/AboutUs';
import Inventories from './components/pages/Inventories/Inventories';
import Inventory from './components/pages/Inventory/Inventory';
import NotFound from './components/pages/Shared/NotFound/NotFound';
import Footer from './components/pages/Shared/Footer/Footer';
import LogIn from './components/pages/Log in/LogIn';
import SignUp from './components/pages/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import AddItem from './components/pages/AddItem/AddItem';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/inventory' element={<Inventories></Inventories>}></Route>
        <Route path='login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;


/* 
https://i.ibb.co/D7ZXkgL/xiaomi-redmi-9-pink.png
https://i.ibb.co/M54tLBM/xiaomi-redmi-k50-gaming-1.png
https://i.ibb.co/YLwCf9G/apple-iphone-12-r1.png
https://i.ibb.co/mrsdty8/apple-iphone-13-pro-01.png
https://i.ibb.co/SvZ7Vt7/asus-zenfone-7.png
https://i.ibb.co/Y0r6mVS/asus-rog-phone-5s-pro-00.png
https://i.ibb.co/820jnPn/google-pixel-4-1.png  */