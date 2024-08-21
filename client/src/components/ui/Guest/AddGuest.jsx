import { addGuest } from "../../../data/addGuest";
import Counter from "../Counter/Counter";
import "./AddGuest.css";

export default function AddGuest() {
  return (
    <div className="add-guest-container">
      {addGuest.map((guest, index) => {
        return (
          <div key={index} className="add-guest-item">
            <div className="guest-div">
              <span className="guest-title">{guest.title}</span>
              <span className="guest-age-range">{guest.ageRange}</span>
            </div>
            <div className="guest-counter">
              <Counter counterRange={guest.guestQuantity} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
