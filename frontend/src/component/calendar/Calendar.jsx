import React, { useState, useEffect, useRef } from "react";
import { AppContext } from "../../context/appContext";

function Calendar() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date(2025, 6, 1));
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const { handleCalendar, updateSelectedDate } = React.useContext(AppContext);
  
  const yearDropdownRef = useRef(null);

  const formatDateToFrench = (date) => {
    if (!date) return "";
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (yearDropdownRef.current && !yearDropdownRef.current.contains(event.target)) {
        setShowYearDropdown(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const months = [
    { name: "January", days: 31 },
    { name: "February", days: 28 },
    { name: "March", days: 31 },
    { name: "April", days: 30 },
    { name: "May", days: 31 },
    { name: "June", days: 30 },
    { name: "July", days: 31 },
    { name: "August", days: 31 },
    { name: "September", days: 30 },
    { name: "October", days: 31 },
    { name: "November", days: 30 },
    { name: "December", days: 31 },
  ];

  const years = {
    firstYear: 1980,
    lastYear: new Date().getFullYear(),
  };

  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };

  const getDaysInMonth = (year, month) => {
    if (month === 1) {
      return isLeapYear(year) ? 29 : 28;
    }
    return months[month].days;
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const adjustedFirstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
    
    const prevMonthDays = [];
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    
    for (let i = adjustedFirstDayOfWeek - 1; i >= 0; i--) {
      prevMonthDays.push({
        day: prevMonthLastDay - i,
        isOtherMonth: true,
        date: new Date(year, month - 1, prevMonthLastDay - i)
      });
    }
    
    const currentMonthDays = [];
    const daysInMonth = getDaysInMonth(year, month);
    
    for (let i = 1; i <= daysInMonth; i++) {
      currentMonthDays.push({
        day: i,
        isOtherMonth: false,
        date: new Date(year, month, i)
      });
    }
    
    const nextMonthDays = [];
    const totalCells = 42;
    const remainingCells = totalCells - (prevMonthDays.length + currentMonthDays.length);
    
    for (let i = 1; i <= remainingCells; i++) {
      nextMonthDays.push({
        day: i,
        isOtherMonth: true,
        date: new Date(year, month + 1, i)
      });
    }
    
    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  };

  const handleDayClick = (dayInfo) => {
    let clickedDate;
    
    if (dayInfo.isOtherMonth) {
      clickedDate = new Date(dayInfo.date.getFullYear(), dayInfo.date.getMonth(), dayInfo.date.getDate());
      setCurrentDate(new Date(dayInfo.date.getFullYear(), dayInfo.date.getMonth(), 1));
    } else {
      clickedDate = new Date(dayInfo.date.getFullYear(), dayInfo.date.getMonth(), dayInfo.date.getDate());
    }
    
    setSelectedDay(clickedDate);
  };

  const isDaySelected = (dayInfo) => {
    if (!selectedDay) return false;
    
    return (
      dayInfo.date.getDate() === selectedDay.getDate() &&
      dayInfo.date.getMonth() === selectedDay.getMonth() &&
      dayInfo.date.getFullYear() === selectedDay.getFullYear()
    );
  };

  const isToday = (dayInfo) => {
    const today = new Date();
    return (
      dayInfo.date.getDate() === today.getDate() &&
      dayInfo.date.getMonth() === today.getMonth() &&
      dayInfo.date.getFullYear() === today.getFullYear()
    );
  };

  const handleConfirm = () => {
    if (selectedDay) {
      const formattedDate = formatDateToFrench(selectedDay);
      updateSelectedDate(selectedDay);
      console.log("Date sélectionnée:", formattedDate);
      handleCalendar();
    }
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleYearChange = (year) => {
    setCurrentDate(new Date(year, currentDate.getMonth(), 1));
    setShowYearDropdown(false);
  };

  const handleMonthChange = (monthIndex) => {
    setCurrentDate(new Date(currentDate.getFullYear(), monthIndex, 1));
  };

  const generateYearList = () => {
    const yearList = [];
    for (let year = years.firstYear; year <= years.lastYear; year++) {
      yearList.push(year);
    }
    return yearList.reverse();
  };

  const getCurrentMonthYear = () => {
    const monthName = months[currentDate.getMonth()].name;
    const year = currentDate.getFullYear();
    return `${monthName} ${year}`;
  };

  const calendarDays = generateCalendarDays();
  const yearList = generateYearList();

  return (
    <div className="fixed top-[5%] left-[10%] z-[1000] w-[332px] h-[491.409px] rounded-[15px] opacity-100 p-6 px-4 flex flex-col bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-300">
      <div className="text-start">
        <div className="flex items-center gap-2">
          <div className="relative" ref={yearDropdownRef}>
            <div 
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setShowYearDropdown(!showYearDropdown)}
            >
              <span className="w-27 text-sm text-gray-800 font-semibold text-xl mb-4">{getCurrentMonthYear()}</span>
              <button className="cursor-pointer rounded">
                <i className="fa-solid fa-caret-down"></i>
              </button>
            </div>
            
            {showYearDropdown && (
              <div className="year-dropdown absolute top-full left-1 mt-1 bg-white shadow-lg rounded-lg border border-gray-200 z-50 w-20 max-h-60 overflow-y-auto">
                <div className="grid grid-cols-1 gap-1 p-2">
                  {yearList.map((year) => (
                    <button
                      key={year}
                      className={`year-item p-2 text-xs rounded hover:bg-gray-100 ${
                        year === currentDate.getFullYear() ? 'bg-blue-100 text-blue-600' : ''
                      }`}
                      onClick={() => handleYearChange(year)}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="ml-31 flex gap-2">
            <button 
              className="cursor-pointer p-1 hover:bg-gray-100 rounded"
              onClick={handlePrevMonth}
            >
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button 
              className="cursor-pointer p-1 hover:bg-gray-100 rounded"
              onClick={handleNextMonth}
            >
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          <div className="text-center text-sm font-semibold text-black py-2">Mo</div>
          <div className="text-center text-sm font-semibold text-black py-2">Tu</div>
          <div className="text-center text-sm font-semibold text-black py-2">We</div>
          <div className="text-center text-sm font-semibold text-black py-2">Th</div>
          <div className="text-center text-sm font-semibold text-black py-2">Fr</div>
          <div className="text-center text-sm font-semibold text-black py-2">Sa</div>
          <div className="text-center text-sm font-semibold text-black py-2">Su</div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-0.5">
        {calendarDays.map((dayInfo, index) => {
          const isSelected = isDaySelected(dayInfo);
          const isTodayDay = isToday(dayInfo);
          const isOtherMonth = dayInfo.isOtherMonth;
          
          return (
            <div
              key={index}
              className={`
                text-center py-3 text-sm font-normal text-gray-800 rounded-lg
                transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                border-2 border-white/50
                shadow-[0_1px_2px_rgba(0,0,0,0.05)]
                ${isOtherMonth ? 'text-gray-400 border-gray-100/80' : ''}
                ${isTodayDay && !isSelected ? 'bg-blue-50 text-blue-600 font-medium' : ''}
                ${isSelected ? 
                  'bg-blue-600 text-white border-blue-600 -translate-y-[1px] shadow-[0_4px_12px_rgba(25,118,210,0.3)] font-medium z-10 relative' : 
                  'hover:bg-blue-50 hover:border-blue-600 hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(25,118,210,0.2)] hover:text-blue-600 hover:font-medium hover:z-10 hover:relative cursor-pointer'
                }
                ${isOtherMonth && isSelected ? 'bg-gray-400 text-white border-gray-400' : ''}
                ${isSelected && 'hover:bg-blue-700 hover:border-blue-700 hover:shadow-[0_4px_12px_rgba(21,101,192,0.4)]'}
                ${isOtherMonth && !isSelected ? 'hover:bg-gray-50 hover:border-gray-400 hover:text-gray-600' : ''}
              `}
              onClick={() => handleDayClick(dayInfo)}
            >
              {dayInfo.day}
            </div>
          );
        })}
      </div>

      <div className="flex justify-between gap-4 mt-auto">
        <button
          className="mt-3 flex-1 py-3 rounded-lg border-none text-sm font-medium cursor-pointer
                   bg-gray-100 text-gray-800 border border-gray-300
                   hover:bg-gray-200 transition-all duration-200"
          onClick={() => {
            setSelectedDay(null);
            handleCalendar();
          }}
        >
          Annuler
        </button>
        <button 
          className="mt-3 flex-1 py-3 rounded-lg border-none text-sm font-medium cursor-pointer
                   bg-blue-600 text-white
                   hover:bg-blue-700 transition-all duration-200
                   disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleConfirm}
          disabled={!selectedDay}
        >
          Confirmer
        </button>
      </div>
    </div>
  );
}

export default Calendar;