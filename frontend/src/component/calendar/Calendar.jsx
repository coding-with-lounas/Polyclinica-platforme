import React, { useState, useEffect, useRef } from "react";
import "./Calendar.css";
import { AppContext } from "../../context/appContext";

function Calendar() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date(2025, 6, 1)); // Juillet 2025 par défaut (mois 6 car 0-indexé)
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const { handleCalendar } = React.useContext(AppContext);
  
  const yearDropdownRef = useRef(null);
  
  // Fermer le dropdown si on clique en dehors
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

  // Vérifier si une année est bissextile
  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };

  // Obtenir le nombre de jours dans un mois donné
  const getDaysInMonth = (year, month) => {
    if (month === 1) { // Février
      return isLeapYear(year) ? 29 : 28;
    }
    return months[month].days;
  };

  // Générer les jours du calendrier pour le mois/année courant
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Premier jour du mois
    const firstDayOfMonth = new Date(year, month, 1);
    // Dernier jour du mois
    const lastDayOfMonth = new Date(year, month + 1, 0);
    // Jour de la semaine du premier jour (0 = Dimanche, 1 = Lundi, etc.)
    const firstDayOfWeek = firstDayOfMonth.getDay();
    // Ajuster pour commencer le lundi (0 = Lundi)
    const adjustedFirstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
    
    // Jours du mois précédent à afficher
    const prevMonthDays = [];
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    
    for (let i = adjustedFirstDayOfWeek - 1; i >= 0; i--) {
      prevMonthDays.push({
        day: prevMonthLastDay - i,
        isOtherMonth: true,
        date: new Date(year, month - 1, prevMonthLastDay - i)
      });
    }
    
    // Jours du mois courant
    const currentMonthDays = [];
    const daysInMonth = getDaysInMonth(year, month);
    
    for (let i = 1; i <= daysInMonth; i++) {
      currentMonthDays.push({
        day: i,
        isOtherMonth: false,
        date: new Date(year, month, i)
      });
    }
    
    // Jours du mois suivant à afficher (pour compléter la grille)
    const nextMonthDays = [];
    const totalCells = 42; // 6 semaines * 7 jours
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

  // Fonction pour gérer le clic sur un jour
  const handleDayClick = (dayInfo) => {
    if (dayInfo.isOtherMonth) {
      // Si on clique sur un jour du mois précédent/suivant, naviguer vers ce mois
      setCurrentDate(new Date(dayInfo.date.getFullYear(), dayInfo.date.getMonth(), 1));
    }
    setSelectedDay(dayInfo.date);
  };

  // Vérifier si un jour est sélectionné
  const isDaySelected = (dayInfo) => {
    if (!selectedDay) return false;
    
    return (
      dayInfo.date.getDate() === selectedDay.getDate() &&
      dayInfo.date.getMonth() === selectedDay.getMonth() &&
      dayInfo.date.getFullYear() === selectedDay.getFullYear()
    );
  };

  // Aller au mois précédent
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Aller au mois suivant
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Changer d'année
  const handleYearChange = (year) => {
    setCurrentDate(new Date(year, currentDate.getMonth(), 1));
    setShowYearDropdown(false);
  };

  // Changer de mois
  const handleMonthChange = (monthIndex) => {
    setCurrentDate(new Date(currentDate.getFullYear(), monthIndex, 1));
  };

  // Générer la liste des années
  const generateYearList = () => {
    const yearList = [];
    for (let year = years.firstYear; year <= years.lastYear; year++) {
      yearList.push(year);
    }
    return yearList.reverse(); // Afficher de la plus récente à la plus ancienne
  };

  // Formater la date actuelle pour l'affichage
  const getCurrentMonthYear = () => {
    const monthName = months[currentDate.getMonth()].name;
    const year = currentDate.getFullYear();
    return `${monthName} ${year}`;
  };

  const calendarDays = generateCalendarDays();
  const yearList = generateYearList();

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="flex items-center gap-2">
          <div className="month-year relative" ref={yearDropdownRef}>
            <div 
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setShowYearDropdown(!showYearDropdown)}
            >
              <span className="w-27 text-sm">{getCurrentMonthYear()}</span>
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

        <div className="weekdays">
          <div className="weekday">Mo</div>
          <div className="weekday">Tu</div>
          <div className="weekday">We</div>
          <div className="weekday">Th</div>
          <div className="weekday">Fr</div>
          <div className="weekday">Sa</div>
          <div className="weekday">Su</div>
        </div>
      </div>

      <div className="calendar-grid">
        {calendarDays.map((dayInfo, index) => (
          <div
            key={index}
            className={`calendar-day ${dayInfo.isOtherMonth ? "other-month" : ""} ${
              isDaySelected(dayInfo) ? "selected" : ""
            }`}
            onClick={() => handleDayClick(dayInfo)}
          >
            {dayInfo.day}
          </div>
        ))}
      </div>

      <div className="calendar-actions">
        <button
          className="calendar-btn cancel-btn"
          onClick={() => {
            setSelectedDay(null);
            handleCalendar();
          }}
        >
          Cancel
        </button>
        <button className="calendar-btn confirm-btn">Confirmer</button>
      </div>
    </div>
  );
}

export default Calendar;