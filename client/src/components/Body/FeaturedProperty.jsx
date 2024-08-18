import Carousel from "../ui/carousel/Carousel";
import { properties } from "../../data/properties";
import "./FeaturedProperty.css";

const FeaturedProperty = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "17%",
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
  };

  return (
    <div className="featured-property-carousel">
      <Carousel settings={settings}>
        {properties.map((property, index) => (
          <div key={index} className="feature-properties">
            <img src={property.images[0]} alt={property.title} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedProperty;
