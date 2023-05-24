import React from 'react'
import Content from './Content'
import {BsArrowRight} from 'react-icons/bs'

function MidSection() {
  return (
    <>
    <div className='mid-section'>
      <div className="content">
        <h1>DOL Max Overlaminate Films</h1><br/>
        <p>Printed graphics deserve maximum protection, DOL <br/> Max is the solution.</p><br/>
        <ul>
          <h2>Features & Benefits</h2><br/>
          <li>Premium vertical durability of up to 7 years and up to 2 years horizontal <br/> durability protection.</li><br/>
          <li>The high gloss finish enhances the appearance of graphics and adds a <br/> special touch to help your graphics stand out.</li><br/>
          <li>Our digital overlaminates can be used on a variety of substrates,<br/> including banners, vehicle graphics, outdoor signage, and more.</li><br/>
        </ul>
      </div>
      <button className='btn'> <a href='#container'>Inquire Now <span className='arrow'><BsArrowRight/></span></a></button>
    </div>
    <Content/>
    </>
  )
}

export default MidSection