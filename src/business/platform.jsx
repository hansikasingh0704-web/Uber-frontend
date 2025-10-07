import React from 'react'
 import { Link } from 'react-router-dom'
const platform = () => {
  return (
    <div className='platformWrapper'>
      <p  className='platMainPara'>A global platform built on the world’s largest mobility network</p>
      <div className="container">
        <div className="row">
            <div className="col-md-6 platcol1">
                <img className='platImg' src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_60,h_60/v1679420518/assets/f9/be74fb-fb61-4e4f-8757-91131e000869/original/badge-money-64x64.svg" alt="" />
                <p className='para35'>Reduce costs by up to 10% by improving compliance</p>
                <p className='para36'>Our customers agreed they reduced costs on ground transportation and meals.¹ Monitor spending and usage and get controls to enforce policies.</p>
            </div>
            <div className="col-md-6 platcol2">
                <img className='platImg' src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_60,h_60/v1679420624/assets/39/987ba2-fc85-4c9c-b901-75c3e9fc1852/original/badge-plant-64x64.svg" alt="" />
                <p className='para35'>Meet sustainability goals with actionable insights</p>
                <p className='para36'>Track CO₂ emissions for every ride on a dashboard exclusive to Uber for Business. These insights can help you take action and leverage sustainable travel options like Uber Green.²</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 platcol3">
                <img className='platImg' src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_60,h_60/v1679421147/assets/d3/44b065-e97f-433d-95f7-6923c8bb3626/original/badge-star-64x64.svg" alt="" />
                <p className='para35'>Provide an exclusive experience for your teams</p>
                <p className='para36'>In addition to easy expensing and priority support, employees in select cities get access to ride options like Uber Business Comfort that allow your team to enjoy a premium travel experience.</p>
            </div>
            <div className="col-md-6 platcol4">
                <img className='platImg' src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_60,h_60/v1679421252/assets/ea/736be5-8d4a-4f13-a108-614304d68153/original/badge-safety_report-64x64.svg" alt="" />
                <p className='para35'>Prioritize safety and security for your business</p>
                <p className='para36'>We offer additional crash-alert notifications for business users. Our latest <br/> <Link className='platLink'>US Safety Report</Link>  shows that 99.9% of Uber trips are completed without any reported safety incidents.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default platform
