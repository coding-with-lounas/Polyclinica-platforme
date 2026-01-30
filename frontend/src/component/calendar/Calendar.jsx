import React from "react";

import "./Calendar.css";

function Calendar() {
  return (
    <div class="calendar-container">
        <div class="calendar-header">
            <div className="flex items-start gap-2">
            <div class="month-year">July 2025</div>
            <div>
            <button className="ml-2 mt-1"><i class="fa-solid fa-caret-down"></i></button>
            </div>
            <div className="ml-36">
            <button className="cursor-pointer"><i class="fa-solid fa-angle-left"></i></button>
            <button className="ml-2 cursor-pointer"><i class="fa-solid fa-angle-right"></i></button>
            </div>
            </div>

            
            <div class="weekdays">
                <div class="weekday">Mo</div>
                <div class="weekday">Tu</div>
                <div class="weekday">We</div>
                <div class="weekday">Th</div>
                <div class="weekday">Fr</div>
                <div class="weekday">Sa</div>
                <div class="weekday">Su</div>
            </div>
        </div>

        <div class="calendar-grid">

            <div class="calendar-day other-month">26</div>
            <div class="calendar-day other-month">27</div>
            <div class="calendar-day other-month">28</div>
            <div class="calendar-day other-month">29</div>
            <div class="calendar-day other-month">30</div>
            <div class="calendar-day">1</div>
            <div class="calendar-day">2</div>
            
            
            <div class="calendar-day">3</div>
            <div class="calendar-day">4</div>
            <div class="calendar-day">5</div>
            <div class="calendar-day">6</div>
            <div class="calendar-day">7</div>
            <div class="calendar-day">8</div>
            <div class="calendar-day">9</div>
            
            
            <div class="calendar-day">10</div>
            <div class="calendar-day">11</div>
            <div class="calendar-day">12</div>
            <div class="calendar-day">13</div>
            <div class="calendar-day">14</div>
            <div class="calendar-day">15</div>
            <div class="calendar-day">16</div>
            
            
            <div class="calendar-day">17</div>
            <div class="calendar-day">18</div>
            <div class="calendar-day">19</div>
            <div class="calendar-day">20</div>
            <div class="calendar-day">21</div>
            <div class="calendar-day">22</div>
            <div class="calendar-day">23</div>
            
            
            <div class="calendar-day">24</div>
            <div class="calendar-day">25</div>
            <div class="calendar-day">26</div>
            <div class="calendar-day">27</div>
            <div class="calendar-day">28</div>
            <div class="calendar-day">29</div>
            <div class="calendar-day">30</div>
            
            
            <div class="calendar-day">31</div>
            <div class="calendar-day other-month">1</div>
            <div class="calendar-day other-month">2</div>
            <div class="calendar-day other-month">3</div>
            <div class="calendar-day other-month">4</div>
            <div class="calendar-day other-month">5</div>
            <div class="calendar-day other-month">6</div>
        </div>

        <div class="calendar-actions">
            <button class="calendar-btn cancel-btn">Cancel</button>
            <button class="calendar-btn confirm-btn">Confirmer</button>
        </div>
    </div>
  );
}

export default Calendar;
