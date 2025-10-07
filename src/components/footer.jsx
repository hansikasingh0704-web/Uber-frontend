import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook,faXTwitter,faYoutube,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container footerCont">
        <div className="row">
            <div className="col-md-3">
                <p className='para15'>Uber</p>
                <p className='para16'>Visit Help Center</p>
                <br /><hr /><br />
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <b>Company</b><br /><br />
                <Link>About us</Link><br />
                <Link>Our Offerings</Link><br />
                <Link>Newsroom</Link><br />
                <Link>Investors</Link><br />
                <Link>Blog</Link><br />
                <Link>Careers</Link><br />
                <Link>AI</Link><br />
                <Link>Gift cards</Link>
            </div>
            <div className="col-md-3 footerRow">
              <b>Products</b><br /><br />
              <Link>Ride</Link><br />
              <Link>Drive</Link><br />
              <Link>Deliver</Link><br />
              <Link>Eat</Link><br />
              <Link>Uber for Business</Link><br />
              <Link>Uber Freight</Link>
            </div>
            <div className="col-md-3 footerRow">
                <b>Global citizenship</b><br /><br />
                <Link>Safety</Link><br />
                <Link>Diversity and Inclusion</Link><br />
                <Link>Sustainability</Link>
            </div>
            <div className="col-md-3 footerRow">
                <b>Travel</b><br /><br />
                <Link>Reserve</Link><br />
                <Link>Airports</Link><br />
                <Link>Cities</Link>
            </div>
        </div>
      </div>
      <div className="container footerCont2">
        <div className="row">
          <div className="col-md-6 appsIcon">
            <FontAwesomeIcon className='appIc' icon={faSquareFacebook} width="15px" height="15px" style={{color:"#ffffff"}} />
            <FontAwesomeIcon className='appIc' icon={faXTwitter} width="15px" height="15px" style={{color:"#ffffff"}} />
            <FontAwesomeIcon className='appIc' icon={faYoutube} width="15px" height="15px" style={{color:"#ffffff"}} />
            <FontAwesomeIcon className='appIc' icon={faLinkedin} width="15px" height="15px" style={{color:"#ffffff"}} />
            <FontAwesomeIcon className='appIc' icon={faInstagram} width="15px" height="15px" style={{color:"#ffffff"}} />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer
