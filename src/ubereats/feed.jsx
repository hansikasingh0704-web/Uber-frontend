import React from 'react'
import { Link } from 'react-router-dom'
const feed = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-4">
                <Link to='/'><img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/88d55f7112efe55f.webp" alt="" /></Link>
                <Link to='/'>Feed your employees</Link>
                <Link to='/'>Create a Business account</Link>
            </div>
            <div className="col-md-4">
                <Link to='/'><img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/711d51ca1b458931.webp" alt="" /></Link>
                <Link to='/'>Your restaurant, delivered</Link>
                <Link to='/'>Add your restaurant</Link>
            </div>
            <div className="col-md-4">
                <Link to='/'><img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/16522a701585873b.webp" alt="" /></Link>
                <Link to='/'>Deliver with Uber Eats</Link>
                <Link to='/'>Sign up to deliver</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default feed
