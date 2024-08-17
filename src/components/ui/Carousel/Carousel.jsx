import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ settings, children, customArrows }) => {
  const sliderRef = useRef(null);

  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      {customArrows && customArrows.left && (
        <div onClick={goToPrevious} className="carousel-arrow left-arrow">
          {customArrows.left}
        </div>
      )}
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
      {customArrows && customArrows.right && (
        <div onClick={goToNext} className="carousel-arrow right-arrow">
          {customArrows.right}
        </div>
      )}
    </>
  );
};

export default Carousel;
