import React from "react";
import "./Schedule.css";

const Schedule = () => {
  // Data for the schedule table
  const scheduleData = [
    { day: "Samedi", date: "16/08"},
    { day: "Dimanche", date: "17/08"},
    { day: "Lundi", date: "18/08"},
    { day: "Mardi", date: "19/08"},
    { day: "Mercredi", date: "20/08"},
  ];

  // Time slot data
  const timeSlots = {
    morning: [ {time: "09:00" , taked: false}, {time: "09:30" , taked: true}, {time: "10:00" , taked: false}, {time: "10:30" , taked: false}, {time: "11:00" , taked: true}, {time: "11:30" , taked: false}],
    afternoon: [ {time: "13:00" , taked: false}, {time: "13:30" , taked: false}, {time: "14:00" , taked: true}, {time: "14:30" , taked: false}],
    evening: [ {time: "15:00" , taked: false}, {time: "15:30" , taked: false}, {time: "16:00" , taked: false}, {time: "16:30" , taked: false}],
  };

  // State for selected time period
  const [selectedPeriod, setSelectedPeriod] = React.useState("morning");

  const handlePeriodSelect = (period) => {
    setSelectedPeriod(period);
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
        <div 
          className={`header-cell ${selectedPeriod === 'morning' ? 'selected' : ''}`}
          onClick={() => handlePeriodSelect('morning')}
        >
          Matin
        </div>
        <div 
          className={`header-cell ${selectedPeriod === 'afternoon' ? 'selected' : ''}`}
          onClick={() => handlePeriodSelect('afternoon')}
        >
          Apres midi
        </div>
        <div 
          className={`header-cell ${selectedPeriod === 'evening' ? 'selected' : ''}`}
          onClick={() => handlePeriodSelect('evening')}
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
                  className={`time-cell ${slot.taked ? 'taked' : 'available'}`}
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