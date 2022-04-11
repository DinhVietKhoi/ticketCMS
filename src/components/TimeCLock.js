import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'
import clock from '../assets/u_clock-three.png'
import '../sass/timeClock.scss'
function TimeCLock({showTime}) {
  return (
    <div className='timeClock'>
        <div className='timeClock__container'>
            <span>{showTime?'08:00:00':'hh:mm:ss'}</span>
            <img src={clock}></img>
        </div>
    </div>
  )
}

export default TimeCLock