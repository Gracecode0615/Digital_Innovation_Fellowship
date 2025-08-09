import React from 'react'
import SupportIcon1 from '../assets/Icon(1).png'
import SupportIcon2 from '../assets/Icon(1).png'
import SupportIcon3 from '../assets/Icon(1).png'
import SupportIcon4 from '../assets/Icon(1).png'
const Support = () => {
  return (
    <section className='support'>
      <div className='flex-wrapper'>
        <div class="col">
          <div className="icon-img">
          <img src={SupportIcon1} alt="icon" />
          </div>

          <div className='write-up'>
            <h2>Member Discount</h2>
            <p>Back guarantee under 7 days</p>
          </div>
        </div>
        <div class="col">
          <div className="icon-img">
          <img src={SupportIcon1} alt="icon" />
          </div>

          <div className='write-up'>
            <h2>Money Return</h2>
            <p>Back guarantee under 7 days</p>

          </div>
        </div>

        <div class="col">
          <div className="icon-img">
          <img src={SupportIcon1} alt="icon" />
          </div>

          <div className='write-up'>
            <h2>Free Shipping</h2>
            <p>Back guarantee under 7 days</p>

          </div>
        </div>

        <div class="col">
          <div className="icon-img">
          <img src={SupportIcon1} alt="icon" />
          </div>

          <div className='write-up'>
            <h2>Online Support</h2>
            <p>Back guarantee under 7 days</p>

          </div>
        </div>
       
      </div>

    </section>
  )
}

export default Support