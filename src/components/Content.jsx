import React from 'react'
import {SlBadge} from 'react-icons/sl'
import {HiOutlineShieldCheck} from 'react-icons/hi'
import {TbMessages} from 'react-icons/tb'
import {MdOutlineLibraryBooks} from 'react-icons/md'
import {BsArrowRight} from 'react-icons/bs'
import Footer from './Footer'

function Content() {
  return (
    <>
    <div className='content-section'>
      <div className="left">

      </div>
      <div className="right">
        <div className="center">
          <div className="heading">
            <h3>Why us?</h3>
          </div>
          <div className="icon-text">
              <div className="icon">
                <SlBadge className='style'/>
              </div>
              <div className="text">
                <p> <b>Quality Products </b> <br/> <br/> Our digital overlaminate films are made from the highest quality <br/> materials and are designed to provide superior protection and appearance to your digital prints.</p>
              </div>
          </div>
          <div className="icon-text">
              <div className="icon">
                <MdOutlineLibraryBooks className='style'/>
              </div>
              <div className="text">
                <p> <b>Quality Products </b> <br/> <br/> Our digital overlaminate films are made from the highest quality <br/> materials and are designed to provide superior protection and appearance to your digital prints.</p>
              </div>
          </div>
          <div className="icon-text">
              <div className="icon">
                <TbMessages className='style'/>
              </div>
              <div className="text">
                <p> <b>Quality Products </b> <br/> <br/> Our digital overlaminate films are made from the highest quality <br/> materials and are designed to provide superior protection and appearance to your digital prints.</p>
              </div>
          </div>
          <div className="icon-text">
              <div className="icon">
                <HiOutlineShieldCheck className='style'/>
              </div>
              <div className="text">
                <p> <b>Quality Products </b> <br/> <br/> Our digital overlaminate films are made from the highest quality <br/> materials and are designed to provide superior protection and appearance to your digital prints.</p>
              </div>
          </div>
        </div>
      <button className='btn-two'> Inquire Now <span className='arrow'><BsArrowRight/></span></button>
      </div>

    </div>

    <Footer/>
    </>
    
  )
}

export default Content