import React, { useState, useEffect } from "react";
import "./NumberSlider.css";

const NumberSlider = () => {
  const [value, setValue] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [price, setPrice] = useState("");
  const [key, setKey] = useState(0);

  const handleChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    setPrice((value * 4000).toString());
    setKey((prev) => prev + 1);
  }, [value]);

  return (
    <div className="number-slider-container">
      <div className="price-calculator">
        <p>RS</p>
        {price.split("").map((item, index) => (
          <span
            key={`${key}-${index}`}
            className={`price-digit ${
              index % 2 === 0 ? "animate-from-top" : "animate-from-bottom"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="drag-slider-info">
        {isDragging ? (
          <div
            className="drag-slider"
            style={{
              left: `calc(${(value / 30) * 100}% )`,
            }}
          >
            <button>{value} nights</button>
          </div>
        ) : (
          <p className="drag-slider-p">
            <span>{value} nights </span>at an estimated Rs 4000 a night
          </p>
        )}
      </div>
      <input
        type="range"
        min="1"
        max="30"
        value={value}
        onChange={handleChange}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="cost-estimate-slider"
        style={{
          background: `linear-gradient(to right, black 0%, black ${
            (value / 30) * 100
          }%, rgb(221,221,221) ${(value / 30) * 100}%, rgb(221,221,221) 100%)`,
        }}
      />
    </div>
  );
};

export default NumberSlider;
