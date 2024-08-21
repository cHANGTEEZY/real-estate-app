import { useEffect, useRef } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./DateRangePicker.css";

const DateRangePickerComp = ({ range, setRange, onClose }) => {
  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);

    const today = new Date();
    // const sevenDaysAgo = new Date(today);
    // sevenDaysAgo.setDate(today.getDate() - 6);
    setRange([
      {
        startDate: today,
        endDate: today,
        key: "selection",
      },
    ]);

    return () => {
      document.removeEventListener("keydown", hideOnEscape, true);
      document.removeEventListener("click", hideOnClickOutside, true);
    };
  }, [setRange]);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div ref={refOne} className="calendarWrap" style={{ width: "52rem" }}>
      <DateRangePicker
        onChange={(item) => setRange([item.selection])}
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        ranges={range}
        months={2}
        direction="horizontal"
        className="calendarElement"
        staticRanges={[]}
        inputRanges={[]}
      />
    </div>
  );
};

export default DateRangePickerComp;
