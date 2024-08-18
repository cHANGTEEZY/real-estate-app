import "./Search.css";
import { Search } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function SearchComponent() {
  const [clicked, setClicked] = useState(null);
  const searchBarRef = useRef(null);

  function handleClick(clickedDiv) {
    setClicked(clickedDiv);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setClicked(null);
      }
    }

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
            Search destination
          </span>
        </div>
        <div
          className={`checkin-div search-bar-div ${
            clicked === "checking" ? "clicked" : ""
          }`}
          onClick={() => handleClick("checking")}
        >
          <span className="search-title">Check in</span>
          <span className="search-span checkin-date-span">Add dates</span>
        </div>
        <div
          className={`checkout-div search-bar-div ${
            clicked === "checkout" ? "clicked" : ""
          }`}
          onClick={() => handleClick("checkout")}
        >
          <span className="search-title">Check out</span>
          <span className="search-span checkout-date-span">Add dates</span>
        </div>
        <div
          className={`search-div search-bar-div ${
            clicked === "search" ? "clicked" : ""
          }`}
          onClick={() => handleClick("search")}
        >
          <div className="search-outer-div">
            <div className="search-inner-div">
              <span className="search-title">Who</span>
              <span className="search-span add-guest-span">Add guests</span>
            </div>
            <div className={`search-area ${clicked ? "expanded" : ""}`}>
              <Search className="search-icon" />
              <span className={`search-text ${clicked ? "clicked" : ""}`}>
                Search
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
