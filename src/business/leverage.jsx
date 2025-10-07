import React from 'react'
import { Link } from 'react-router-dom'
const leverage = () => {
  return (
    <div  className='leverageWrapper'>
      <p className='levPara'>How companies leverage Uber for Business</p>
      <div className="container">
        <div className="row">
            
              <div className="col-md-4">
              <Link className='levLink'>
                <img className='levImg1' src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_450,h_254/v1679435963/assets/a6/c383fd-e0a2-4534-9651-40aa6f143f93/original/ilo-business_travel-360x204-expandable.svg" alt="" />
                <p className='para37'>Business travel</p>
                </Link>
              </div>
            
            
              <div className="col-md-4">
              <Link className='levLink'>
                <img className='levImg2' src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_450,h_254/v1679436006/assets/bd/b27aa4-3019-479f-9b41-c9bbc5187d33/original/ilo-courtesy_rides-360x204-expandable.svg" alt="" />
                <p className='para38'>Courtesy rides</p>
            </Link>
              </div>
            
            
              <div className="col-md-4">
              <Link className='levLink'>
                <img className='levImg3' src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_450,h_254/v1679436116/assets/d9/ca79d1-d191-442b-8a19-df7cc125a59c/original/ilo-meal_programs-360x204-expandable.svg" alt="" />
                <p className='para39'>Meal programs</p>
              </Link>
              </div>           
            
            
        </div>
      </div>
    </div>  
    
  )
}

export default leverage
