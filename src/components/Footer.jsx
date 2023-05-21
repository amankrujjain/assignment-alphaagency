import React from 'react'
import footer from '../assets/pics/Vector Smart Object@2x.png'

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className="footer-one">
          <h1>Best solutions from</h1>
          <img src={footer} alt="footer-logo" height='100px' width='300px' />
        </div>
        <div className="footer-two">
          <h3>DOL Max Overlaminate Flims</h3><br/>
          <h3>Why us</h3><br/>
          <h3>Enquire now</h3>

        </div>
        <div className="footer-three">
          <p>Avery Dennison Overlaminate </p><br/>
          <p>Avery Dennison Overlaminate Films</p><br/>
          <p>Avery Dennison Digital Overlaminate Films</p><br/>
          <p>Avery Dennison DOL Max</p><br/>

        </div>
      </div>
      <div className="last">
        <p>© 2023 Avery Dennison Label Packaging Material. All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer