import React, { useState, useEffect } from "react";
import "./Schedule.css";
import { takedTimes } from "./mocks";

const Schedule = () => {
  const [scheduleData, setScheduleData] = useState([]); // Fixed variable name from nextFiveDays to scheduleData
  const [selectedPeriod, setSelectedPeriod] = useState("morning");
  const [currentStartIndex, setCurrentStartIndex] = useState(0); // To track which 5 days we're showing

  const getNextFiveDays = (startFromIndex = 0) => {
    const days = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];
    const today = new Date();
    const tempArray = [];

    let count = 0; // Counter for valid weekdays added
    let dayOffset = startFromIndex; // Starting offset

    while (count < 5) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + dayOffset);

      const dayOfWeek = nextDate.getDay();

      // Skip Friday (5) and Saturday (6)
      if (dayOfWeek !== 5 && dayOfWeek !== 6) {
        const dayName = days[dayOfWeek];
        const dateString = `${String(nextDate.getDate()).padStart(2, "0")}/${String(nextDate.getMonth() + 1).padStart(2, "0")}/${nextDate.getFullYear()}`;

        tempArray.push({
          day: dayName,
          date: dateString,
          fullDate: new Date(nextDate),
          isToday: dayOffset === 0,
          isPast: dayOffset < 0,
          originalOffset: dayOffset, // Keep track of original offset for reference
        });

        count++; // Increment only for valid weekdays
      }

      dayOffset++; // Always increment to check next day
    }

    setScheduleData(tempArray);
  };

  const isTimeSlotTaken = (dateString, timeString) => {
    return takedTimes.some(
      (obj) => obj.date === dateString && obj.time === timeString,
    );
  };

  // Initialize with first 5 days
  useEffect(() => {
    getNextFiveDays(0);
  }, []);

  const handleLeftArrow = () => {
    if (currentStartIndex - 5 >= 0) {
      // Prevent going to negative days
      const newStartIndex = currentStartIndex - 5;
      setCurrentStartIndex(newStartIndex);
      getNextFiveDays(newStartIndex);
    }
  };

  const handleRightArrow = () => {
    const newStartIndex = currentStartIndex + 5;
    setCurrentStartIndex(newStartIndex);
    getNextFiveDays(newStartIndex);
  };

  // Time slot data - moved after state declarations
  const timeSlots = {
    morning: [
      { time: "09:00", taked: false },
      { time: "09:30", taked: true },
      { time: "10:00", taked: false },
      { time: "10:30", taked: false },
      { time: "11:00", taked: true },
      { time: "11:30", taked: false },
    ],
    afternoon: [
      { time: "13:00", taked: false },
      { time: "13:30", taked: false },
      { time: "14:00", taked: true },
      { time: "14:30", taked: false },
    ],
    evening: [
      { time: "15:00", taked: false },
      { time: "15:30", taked: false },
      { time: "16:00", taked: false },
      { time: "16:30", taked: false },
    ],
  };

  const handlePeriodSelect = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <div className="schedule-container">
      {/* Left navigation arrow */}
      <div className="nav-arrow left-arrow">
        <button className="cursor-pointer" onClick={handleLeftArrow}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
      </div>

      {/* Right navigation arrow */}
      <div className="nav-arrow right-arrow">
        <button className="cursor-pointer" onClick={handleRightArrow}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>

      <div className="schedule-header">
        <div
          className={`header-cell ${selectedPeriod === "morning" ? "selected" : ""}`}
          onClick={() => handlePeriodSelect("morning")}
        >
          Matin
        </div>
        <div
          className={`header-cell ${selectedPeriod === "afternoon" ? "selected" : ""}`}
          onClick={() => handlePeriodSelect("afternoon")}
        >
          Apres midi
        </div>
        <div
          className={`header-cell ${selectedPeriod === "evening" ? "selected" : ""}`}
          onClick={() => handlePeriodSelect("evening")}
        >
          Soiree
        </div>
      </div>

      <div className="schedule-body">
        <div className="schedule-row">
          {/* Day headers */}
          {scheduleData.map((row, index) => (
            <div className="row-header" key={index}>
              <div className="day">{row.day}</div>
              <div className="date">{row.date}</div>
            </div>
          ))}

          {/* Time slots for each day based on selected period */}
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex} className="time-slots-column">
              {timeSlots[selectedPeriod].map((slot, slotIndex) => (
                <div
                  key={slotIndex}
                  className={`time-cell ${isTimeSlotTaken(day.date, slot.time) ? "taked" : "available"}`}
                >
                  {slot.time}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
