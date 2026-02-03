import React, { useState, useEffect, useContext } from "react";
import { takedTimes } from "./mocks";
import { AppContext } from "../../context/appContext";

const Schedule = () => {
  const { handleSchedule, updateSelectedAppointment } = useContext(AppContext);
  
  const [scheduleData, setScheduleData] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState("morning");
  const [currentStartIndex, setCurrentStartIndex] = useState(0);

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

    let count = 0;
    let dayOffset = startFromIndex;

    while (count < 5) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + dayOffset);

      const dayOfWeek = nextDate.getDay();

      if (dayOfWeek !== 5 && dayOfWeek !== 6) {
        const dayName = days[dayOfWeek];
        const dateString = `${String(nextDate.getDate()).padStart(2, "0")}/${String(nextDate.getMonth() + 1).padStart(2, "0")}/${nextDate.getFullYear()}`;

        tempArray.push({
          day: dayName,
          date: dateString,
          fullDate: new Date(nextDate),
          isToday: dayOffset === 0,
          isPast: dayOffset < 0,
          originalOffset: dayOffset,
        });

        count++;
      }

      dayOffset++;
    }

    setScheduleData(tempArray);
  };

  const isTimeSlotTaken = (dateString, timeString) => {
    return takedTimes.some(
      (obj) => obj.date === dateString && obj.time === timeString,
    );
  };

  const handleTimeSlotClick = (day, time) => {
    if (!isTimeSlotTaken(day.date, time) && !day.isPast) {
      const formattedDateTime = `${day.date} à ${time}`;
      
      const appointment = {
        date: day.date,
        time: time,
        formatted: formattedDateTime
      };
      
      updateSelectedAppointment(appointment);
      handleSchedule();
      
      console.log(`Rendez-vous sélectionné: ${formattedDateTime}`);
    }
  };

  useEffect(() => {
    getNextFiveDays(0);
  }, []);

  const handleLeftArrow = () => {
    if (currentStartIndex - 5 >= 0) {
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

  const timeSlots = {
    morning: [
      { time: "09:00" },
      { time: "09:30" },
      { time: "10:00" },
      { time: "10:30" },
      { time: "11:00" },
      { time: "11:30" },
    ],
    afternoon: [
      { time: "13:00" },
      { time: "13:30" },
      { time: "14:00" },
      { time: "14:30" },
    ],
    evening: [
      { time: "15:00" },
      { time: "15:30" },
      { time: "16:00" },
      { time: "16:30" },
    ],
  };

  const handlePeriodSelect = (period) => {
    setSelectedPeriod(period);
  };

  // Calculate number of rows based on selected period
  const timeSlotsCount = timeSlots[selectedPeriod].length;

  return (
    <div className="fixed top-1/3 z-2000 w-[475px] h-[300px] rounded-2xl p-4 bg-white shadow-lg flex flex-col items-center">
      {/* Navigation Arrows */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <button className="cursor-pointer p-2" onClick={handleLeftArrow}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <button className="cursor-pointer p-2" onClick={handleRightArrow}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>

      {/* Period Selection Header */}
      <div className="flex justify-around items-center w-full font-semibold text-slate-800 border-b border-gray-300 pb-3 mb-3">
        <div
          className={`text-center text-sm px-3 py-1 border-2 border-black rounded-md transition-all ${
            selectedPeriod === "morning" 
              ? "bg-[#0FDCBC] text-white border-none" 
              : "hover:bg-[rgba(15,220,188,0.7)] hover:text-white hover:border-none"
          } cursor-pointer`}
          onClick={() => handlePeriodSelect("morning")}
        >
          Matin
        </div>
        <div
          className={`text-center text-sm px-3 py-1 border-2 border-black rounded-md transition-all ${
            selectedPeriod === "afternoon" 
              ? "bg-[#0FDCBC] text-white border-none" 
              : "hover:bg-[rgba(15,220,188,0.7)] hover:text-white hover:border-none"
          } cursor-pointer`}
          onClick={() => handlePeriodSelect("afternoon")}
        >
          Apres midi
        </div>
        <div
          className={`text-center text-sm px-3 py-1 border-2 border-black rounded-md transition-all ${
            selectedPeriod === "evening" 
              ? "bg-[#0FDCBC] text-white border-none" 
              : "hover:bg-[rgba(15,220,188,0.7)] hover:text-white hover:border-none"
          } cursor-pointer`}
          onClick={() => handlePeriodSelect("evening")}
        >
          Soiree
        </div>
      </div>

      {/* Schedule Body */}
      <div className="w-full overflow-hidden">
        <div 
          className="grid gap-3 bg-white"
          style={{
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: `auto repeat(${timeSlotsCount}, 32px)`
          }}
        >
          {/* Day Headers */}
          {scheduleData.map((row, index) => (
            <div 
              className="flex flex-col items-center justify-center p-1" 
              key={index}
            >
              <div className="font-semibold text-sm text-slate-800">{row.day}</div>
              <div className="text-xs text-gray-600 mt-0.5">{row.date}</div>
            </div>
          ))}

          {/* Time Slots */}
          {scheduleData.map((day, dayIndex) => (
            <div 
              key={dayIndex} 
              className="flex flex-col items-center gap-1"
              style={{ gridRow: `2 / span ${timeSlotsCount}` }}
            >
              {timeSlots[selectedPeriod].map((slot, slotIndex) => {
                const isTaken = isTimeSlotTaken(day.date, slot.time);
                const isAvailable = !isTaken && !day.isPast;
                
                return (
                  <div
                    key={slotIndex}
                    className={`flex items-center justify-center h-5 w-16 rounded-full text-xs font-bold text-slate-800 transition-colors ${
                      isTaken 
                        ? "bg-black text-white hover:bg-black hover:cursor-not-allowed" 
                        : isAvailable 
                          ? "bg-gray-100 hover:bg-[#0FDCBC] hover:text-white cursor-pointer" 
                          : "bg-gray-50 text-gray-400 cursor-not-allowed"
                    }`}
                    onClick={() => isAvailable && handleTimeSlotClick(day, slot.time)}
                  >
                    {slot.time}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;