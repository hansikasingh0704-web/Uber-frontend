import React from 'react'

const products = () => {
  return (
    <div>
      <p>Uber’s technology offerings</p>
      <p>Changing how people can request rides and get from point A to point B is just the beginning.</p>
      <button>Explore the app</button>
      <p>Uber apps, products, and other offerings</p>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <p>Uber is a technology company whose mission is to reimagine the way the world moves for the better. Our technology helps us develop and maintain multisided platforms that match consumers looking for rides and independent providers of ride services, as well as with other forms of transportation, including public transit, bikes, and scooters.</p>
            </div>
            <div className="col-md-6">
                <p>We also connect consumers and restaurants, grocers, and other merchants so they can buy and sell meals, groceries, and other items, then we match them with independent delivery service providers. Plus, Uber connects shippers and carriers in the freight industry.

Our technology helps people connect and move in over 70 countries and 10,000 cities around the world.</p>
            </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
            <div className="col-md-4">
                <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_60,h_60/v1597307017/assets/f6/8dbc95-b665-4469-a596-003161e68370/original/phone_map_pins-blue.svg" alt="" />
                <p>Ride options</p>
                <p>Access to rides on demand.</p>
            </div>
            <div className="col-md-4">
                <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_60,h_60/v1597307032/assets/7d/37dbb9-79dd-45cd-951e-720369d46ecd/original/shopping_bags-blue.svg" alt="" />
                <p>Uber Eats</p>
                <p>Food delivery on demand.</p>
            </div>
            <div className="col-md-4">
                <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_60,h_60/v1597307048/assets/69/064712-deee-4110-b613-3e13c7d3a403/original/dollar_bill-blue-%281%29.svg" alt="" />
                <p>Earning with Uber</p>
                <p>Opportunity is everywhere.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_60,h_60/v1597307063/assets/ae/f169fa-27f6-455d-81f6-65c17d099fb2/original/scale-blue.svg" alt="" />
                <p>Moving cities forward</p>
                <p>Helping to improve public transportation and access to care for those in need.</p>
            </div>
            <div className="col-md-4">
                <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_60,h_60/v1597307081/assets/00/ff132e-ee33-497f-85a4-ce4a7d66f1da/original/presentation_graph-blue.svg" alt="" />
                <p>Helping businesses move ahead</p>
                <p>See how Uber Freight and Uber for Business help organizations across the world.</p>
            </div>
            <div className="col-md-4">
                <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_60,h_60/v1640277747/assets/e9/f8d182-85c3-4ccb-958b-b814afd7689a/original/Group-%283%29.svg" alt="" />
                <p>Same-day delivery</p>
                <p>An easy delivery solution that allows people to send items the same day.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default products
