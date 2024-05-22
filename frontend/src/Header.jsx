import React from 'react'  //install
import{Link} from 'react-router-dom' //install


const Header = () => {

  const tokenRelease=()=>{
    sessionStorage.removeItem('userToken')
  }
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
          <Link to="/blogs" className="link text-decoration-none fs-5.5">
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/trending" className="link text-decoration-none fs-5.5">
            Trending
          </Link>
        </li>
        
        <li>
          <Link to="/signup" className="link text-decoration-none fs-5.5">
            SignUp page
          </Link>
        </li>
        <li>
          <Link to="/login" className="link text-decoration-none fs-5.5">
            LOGIN
          </Link>
           </li>
           <li>
          <Link to="/" onClick={tokenRelease} className="link text-decoration-none fs-5.5">
            LOGOUT
          </Link>
        </li>
      </ul>
    </nav>
  
</header>

    </div>
    
  )
}

export default Header