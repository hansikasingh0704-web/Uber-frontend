import React from 'react'

const Event = () => {
  return (
    <div className='eventWrapper'>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
              <div className="eventPara">
                <p className='para9'>Check out what's new at Uber</p>
                <p className='para10'>The products and features announced at Go-Get 2024 are designed to help you connect with others and save a little money along the way. Discover how we’re making every journey an opportunity for interaction—because life is better together.</p>
              </div>    
              <button className='eventButton'>Watch the event</button>
            </div>
            <div className="col-md-6">
                <img className='eventImg' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_698/v1715276953/assets/10/c1b06d-be2b-49ef-806b-a8f565f2f6b6/original/GG2024-homepage.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Event
