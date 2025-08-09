import { useState } from 'react';

const slides = [
  '/promo1.jpg', '/promo2.jpg', '/promo3.jpg'
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="hero-slider">
      <img src={slides[current]} alt={`Slide ${current + 1}`} />
      <div className="controls">
        <button onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}>‹</button>
        <button onClick={() => setCurrent((current + 1) % slides.length)}>›</button>
      </div>
    </div>
  );
}
export default HeroSlider;
