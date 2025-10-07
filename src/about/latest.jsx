import React from 'react'

const latest = () => {
  return (
    <div>
      <p>Keep up with the latest</p>
      <div className="container">
        <div className="row">
            <div className="col-md-4">
                <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_30,h_30/v1542255691/assets/85/aa54ca-6b5b-48d7-82ac-20657ec53f51/original/megaphone-outlined.svg" alt="" />
                <p>Newsroom</p>
                <p>Get announcements about partnerships, app updates, initiatives, and more near you and around the world.</p>
            </div>
            <div className="col-md-4">
                <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_30,h_30/v1542250072/assets/b8/ea1bfc-215a-4246-97f2-a7ac03cd67bd/original/person_group-filled.svg" alt="" />
                <p>Blog</p>
                <p>Find new places to explore and learn about Uber products, partnerships, and more.</p>
            </div>
            <div className="col-md-4">
                <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_30,h_30/v1542249793/assets/34/131a8c-392f-44a9-9745-3b8c110502f5/original/network-filled.svg" alt="" />
                <p>Investor relations</p>
                <p>Download financial reports, see next-quarter plans, and read about our corporate responsibility initiatives.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default latest
