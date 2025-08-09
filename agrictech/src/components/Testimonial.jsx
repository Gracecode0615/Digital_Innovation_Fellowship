import React, { useState } from 'react';
// import leftArrow from '../assets/lefticon.png;
import rightArrow from '../assets/rightIcon.png';

import '../styles/Testimonial.css';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
      author: "Stephen Walsh",
      rating: 4.5,
    },
    // Add more testimonials as needed
  ];

  const handlePrev = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));

  return (
    <section className="Testimonial-section">
      <span className="sub-title">Testimonials</span>
      <div className="flex-wrap">
        <div className="title">
        <h2>What Our Clients Say About Us</h2>
        <br />
        <div className="arrow">
          <span className="arrow-box" onClick={handlePrev}> 
            {/* <img src={leftArrow} alt="Previous" /> */}
          </span>
          <span className="arrow-box" onClick={handleNext}>
            <img src={rightArrow} alt="Next" />
          </span>
        </div>
      </div>
      <div className="testimonial-content">
        <p className='quote'>{testimonials[currentIndex].quote}</p>
        <div className="author">
          
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} />
          <span>{testimonials[currentIndex].author}</span>
          <span>Rating: {testimonials[currentIndex].rating} ★</span>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonial;