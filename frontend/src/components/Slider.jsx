import React, { useState } from 'react';
import step1 from '../images/step1.jpg';
import step2 from '../images/step2.jpg';
import step3 from '../images/step3.jpg';
import step4 from '../images/step4.jpg';

const steps = [
  {
    imgSrc: step1,
    step: 'STEP 1',
    description: 'Visit our website and create an account.',
  },
  {
    imgSrc: step2,
    step: 'STEP 2',
    description: 'Browse available bikes and select your favorite.',
  },
  {
    imgSrc: step3,
    step: 'STEP 3',
    description: 'Choose your rental dates and complete the booking.',
  },
  {
    imgSrc: step4,
    step: 'STEP 4',
    description: 'Pick up your bike and enjoy the ride!',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % steps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="step-image">
              <img src={step.imgSrc} alt={step.step} />
            </div>
            <div className="step-text">
              <strong>{step.step}</strong>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation-dots">
        {steps.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
      <span className="prev" onClick={prevSlide}>
        ❮
      </span>
      <span className="next" onClick={nextSlide}>
        ❯
      </span>
    </div>
  );
};

export default Slider;
