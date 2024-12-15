import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
    <ul className='nav__menu'>
          <li className='nav__item'><Link to="/profile" className='nav__link'>Profile</Link></li>
          <li className='nav__item'><Link to="/create" className='nav__link'>Create Post</Link></li>
          <li className='nav__item'><Link to="/author" className='nav__link'>Authors</Link></li>
          <li className='nav__item'><Link to="/logout" className='nav__link'>Logout</Link></li>
    </ul>
    </nav>
  )
}

export default Header