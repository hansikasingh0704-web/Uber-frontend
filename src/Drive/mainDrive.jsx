import React from 'react'
import Navbar from '../components/navbar'
import Getstarted from './Getstarted'
import DriveNav from './DriveNav'
const mainDrive = () => {
  return (
    <div>
      <Navbar/>
      <DriveNav/>
      <Getstarted/>
    </div>
  )
}

export default mainDrive
