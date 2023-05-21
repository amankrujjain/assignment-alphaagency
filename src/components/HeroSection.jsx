import React from 'react'
import '../index.css'
import logo from '../assets/pics/Asset 3@4x-8@2x.png'
import { CiMedal } from 'react-icons/ci'
import {BiShield} from 'react-icons/bi'
import { BsWindowFullscreen} from 'react-icons/bs'

import MidSection from './MidSection'
import Form from './Form'

function HeroSection() {
  return (
    <>
      <div className='hero-section'>
        <div className="division-one">
          <div className='image'>
            <img src={logo} />
          </div>
          <div className="bold-text">
            <h4>Take your graphics protection to the next level with DOL Max overlaminates</h4>
          </div>
          <div className="light-text">
            <p>Pair with MPI 1105 wrapping film for ramped up protection</p>
          </div>
          <div className="svg-icons">
            <div className="split">
              <div className="first-col">
                <CiMedal className='one' />
              </div>
              <div className='text-one'>
                <p>Maximum <br /> Durability</p>
              </div>
            </div>
            <div className="split">
              <div className="first-col">
                <BiShield className='one' />
              </div>
              <div className='text-one'>
                <p>Enhanced<br /> Appearance</p>
              </div>
            </div>
            <div className="split">
              <div className="first-col">
                <BsWindowFullscreen className='one' />
              </div>
              <div className='text-one'>
                <p>High Gloss<br /> Finish</p>
              </div>
            </div>
          </div>
            <Form/>
        </div>
        <div className="division-two">

        </div>
      </div>
      <MidSection />
    </>
  )
}

export default HeroSection