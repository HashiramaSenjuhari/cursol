import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <button onClick={handlePrev} className="carousel-button">
        Prev
      </button>
      <img src={images[currentIndex]} alt={`carousel-item-${currentIndex}`} className="carousel-image" />
      <button onClick={handleNext} className="carousel-button">
        Next
      </button>
    </div>
  );
};

export default Carousel;
