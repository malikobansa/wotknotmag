import React from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

function NavBar() {
  return (
    <nav>
      <div className='container nav__container'>
        <Link to="/" className='nav__logo'>
          <img src="/images/logo.png"alt="wotknotmag"/>
        </Link>
        <ul className='nav__menu'>
          <li className='nav__item'><Link to="/profile" className='nav__link'>Profile</Link></li>
          <li className='nav__item'><Link to="/create" className='nav__link'>Create Post</Link></li>
          <li className='nav__item'><Link to="/author" className='nav__link'>Authors</Link></li>
          <li className='nav__item'><Link to="/logout" className='nav__link'>Logout</Link></li>
        </ul>

        <button className='nav__toggle-btn'>
            <AiOutlineClose/>
        </button>
      </div>
    </nav>
  )
}

export default NavBar