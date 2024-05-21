import React from 'react'
import{Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <div>
        <header className="navbar">
    <nav className="links">
      <ul className="d-flex list-unstyled gap-4">
        <li>
          <Link to="/home" className="link text-decoration-none fs-5.5">
            Home
          </Link>
        </li>
        <li>
          <Link to="/new" className="link text-decoration-none fs-5.5">
            Newblog
          </Link>
        </li>
        
        <li>
          <Link to="/signup" className="link text-decoration-none fs-5.5">
            SignUp page
          </Link>
        </li>
      </ul>
    </nav>
  
</header>

    </div>
    
  )
}

export default Header