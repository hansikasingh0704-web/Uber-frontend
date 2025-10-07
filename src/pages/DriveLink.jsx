import React from 'react'
import MainDrive from '../Drive/mainDrive';
import WhyDrive from '../Drive/WhyDrive';
import Fleet from '../Drive/fleet';
import Safety from '../Drive/safety';
import Uber11 from '../Drive/uber11';
import DriveSignup from '../Drive/DriveSignup'; 
import YourWay from '../Drive/yourWay';
const DriveLink = () => {
  return (
    <div>
        <MainDrive/>
        <WhyDrive/>
        <Fleet/>
        <Safety/>
        <Uber11/>
        <YourWay/>
        <DriveSignup/>
    </div>
  )
}

export default DriveLink
