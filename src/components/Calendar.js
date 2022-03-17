import React from 'react'
import '../sass/calendar.scss'
import calendar from '../assets/fi_calendar.png'
function Calendar() {
  return (
    <div className="calendar">
      <div className='calendar__btn'>
        <span> Tháng 4, 2021</span>
        <img src={calendar}></img>
      </div>
    </div>
  )
}

export default Calendar