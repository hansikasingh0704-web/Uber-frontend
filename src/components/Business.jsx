import React from 'react'
import { Link } from 'react-router-dom'
const Business = () => {
  return (
    <div className='businessWrapper'>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
              <div className='businessPara'>
                <p className='para5'>The Uber you know, reimagined for business</p>
                <p className='para6'>Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size.</p>
              </div>
              <button className='businessButton'>Get started</button>
              <Link className='businessLink'>Check out our solutions</Link>
            </div>
            <div className="col-md-6">
                <img className='businessImg' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_698/v1684887108/assets/76/baf1ea-385a-408c-846b-59211086196c/original/u4b-square.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Business
