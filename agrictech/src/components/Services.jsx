import React from 'react'
import Agriculture from '../assets/Agriculture.png';
import Farming from '../assets/Farming.png';
import Organic from '../assets/Organic.png';
import Vegetables from '../assets/Vegetables.png';
import Star from '../assets/Star.png';


const Services = () => {
  return (
     <div className='services'>
      <div className="flex-wrapper">
        <img className='header' src={Agriculture} alt="" />
        <img src={Star} alt="" />
        <img className='header' src={Farming} alt="" />
        <img src={Star} alt="" />
        <img className='header' src={Organic} alt="" />
        <img src={Star} alt="" />
        <img  className='header' src={Vegetables} alt="" />
      </div>
    </div>
  )
}

export default Services