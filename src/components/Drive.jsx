import React from 'react'
import {Link} from 'react-router-dom'
const Drive = () => {
  return (
    <div className='driveWrapper'>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img className='driveImg' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_698/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png" alt="" />
            </div>
            <div className="col-md-6">
              <div className='drivePara'>
                <p className='para3'>Drive when you want, make what you need</p>
                <p className='para4'>Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.</p>
              </div>
              
              <button className='driveButton'>Get started</button>
              <Link className='driveLink' to='/'>Already have an account? Sign in</Link>
             
            </div>
        </div>
      </div>
    </div>
  )
}

export default Drive
