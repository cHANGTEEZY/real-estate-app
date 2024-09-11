import { useParams } from "react-router-dom";
import { properties } from "../../data/properties";
import "./PropertyDetails.css";
import Breadcrumb from "../../components/ui/BreadCrumb/BreadCrumb";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="property-details">
      <Breadcrumb />
      <h1>{property.title}</h1>
      <div className="property-images">
        {property.images.map((image, index) => (
          <img key={index} src={image} alt={`Property ${index}`} />
        ))}
      </div>
      <div className="property-info">
        <p>{property.location}</p>
        <p>{property.description}</p>
        <span>
          <strong>{property.price}</strong> per night
        </span>
      </div>
    </div>
  );
};

export default PropertyDetails;
