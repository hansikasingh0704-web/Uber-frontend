import React from 'react'

const WhyDrive = () => {
  return (
    <div>
      <p className='whyMainPara'>Why drive with us</p>
      <img className='whyImg' src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_1440,h_338/v1536163470/assets/3a/a87102-5c54-478c-8a98-0df3a951a202/original/whyDriveWithUs_desktop.svg" alt="" />
      <div className="container">
       <div className="row">
        <div className="col-md-4 whycol1">
          <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_30,h_30/v1535521901/assets/04/2e9cbe-6142-4d19-bea4-627a1967cc74/original/calendar.svg" alt="" />
            <p className='para17'>Set your own hours</p>
            <p className='para18'>You decide when and how often you drive.</p>
        </div>
        <div className="col-md-4 whycol2">
            <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_30,h_30/v1535521926/assets/34/56a7a3-6c7b-46fc-a8c6-91d3271b92bd/original/money.svg" alt="" />
            <p className='para17'>Get paid fast</p>
            <p className='para18'>Weekly payments in your bank account.</p>
        </div>
        <div className="col-md-4 whycol3">
            <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_30,h_30/v1535521963/assets/d3/c75f64-aac4-4df0-abd1-561b7ce4feab/original/support.svg" alt="" />
            <p className='para17'>Get support at every turn</p>
            <p className='para18'>If there’s anything that you need, you can reach us anytime.</p>
        </div>
       </div>
      </div>
      <p className='driveEndPara'>How driving works</p><hr className='whyDriveLine' />
    </div>
  )
}

export default WhyDrive
