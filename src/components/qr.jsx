import React from 'react'

const qr = () => {
  return (
    <div className='qrWrapper'>
        <p className='qrMainPara'>It’s easier in the apps</p>
      <div className="container">
        <div className="row scannerWrapper">
            <div className="col-md-6 scanner1">
                <img className='qrImg' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1690807720/assets/a5/9986ad-0d9f-4396-8539-389bce97f579/original/Final-Download-Uber-App.png" alt="" />
                <div className='qrPara'>
                <p className='para13'>Download the Uber app</p>
                <p className='para14'>Scan to download</p>
                </div>
            </div>
            <div className="col-md-6 scanner2">
                <img className='qrImg' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1690813624/assets/50/e85531-2f7e-4ee7-92d4-e39a6801ee2b/original/QR_https___t.uber.com_download-driver-app.png" alt="" />
                <div className='qrPara'>
                <p className='para13'>Download the Uber app</p>
                <p className='para14'>Scan to download</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default qr
