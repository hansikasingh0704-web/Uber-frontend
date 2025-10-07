import React from 'react'
import { Link } from 'react-router-dom'
const interested = () => {
  return (
    <div className='intWrapper'>
      <p className='interestPara'>Interested in learning more?</p>
      <div className="container">
        <div className="row">
            <div className="col-md-4">
                <img className='intImg1' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_450,h_450/v1679425285/assets/a5/05e92b-1d22-45a0-b9d6-4242bb140ed2/original/img-resource-1-360x360_2x.png" alt="" />
                <p className='para52'>How to reduce the carbon footprint of business travel</p>
            </div>
            <div className="col-md-4">
                <img className='intImg2' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_450,h_450/v1679425358/assets/c3/c578f7-9210-46e6-bdc2-cb38493225ba/original/img-resource-2-360x360_2x.png" alt="" />
                <p className='para53'>The perks and benefits your employees want now</p>
            </div>
            <div className="col-md-4">
                <img className='intImg3' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_450,h_450/v1679425447/assets/56/fa60d9-521d-4a8e-84b1-889587b4d8ca/original/img-resource-3-360x360_2x.png" alt="" />
                <p className='para54'>The road to sustainability: executives discuss their efforts toward net zero</p>
            </div>
        </div>
      </div>
      <p className='para55'>Product and feature availability may vary by market and location. To find out more, get started <Link className='intLink'>here</Link>.</p>
      <p className='para56'>¹Based on over 275 Uber for Business customers surveyed globally in February 2023. Customers agreed that they were able to reduce costs on ground transportation and/or meals through better compliance.</p>
      <p className='para56'>²Uber Green is available only in certain cities. In addition, availability may be limited outside of downtown areas to start.</p>
      <p className='para56'>³Based on a November 2021 survey commissioned by Uber, in which 323 Uber for Business customers responded to the question “How likely are you to recommend Uber for Business to a colleague or someone in your professional network?”</p>
    </div>
  )
}

export default interested
