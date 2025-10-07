import React from 'react'

const fleet = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img className='fleetImg1' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_620,h_349/v1535744030/assets/7e/4c2f7e-da89-4c1e-a8cf-1b56172c6e5b/original/D_Fleet2x.png" alt="" />
                <p className='para19'>Join a fleet</p>
                <p className='para20'>Find and join a fleet partner and start driving for them using the Uber app.</p>
            </div>
            <div className="col-md-6">
            <img className='fleetImg2' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_620,h_349/v1535753709/assets/ec/8183dc-ffee-468a-9ee8-175bd1fb1f55/original/D_Fleet_22x.png" alt="" />
            <p className='para21'>Become a fleet partner</p>
            <p className='para22'>Start making money. Connect your drivers and upload the required documents to your profile.</p>
            <p className='fleetEndPara'>Learn More</p><hr  className='fleetLine'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default fleet
