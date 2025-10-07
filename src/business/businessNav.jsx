import React from 'react'

const businessNav = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid navLeftList">
          <span className="navbar-brand companyName">Uber<br/> for Business</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 list1 busList">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Overview
                </a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Solutions
                </a>
            </li>
            <li className="nav-item li5">
                <span>Pricing</span>
              </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Customer support
                </a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Resources
                </a>
            </li>
            </ul>
          </div>   
        </div>
        <ul className="navbar-nav navRightList">
          <li className="nav-item li1">
            <span className="nav-link">EN</span>
          </li>
          <li className="nav-item li2">
            <span className="nav-link">Help</span>
          </li>
          <li className="nav-item li3">
            <span className="nav-link">Log in</span>
          </li>
          <li className="nav-item li4 busli4">
            <button className="btn btn-primary busNavbtn"><span className='busSpan'>Get started</span></button>
          </li>
        </ul>
      </nav>
  )
}

export default businessNav
