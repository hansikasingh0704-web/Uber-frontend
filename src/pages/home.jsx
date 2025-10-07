import React from 'react'
import Navbar from '../components/navbar'
import Ride from '../components/Ride';
import Drive from '../components/Drive';
import Business from '../components/Business';
import Rent from '../components/Rent';
import Event from '../components/Event';
import Qr from '../components/qr';
const home = () => {
  return (
    <div>
       <Navbar/>
        <Ride/>
        <Drive/>
        <Business/>
        <Rent/>
        <Event/>
        <Qr/>
        
    </div>
  )
}

export default home
