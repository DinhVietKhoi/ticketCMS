import React from 'react'
import '../sass/calendar.scss'
import calendar from '../assets/fi_calendar.png'
import calendar1 from '../assets/u_calendar-alt.png'
function Calendar({text,disable}) {
  return (
    <div className="calendar">
      <div className='calendar__btn' style={disable&&{background: '#E0E0E0',color:'#A5A8B1', opacity: '1'}}>
        <span> {text}</span>
        {
          <img src={!disable?calendar:calendar1}></img>
        }
      </div>
    </div>
  )
}

export default Calendar