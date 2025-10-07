import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle,faSquare } from '@fortawesome/free-solid-svg-icons'
const Ride = () => {
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div className='rideWrapper'> 
      <div className="container">
        <div className="row">
            <div className="col-md-6 ridePara">
                <p className='para1'>Go anywhere with Uber</p>
                <p className='para2'>Request a ride, hop in, and go.</p>
                <form onSubmit={handleSubmit}>
                  <div className='rideInputWrapper'>
                    <div className="inputContainer">
                      <FontAwesomeIcon icon={faCircle} width="7.5px" height="7.5px" className="inputIcon" style={{color:"#000000"}} />
                      <input className='rideForm' type="text" placeholder='Enter Location' />
                    </div>
                    <div className="inputContainer">
                      <FontAwesomeIcon icon={faSquare} width="7.5px" height="7.5px" className="inputIcon" style={{color:"#000000"}} />
                      <input className='rideForm' type="text" placeholder='Enter destination' />
                    </div>
                    <div className="lineBetweenIcons"></div>
                  </div>
                  <button className='rideButton' type='submit'>See prices</button>  
                </form>
            </div>
            <div className="col-md-6">
                <img className='rideImg' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_698/v1715811384/assets/16/9d4ec4-89fe-45ff-9557-dc4d8adc45a3/original/Ride-with-Uber-square.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Ride
