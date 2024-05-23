import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <ul className="footer__categories">
        <li><Link to="/posts/categories/:privacy">Privacy Policy</Link></li>
        <li><Link to="/posts/categories/:privacy">Privacy Policy</Link></li>
        <li><Link to="/posts/categories/:privacy">Privacy Policy</Link></li>
        <li><Link to="/posts/categories/:privacy">Privacy Policy</Link></li>
        <li><Link to="/posts/categories/:privacy">Privacy Policy</Link></li>
        <li><Link to="/posts/categories/:privacy">Privacy Policy</Link></li>
        <li><Link to="/posts/categories/:privacy">Privacy Policy</Link></li>
      </ul>

      <div className='footer__copyright'>
       <small>All Rights Reserved &copy; Copyright, WOTKNOTMAG</small>
      </div>
    </footer>
  )
}

export default Footer