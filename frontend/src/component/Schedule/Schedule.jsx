import React from "react";
import "./Schedule.css";

const Schedule = () => {
  // Data for the schedule table
  const scheduleData = [
    { day: "Samedi", date: "16/08", morning: "", afternoon: "", evening: "" },
    { day: "Dimanche", date: "17/08", morning: "", afternoon: "", evening: "" },
    { day: "Lundi", date: "18/08", morning: "", afternoon: "", evening: "" },
    { day: "Mardi", date: "19/08", morning: "", afternoon: "", evening: "" },
    { day: "Mercredi", date: "20/08", morning: "", afternoon: "", evening: "" },
  ];

  // Time slot data
  const timeSlots = {
    morning: "10:45",
    afternoon: "",
    evening: "12:00",
  };

  return (
    <div className="schedule-container">
      {/* Left navigation arrow */}
      <div className="nav-arrow left-arrow">
        <button className="cursor-pointer">
          <i className="fa-solid fa-angle-left"></i>
        </button>
      </div>
      
      {/* Right navigation arrow */}
      <div className="nav-arrow right-arrow">
        <button className="cursor-pointer">
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
      <div className="schedule-header">
        <div className="header-cell">Matin</div>
        <div className="header-cell">Apres midi</div>
        <div className="header-cell">Soiree</div>
      </div>

      <div className="schedule-body">
        <div className="schedule-row">
        {scheduleData.map((row, index) => (
          
            <div className="row-header" key={index}>
              <div className="day">{row.day}</div>
              <div className="date">{row.date}</div>
            </div>
          
        ))}

        <div className="time-cell">11</div>

        <div className="time-cell"></div>

        <div className="time-cell"></div>

        <div className="time-cell"></div>

        <div className="time-cell"></div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
