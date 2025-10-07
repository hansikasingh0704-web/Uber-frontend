import React from 'react'

const safety = () => {
  return (
    <div className='safetyWrapper'>
      <p className='safetylp'>Safety on the road</p>
      <p className='safetysp'>Your safety drives us to continuously raise the bar.</p>
      <p className='safetyBeg' style={{marginLeft:"11%"}}>Learn More</p><hr className='safetyLine' style={{marginLeft:"11%"}} />
      <div className="container">
        <div className="row">
            <div className="col-md-4 safety1">
                <img className='safetyImg1' src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_60,h_60/v1535523054/assets/6f/7f63bb-10f4-488b-9000-593bcfe40dca/original/Safety-Center.svg" alt="" />
                <p className='para23'>Protection on every trip</p>
                <p className='para24'>Each trip you take with the Uber app is insured to protect you and your rider.</p>
            </div>
            <div className="col-md-4 safety2">
                <img className='safetyImg2' src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_60,h_60/v1535523101/assets/22/bdf7a1-f49f-47c0-a59e-3e6bc274b6f2/original/24_7-Support.svg" alt="" />
                <p className='para23'>Help if you need it</p>
                <p className='para24'>The Emergency Button calls 911. The app displays your trip details so you can quickly share them with authorities.</p>
                <p className='safetyBeg'>Learn More</p><hr className='safetyLine' />
            </div>
            <div className="col-md-4 safety3">
                <img className='safetyImg3' src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_60,h_60/v1535523136/assets/a7/c590ac-242e-47eb-86cb-90db7712d44f/original/Community-Guidelines.svg" alt="" />
                <p className='para23'>Community Guidelines</p>
                <p className='para24'>Our standards help to create safe connections and positive interactions with everyone. Learn how our guidelines apply to you.</p>
                <p className='safetyBeg'>Learn More</p><hr className='safetyLine' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default safety
