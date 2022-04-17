import dayjs, { Dayjs } from 'dayjs'
import React, { useEffect, useState } from 'react'
import Calendar from '../components/Calendar'
import CircleChart from '../components/CircleChart'
import LineChart from '../components/LineChart'
import '../sass/home.scss'
function Home({data}) {
  const [moneyWeek,setMoneyWeek] = useState()
  const [money,setMoney] = useState()
  const [dateCurrent,setDateCurrent] = useState(dayjs().format(`YYYY/MM/DD`))
  const [firstDate,setFirstDate] = useState()
  const [lastDate,setLasteDate] = useState()
  useEffect(()=>{
    const date = new Date(dateCurrent);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setFirstDate(firstDay);
    setLasteDate(lastDay)
  },[dateCurrent])
  console.log(lastDate)
  console.log(firstDate)
  useEffect(()=>{
    const money = data&&((data[0].length * 90000) + (data[1].length * 20000))
    money&&setMoney(money)
  },[data])
  const handleGetDayJs = (dayACtive,monthACtive,yearACtive)=>{
    setDateCurrent(`${yearACtive}/${monthACtive+1}/${dayACtive}`)
  }
  return (
    <div className='home'>
      <div className='home__container'>
        <h1>Thống kê</h1>
        <div className='home__line'>
          <div className='home__line-top'>
            <h4>Doanh thu</h4>
            <Calendar forWeek right/>
          </div>
          <div className='home__line-body'>
            <LineChart />
          </div>
        </div>
        <div className='home__total'>
          <span className='home__total-sp'>Tổng doanh thu theo tuần</span>
          <strong className='home__total-st'>{money&&money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}<span className='home__total-sp1'>đồng</span></strong>
        </div>
        <div className='home__pie'>
          <div className='home__pie-top'>
            <Calendar forWeek handleGetDayJs={handleGetDayJs}/>
            <div className='home__pie-bottom'>
              <CircleChart dataa={data} firstDate={firstDate} lastDate={lastDate}/>
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

    