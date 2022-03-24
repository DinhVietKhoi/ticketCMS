import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'
import clock from '../assets/u_clock-three.png'
import '../sass/timeClock.scss'
function TimeCLock() {
  return (
    <div className='timeClock'>
        <div className='timeClock__container'>
            <span>08:00:00</span>
            <img src={clock}></img>
        </div>
    </div>
  )
}

export default TimeCLock