import React, { useEffect, useState } from 'react'
import Calendar from '../components/Calendar'
import CircleChart from '../components/CircleChart'
import LineChart from '../components/LineChart'
import '../sass/home.scss'
function Home({data}) {
  const [money,setMoney] = useState()
  useEffect(()=>{
    const money = data&&((data[0].length * 90000) + (data[1].length * 20000))
    money&&setMoney(money)
  },[data])
  return (
    <div className='home'>
      <div className='home__container'>
        <h1>Thống kê</h1>
        <div className='home__line'>
          <div className='home__line-top'>
            <h4>Doanh thu</h4>
            <Calendar text='Tháng 4, 2021' right/>
          </div>
          <div className='home__line-body'>
            <LineChart />
          </div>
        </div>
        <div className='home__total'>
          <span className='home__total-sp'>Tổng doanh thu</span>
          <strong className='home__total-st'>{money&&money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}<span className='home__total-sp1'>đồng</span></strong>
        </div>
        <div className='home__pie'>
          <div className='home__pie-top'>
            <Calendar text='Tháng 4, 2021' />
            <div className='home__pie-bottom'>
              <CircleChart dataa={data}/>
            </div>
            {/* <div className='home__pie-bottom'>
              <CircleChart />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

    