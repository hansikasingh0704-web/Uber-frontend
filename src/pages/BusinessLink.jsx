import React from 'react'
import BusinessNav from '../business/businessNav';
import Best from '../business/best';
import Platform from '../business/platform';
import Leverage from '../business/leverage';
import Upfront from '../business/upfront';
import Join from '../business/join';
import ChooseUber from '../business/chooseUber';
import Interested from '../business/interested';
const BusinessLink = () => {
  return (
    <div>
       <BusinessNav/>
        <Best/>
        <Platform/>
        <Leverage/>
        <Upfront/>
        <Join/>
        <ChooseUber/>
        <Interested/>
    </div>
  )
}

export default BusinessLink
