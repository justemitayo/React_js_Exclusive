import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router';
import TopHeader from './Components/TopHeader/TopHeader.tsx';
import Navbar from './Components/Navbar/Navbar.tsx'
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';
import SignUp from './pages/SignUp.tsx';
import About from './pages/About.tsx';
import Footer from './Components/Footer/Footer.tsx';
import Login from './pages/Login.tsx';
import Cart from './pages/Cart.tsx';
import Checkout from './pages/Checkout.tsx';
import Wishlists from './pages/Wishlists.tsx';
import DetailBlog from './pages/DetailBlog.tsx';
import AccountPopup from './Components/AccountPopup/AccountPopup.tsx';
import { ToastContainer} from 'react-toastify';
import { useState } from 'react';
import Account from './pages/Account.tsx';

const App:React.FC = () => {
  const [showAccount, setShowAccount] = useState<boolean>(false)
  return (
    <BrowserRouter>
    {showAccount ? <AccountPopup setShowAccount={setShowAccount}/> : <></>}
      <div className="App">
      <TopHeader />
      <Navbar setShowAccount ={setShowAccount}/>
      <Routes>
        <Route path='/account' element={<Account />} />
        <Route path='/cart/checkout' element={<Checkout />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlists />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />}/>
        <Route path='/sign/login' element={<Login/>}/>
        <Route path='/sign' element={<SignUp />} />
        <Route path='/product/:id' element={<DetailBlog/>} />
        <Route path='/' element = {<Home />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
    </BrowserRouter>

  );
}

export default App;
