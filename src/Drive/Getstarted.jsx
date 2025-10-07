import React from 'react'
import { Link } from 'react-router-dom'
const Getstarted = () => {
  return (
    <div className='getStarted'>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className='drivePara'>
                  <p className='para11'>Drive when you want, make what you need</p>
                  <p className='para12'>Earn on your own schedule.</p>
                </div>
                <button className='drivePageButton'>Get started</button>
                <Link className='drivePageLink'>Already have an account? Sign in</Link>
            </div>
            <div className="col-md-6">
                <img className='drivePageImg' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_698/v1656511866/assets/67/3b671f-4ccd-484a-ad97-cded31823ed0/original/illustration-safety-01-1.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Getstarted

