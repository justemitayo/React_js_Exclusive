import React from 'react';
import { Link } from 'react-router';
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { useRef } from 'react';
import searchs from '../../Assets/search.png'
import cart from '../../Assets/cart.png'
import person from '../../Assets/person.png'
import heart from '../../Assets/hearts.png'
import Logo from '../../Assets/Logo.png'
import './Navbar.css'


interface props{
  setShowAccount: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({setShowAccount}:props) => {

  const navRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState<string>('')

  const showNavbar =() =>{
    navRef.current?.classList.toggle("responsive_nav");
  }

  return (
    <div className='navbar'>
        <div className='navbar-content'>
            <Link to='/'><img alt='' src={Logo} style={{width:'118px', height:'24px'}}  onClick={() => setShowAccount(false)}/></Link> 
             <nav className='navbar-menu' ref={navRef}>
                <Link to='/'> <li onClickCapture={showNavbar} onClick={() => {setShowAccount(false)}}>Home</li></Link>  
                <Link to='/contact'><li onClick={showNavbar }>Contact</li></Link> 
                <Link to='/about'><li onClick={showNavbar}>About</li></Link>
                <Link to ='/sign'><li onClick={showNavbar}>Sign</li></Link>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}> X</button>
            </nav>
            <form className='navbar-form'>
              <input 
                placeholder='What are you looking for?'
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{backgroundColor:'#f5f5f5', width:'230px', height:'38px', fontSize:'12px', padding:'15px'}}
              />
              <img alt='' src={searchs}  style={{position:'absolute', right:'20px', width:'1.5rem', height:'1.5rem'}}/>
            </form>
            <div style={{ height:'38px', display:'flex',alignItems:'center', justifyContent:'center', gap:'0.3rem' }}>
              <Link to='/wishlist'><img alt='' src={heart} className='icons' /></Link>
              <Link to='/cart'><img alt='' src={cart} className='icons'/></Link>
              <img alt='' src={person} className='icons' onClick={() => setShowAccount(true)}/>
              <button onClick={showNavbar} className='nav-btn icons'><FaBars /></button>
            </div>
              
          

        </div>
    </div>
  )
}

export default Navbar