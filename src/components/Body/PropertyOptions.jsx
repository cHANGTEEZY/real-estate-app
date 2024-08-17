import Carousel from "../ui/carousel/Carousel";
import { variety } from "../../data/variety";

import "./PropertyOptions.css";
import { useState } from "react";

const PropertyOptions = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 14,
    slidesToScroll: 14,
    arrows: true,
    draggable: false,
  };

  const [clicked, setClicked] = useState(null);

  function handleClick(clickedIndex) {
    setClicked(clickedIndex);
  }

  return (
    <Carousel settings={settings} className="sliding-card ">
      {variety.map((item, index) => {
        const IconComponent = item.filterIcon;
        return (
          <div
            key={index}
            className={`icon-div ${clicked === index ? "clicked" : ""}`}
            onClick={() => handleClick(index)}
          >
            <IconComponent />
            <div className="sliding-card-title">{item.filterTitle}</div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default PropertyOptions;
