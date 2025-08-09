import React from 'react'
import arrow from "../assets/arrow.png"
import heroimg from "../assets/hero3.png"
import stampimg from "../assets/stamp.png"



const Hero = () => {
  return (
    <div class="hero">
        <div className="flex-wrapper">
          <div className='write-up'>
           <div className="sub-write-up">
             <span>Let’s Eat Healthier</span>

            <img className="stamp" src={stampimg} alt="stamp logo" />

            <h2>Respect Nature,<br />
            <span>Gain Benefits</span></h2>

            <button className='btn'>Contact <img src={arrow} alt="" /></button>
           </div>
        </div>

        <div className='heroimg'>
          <img src={heroimg} alt=""/>
        </div>
        </div>
    </div>
  )
}

export default Hero