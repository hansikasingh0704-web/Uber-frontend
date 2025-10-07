import React from 'react'

const join = () => {
  return (
    <div className='joinWrapper'>
      <p className='joinPara'>Join over 170,000 companies working with us, including more than half of the Fortune 500</p>
      <div className="container">
        <div className="row">
            <div className="col-md-4">
                <img className='joinImg1' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_450,h_254/v1679423868/assets/10/662a2b-e822-41f3-82ea-bfe096f10038/original/logo-zoom-360x202_2x.png" alt="" />
            </div>
            <div className="col-md-4">
                <img className='joinImg2' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_450,h_254/v1679423930/assets/46/7467fc-e44a-4e62-a333-decae8656e9f/original/logo-cocacola-360x202_2x.png" alt="" />
            </div>
            <div className="col-md-4">
                <img className='joinImg3' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_450,h_254/v1679423970/assets/d9/76db1c-0f43-425e-bda8-a39d19abec32/original/logo-samsung-360x202_2x.png" alt="" />
            </div>
        </div>
        <div className="row joinPart2">
            <div className="col-md-6">
                <p className='para47'>“Pay and basic benefits aren’t the endgame. You need to be actively listening to what employees need and want. One of our first added benefits was providing Uber credit for rides, so people could safely get a ride for work or for fun. We encourage employees to spend the credits however they want.”</p>
                <span className='para48'>Ryan Carter</span><span className='para50'>, Founder and CEO,</span><p className='para49'>Parachute Media</p>
            </div>
            <div className="col-md-6 video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/38D4KRyvBQY?si=mWFcLj-ZKQAwwcYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
      </div>
    </div>
  )
}

export default join
