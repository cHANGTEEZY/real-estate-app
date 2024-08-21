import { useState } from "react";
import "./Counter.css";
import { Plus, Minus } from "lucide-react";

export default function Counter({ counterRange, setTotalGuest }) {
  const [counter, setCounter] = useState(0);
  const [isDecrementDisabled, setIsDecrementDisabled] = useState(true);
  const [isIncrementDisabled, setIsIncrementDisabled] = useState(false);

  function counterDecrement() {
    if (counter > 0) {
      setCounter((prevValue) => prevValue - 1);
      setTotalGuest((prevTotal) => prevTotal - 1);
    }
    if (counter <= 1) {
      setIsDecrementDisabled(true);
    }
    setIsIncrementDisabled(false);
  }

  function counterIncrement() {
    if (counter < counterRange) {
      setCounter((prevValue) => prevValue + 1);
      setTotalGuest((prevTotal) => prevTotal + 1);
    }
    if (counter === counterRange - 1) {
      setIsIncrementDisabled(true);
    }
    setIsDecrementDisabled(false);
  }

  return (
    <div className="counter-container">
      <button
        className={`decrementor counter-button ${
          isDecrementDisabled ? "disabled" : ""
        }`}
        onClick={counterDecrement}
        disabled={isDecrementDisabled}
      >
        <Minus />
      </button>
      <span className="counter">{counter}</span>
      <button
        className={`incrementor counter-button ${
          isIncrementDisabled ? "disabled" : ""
        }`}
        onClick={counterIncrement}
        disabled={isIncrementDisabled}
      >
        <Plus />
      </button>
    </div>
  );
}
