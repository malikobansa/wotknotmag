import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'
import { IoIosSearch } from "react-icons/io";

function NavBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);


  const toggleSearch = () => {
    setIsSearchOpen(prev => !prev);
  }; 

  return (
    <nav>
      <div className='container nav__container'>
        <Link to="/" className='nav__logo'>
          <img src="/images/logo.png" alt="wotknotmag" className='img'/>
          <p className='logo-text'>OTKNOTMAG</p>
        </Link>

        
        {/* <ul className='nav__menu'>
          <li className='nav__item'><Link to="/profile" className='nav__link'>Profile</Link></li>
          <li className='nav__item'><Link to="/create" className='nav__link'>Create Post</Link></li>
          <li className='nav__item'><Link to="/author" className='nav__link'>Authors</Link></li>
          <li className='nav__item'><Link to="/logout" className='nav__link'>Logout</Link></li>
        </ul> */}

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

        <button className='nav__toggle-btn'>
            <AiOutlineClose/>
        </button>
      </div>
    </nav>
  )
}

export default NavBar