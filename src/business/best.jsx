import React from 'react'
import { Link } from 'react-router-dom'
const best = () => {
  return (
    <div className='bestWrapper'>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <p className='para33'>The best of Uber for your business</p>
                <p className='para34'>Uber for Business gives your organization more control, deeper insights, and features built for enterprise users. Manage and track business travel, meal programs, and more on one dashboard.</p>
                <button className='bestBtn'>How to get started</button>
                <Link className='bestLink'>Check out our solutions</Link>
            </div>
            <div className="col-md-6">
                <img className='bestImg' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_698/v1685006943/assets/07/61a159-ae6b-4821-bcb4-83aaf8c4bdf6/original/220428_UBER_CDMX_M-DT1-A_001035_VS_R2.jpg" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default best
