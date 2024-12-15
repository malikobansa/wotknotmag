import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'
import { IoIosSearch } from "react-icons/io";
import { FaBars } from 'react-icons/fa';
import Header from './Header';

function NavBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false);

  const toggleSearch = () => {
    setIsSearchOpen(prev => !prev);
  }; 

  const closeNavHandler = () => {
    if(window.innerWidth < 800){
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true);
    }
  }

  return (
    <nav>
      <div className='container nav__container'>
        <div className='contain'>
        <Link to="/" className='nav__logo'>
          <img src="/images/logo.png" alt="wotknotmag" className='img'/>
          <p className='logo-text'>OTKNOTMAG</p>
        </Link>
        <div className='search-container'>
          {isSearchOpen && (
            <input
              type='text'
              className='search-input'
              placeholder='SEARCH'
            />
          )}
        </div>
          <button className='search-icon' onClick={toggleSearch}>
            <IoIosSearch/>
          </button>
        <button className='nav__toggle-btn' onClick={() => setIsNavShowing(!isNavShowing)}>
          {isNavShowing ? <AiOutlineClose/> : <FaBars/>}
        </button>
        </div>
        <div className='navtain'>
      { isNavShowing &&  <ul className='nav__menu'>
          <li className='nav__item'><Link to="/profile" className='nav__link'>Profile</Link></li>
          <li className='nav__item'><Link to="/create" className='nav__link'>Create Post</Link></li>
          <li className='nav__item'><Link to="/authors" className='nav__link'>Authors</Link></li>
          <li className='nav__item'><Link to="/logout" className='nav__link'>Logout</Link></li>
        </ul>
      }
        </div>
      </div>
    </nav>
  )
}

export default NavBar