import React from 'react'

const Rent = () => {
  return (
    <div className='rentWrapper'>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img className='rentImg' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_698/v1696243819/assets/18/34e6fd-33e3-4c95-ad7a-f484a8c812d7/original/fleet-management.jpg" alt="" />
            </div>
            <div className="col-md-6">
              <div className="rentPara">
                <p className='para7'>Make money by renting out your car</p>
                <p className='para8'>Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools.</p>
              </div>
                <button className='rentButton'>Get started</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Rent
