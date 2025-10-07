import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from '../pages/home';
import DriveLink from '../pages/DriveLink';
import Footer from '../components/footer';
import BusinessLink from '../pages/BusinessLink';

const appRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='DriveLink' element={<DriveLink/>}/>
          <Route path='BusinessLink' element={<BusinessLink/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default appRouter
