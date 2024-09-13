import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/ui/BreadCrumb/BreadCrumb";
import NumberSlider from "../../components/ui/Slider/numberSlider";
import Faq from "react-faq-component";
import { faqData, nestifySetupDescription } from "../../constants";
import { beachHouse, nestifySetupPeople } from "../../assets/Index.js";

import "./Hosting.css";

export default function Hosting({ isAuthenticated, setIsAuthenticated }) {
  return (
    <>
      <Header
        showPropertyOptions={false}
        showSearch={false}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        className="hosting-header"
      />

      <section className="hosting-component-container">
        <Breadcrumb />
        <div className="hosting-component-hero-section">
          <div className="hosting-component-hero-left-side">
            <div className="hosting-component-container-header">
              <h1>Nestify it</h1>
              <p>You could earn</p>
            </div>
            <NumberSlider />
          </div>

          <div className="hosting-component-hero-right-side">
            <img src={beachHouse} alt="beach-house-image" />
          </div>
        </div>
        <div className="nestify-setup-description">
          <h1 className="nestify-setup-title">
            Nestify it easily with Nestify Setup
          </h1>
          <img
            src={nestifySetupPeople}
            alt="nestify-image"
            className="nestify-setup-image"
          />
          <div className="nestify-setup-description-grid-section">
            {nestifySetupDescription.map((item, index) => (
              <div key={index} className="nestify-setup-description-item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="hosting-faq">
        <div className="faq-container">
          <div className="faq-title">
            <h2>Your questions, answered</h2>
          </div>
          <div className="faqs faq-background">
            <Faq data={faqData} styles={faqData.styles} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
