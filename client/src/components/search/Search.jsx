import "./Search.css";
import { Search } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import DateRangePickerComp from "../ui/Calendar/DateRangePickerComp";
import format from "date-fns/format";
import { addDays } from "date-fns";
import MapCompo from "../../components/ui/Map/Map";
import AddGuest from "../ui/Guest/AddGuest";

export default function SearchComponent() {
  const [locationName, setLocationName] = useState("");
  const [clicked, setClicked] = useState(null);
  const [totalGuest, setTotalGuest] = useState(0);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const searchBarRef = useRef(null);
  const addGuestRef = useRef(null);

  const handleClick = (clickedDiv) => {
    setClicked(clicked === clickedDiv ? null : clickedDiv);
  };

  const handleClose = () => {
    setClicked(null);
  };

  const handleClickOutside = (event) => {
    if (
      searchBarRef.current &&
      !searchBarRef.current.contains(event.target) &&
      addGuestRef.current &&
      !addGuestRef.current.contains(event.target)
    ) {
      setClicked(null);
    }
  };

  const search = () => {
    alert("Working on search functionality");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="search-container">
      <div
        ref={searchBarRef}
        className={`search-bar ${clicked ? "clicked" : ""}`}
      >
        <div
          className={`destination-div search-bar-div ${
            clicked === "destination" ? "clicked" : ""
          }`}
          onClick={() => handleClick("destination")}
        >
          <span className="search-title">Where</span>
          <span className="search-span destination-span">
            {locationName ? locationName : "Search destination"}
          </span>
          {clicked === "destination" ? (
            <div className="map-comp-div">
              <MapCompo setLocationName={setLocationName} />
            </div>
          ) : null}
        </div>
        <div className="book-date-div">
          <div
            className={`checkin-div date-div ${
              clicked === "checkin" ? "clicked" : ""
            }`}
            onClick={() => handleClick("checkin")}
          >
            <span className="search-title">Check in</span>
            <span className="search-span checkin-date-span">
              {format(range[0].startDate, "MM/dd/yyyy")}
            </span>
          </div>
          <div
            className={`checkout-div date-div ${
              clicked === "checkout" ? "clicked" : ""
            }`}
            onClick={() => handleClick("checkout")}
          >
            <span className="search-title">Check out</span>
            <span className="search-span checkout-date-span">
              {format(range[0].endDate, "MM/dd/yyyy")}
            </span>
          </div>
          {clicked === "checkin" || clicked === "checkout" ? (
            <div className="date-picker">
              <DateRangePickerComp
                range={range}
                setRange={setRange}
                onClose={handleClose}
              />
            </div>
          ) : null}
        </div>
        <div
          className={`search-div search-bar-div ${
            clicked === "search-outer-div" ? "clicked" : ""
          }`}
        >
          <div
            className={`search-outer-div`}
            onClick={() => handleClick("search-outer-div")}
          >
            <div className="search-inner-div">
              <span className="search-title">Who</span>
              <span className="search-span add-guest-span">
                {totalGuest === 0 ? "Add guest" : totalGuest + " guests"}
              </span>
            </div>
            <div className={`search-area ${clicked ? "expanded" : ""}`}>
              <Search className="search-icon" />
              <span
                className={`search-text ${clicked ? "clicked" : ""}`}
                onClick={search}
              >
                Search
              </span>
            </div>
          </div>
          {clicked === "search-outer-div" ? (
            <div
              className={`add-guest-div ${
                clicked === "search-outer-div" ? "clicked" : ""
              }`}
              ref={addGuestRef}
            >
              <AddGuest setTotalGuest={setTotalGuest} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
