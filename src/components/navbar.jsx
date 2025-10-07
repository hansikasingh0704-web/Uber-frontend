import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid navLeftList">
          <span className="navbar-brand companyName">Uber</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 list1">
              <li className="nav-item li5">
                <span onClick={(()=>navigate('/'))}>Ride</span>
              </li>
              <li className="nav-item li6">
                <span onClick={(()=>navigate('/DriveLink'))}>Drive</span>
              </li>
              <li className="nav-item li7">
                <span onClick={(()=>navigate('/BusinessLink'))}>Business</span>
              </li>
              <li className="nav-item li8">
                <a className="nav-link" href="/">Uber Eats</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle navMenu" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </a>
                <ul className="dropdown-menu homeNav">
                  <li><a className="dropdown-item" href="/">About Us</a></li>
                  <li><a className="dropdown-item" href="/">Our Offerings</a></li>
                  <li><a className="dropdown-item" href="/">Our Uber Works</a></li>
                  <li><a className="dropdown-item" href="/">Impact</a></li>
                  <li><a className="dropdown-item" href="/">Diversity, equality, and inclusion</a></li>
                  <li><a className="dropdown-item" href="/">Sustainability</a></li>
                  <li><a className="dropdown-item" href="/">Newsroom</a></li>
                  <li><a className="dropdown-item" href="/">Investor relations</a></li>
                  <li><a className="dropdown-item" href="/">Blog</a></li>
                  <li><a className="dropdown-item" href="/">Careers</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <ul className="navbar-nav navRightList">
          <li className="nav-item li1">
            <FontAwesomeIcon icon={faGlobe} className='navicon' />
            <span className="nav-link">EN</span>
          </li>
          <li className="nav-item li2">
            <span className="nav-link">Help</span>
          </li>
          <li className="nav-item li3">
            <span className="nav-link">Log in</span>
          </li>
          <li className="nav-item li4">
            <button className="btn btn-primary">Sign up</button>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar
