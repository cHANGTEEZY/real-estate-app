import Breadcrumb from "../../components/ui/BreadCrumb/BreadCrumb";
import Header from "../../components/Header/Header";
import "./Booking.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Booking({ isAuthenticated, setIsAuthenticated }) {
  const [isBooked, setIsBooked] = useState();
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(`/${link}`);
  };

  return (
    <>
      <Header
        showPropertyOptions={false}
        showSearch={false}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <section className="booking-component-container">
        <Breadcrumb />
        <div className="booking-component-header">
          <h1>Booking</h1>
        </div>
        <div className="booking-content-container">
          {!isBooked ? (
            <>
              <div className="booking-data">
                <h2>No trips booked...yet!</h2>
                <p>
                  Time to dust off your bags and start planning your next
                  adventure
                </p>
                <button onClick={() => handleNavigate("")}>
                  Start Searching
                </button>
              </div>
              <p className="cant-find-booking">
                Can't find your reservation here?{" "}
                <span> Visit the Help Center </span>
              </p>
            </>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
}
