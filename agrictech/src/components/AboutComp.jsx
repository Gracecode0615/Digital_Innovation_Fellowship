import React from 'react'
import AboutImg from '../assets/about-img.png'
import tick from '../assets/tick.png';
import arrow from "../assets/arrow.png"


const AboutComp = () => {
  return (
    <section className='About'>
      <div className='flex-wrapper'>
        <div className="col">
          <img src={AboutImg} alt="a man and his tomatoes" />
        </div>
        <div className="col">
            <p className='sub-about'>About Us</p>
            <h2 className='title' >We’re Best Agriculture & <br/> Organic Farms</h2>

            <p>There are many variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or randomised words
            which don't look even.</p>

            <ul className='About-list'>
              <div>
                  <li><img src={tick} alt=""/>Garlic Farming</li>

                <li><img src={tick} alt=""/>Lavender Farming</li>

                <li><img src={tick} alt=""/>Gourmet Mushrooms</li>
              </div>

             <div>
               <li><img src={tick} alt=""/>Fertilizer Distribution</li>

              <li><img src={tick} alt=""/>Poultry Farming</li>

              <li><img src={tick} alt=""/>Organic Fertilizer</li>
             </div>
             
            </ul>

             <button className='btn'>Know more <img src={arrow} alt="" /></button>
        </div>
      </div>
      
    </section>
  )
}

export default AboutComp