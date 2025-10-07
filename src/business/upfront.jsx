import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const upfront = () => {
  return (
    <div className='upfrontWrapper'>
      <p className='upfrontPara'>Get started with no upfront costs</p>
      <div className="container">
        <div className="row">
            <div className="col-md-4">
                <img className='upImg' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_450,h_254/v1679422653/assets/e1/ed6649-3011-4181-9dad-a241960c7c61/original/ilo-content_connected-01-360x202_2x.png" alt="" />
                
            </div>
            <div className="col-md-4 iconWrapper">
                <FontAwesomeIcon icon={faSquare} width="9px" height="9px" className='uprfrontIcon' style={{color:"#000000"}} />
            </div>
            <div className="col-md-4">
                <p className='para44'>Customize your travel and meal programs</p>
                <p className='para45'>Set your own policies, help ensure T&E compliance, and get full visibility into every ride and meal. You can easily integrate with the top expensing partners for seamless expensing without paying a service fee.</p>
                
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <img className='upImg' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_450,h_254/v1679422708/assets/60/1f07db-0751-4b92-9399-ae4f0417219d/original/ilo-content_connected-02-360x202_2x.png" alt="" />
            </div>
            <div className="col-md-4 iconWrapper">
                <FontAwesomeIcon icon={faSquare} width="9px" height="9px" className='upfrontIcon' style={{color:"#000000"}} />
            </div>
            <div className="col-md-4">
                <p className='para44'>Onboard people at your own pace</p>
                <p className='para45'>Add individuals, specific teams, or your entire organization at once. After your employees are invited, they can add a business profile for work-related rides and meals to their existing Uber account that they know and trust for business rides and meals.</p>
            </div>
        </div>

         <div className='line1'></div>

        <div className="row">
            <div className="col-md-4">
                <img className='upImg' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_450,h_254/v1679422783/assets/ed/5ab4b4-8d7b-41e7-92b2-1957bd1a79f4/original/ilo-content_connected-03-360x202_2x.png" alt="" />
            </div>
            <div className="col-md-4 iconWrapper">
                <FontAwesomeIcon icon={faSquare} width="9px" height="9px" className='upfrontIcon' style={{color:"#000000"}} />
            </div>
            <div className="col-md-4">
                <p className='para44'>Set up amenities for customers</p>
                <p className='para45'>Send Uber credit in the form of <Link className='upfrontLink1'>gift cards</Link> and <Link className='upfrontLink2'>vouchers</Link> for rides, meals, and more in a snap. You can even request rides for others to make their travel experience<br/> practically effortless.</p>
            </div>
        </div>

        <div className='line2'></div>

      </div>
    </div>
  )
}

export default upfront
