import { properties } from "../../data/properties";
import PropertyOptions from "../../components/Body/PropertyOptions";
import "./Home.css";
import Header from "../../components/Header/Header";
import PropertyCard from "../../components/Body/PropertyCard";
import FeaturedProperty from "../../components/Body/FeaturedProperty";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="variety-icons">
          <PropertyOptions />
        </div>
        <div className="property-cards">
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
        <div className="featured-properties">
          <FeaturedProperty />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
