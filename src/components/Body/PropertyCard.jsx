import Carousel from "../ui/carousel/Carousel";
import { CircleChevronRight, CircleChevronLeft, Heart } from "lucide-react";
import "./PropertyCard.css";

const PropertyCard = ({ property }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
  };

  return (
    <div className="card">
      <Heart className="favourite-button card-button" />
      <Carousel
        settings={settings}
        customArrows={{
          left: (
            <CircleChevronLeft className="navigate-button left-arrow card-button" />
          ),
          right: (
            <CircleChevronRight className="navigate-button right-arrow card-button" />
          ),
        }}
      >
        {property.images.map((image, index) => (
          <div key={index} className="image-div">
            <img src={image} alt={`Property ${index}`} />
          </div>
        ))}
      </Carousel>
      <div className="card-details">
        <h2>{property.title}</h2>
        <p>{property.location}</p>
        <p>{property.description}</p>
        <span>
          <strong>{property.price}</strong> per night
        </span>
      </div>
    </div>
  );
};

export default PropertyCard;
