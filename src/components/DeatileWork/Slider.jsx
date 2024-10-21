// src/components/ImageSlider/ImageSlider.jsx
import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import "./Slider.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <div className="arrow left" onClick={prevSlide}>
        <FaLongArrowAltLeft size={30} /> {/* Using React Icon for left arrow */}
      </div>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <div className="arrow right" onClick={nextSlide}>
        <FaLongArrowAltRight size={30} />
        {/* Using React Icon for right arrow */}
      </div>
    </div>
  );
};

export default ImageSlider;
