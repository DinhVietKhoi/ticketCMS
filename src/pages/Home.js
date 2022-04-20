import dayjs, { Dayjs } from 'dayjs'
import React, { useEffect, useState } from 'react'
import Calendar from '../components/Calendar'
import CircleChart from '../components/CircleChart'
import LineChart from '../components/LineChart'
import '../sass/home.scss'
function Home({data}) {
  const [firstDate1,setFirstDate1] = useState('')
  const [lastDate1,setLastDate1] = useState('')
  const [t2,setT2] = useState('')
  const [t3,setT3] = useState('')
  const [t4,setT4] = useState('')
  const [t5,setT5] = useState('')
  const [t6,setT6] = useState('')
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
  useEffect(()=>{
    const money = data&&((data[0].length * 90000) + (data[1].length * 20000))
    money&&setMoney(money)
  },[data])
  const handleGetDayJs = (dayACtive,monthACtive,yearACtive)=>{
    setDateCurrent(`${yearACtive}/${monthACtive+1}/${dayACtive}`)
  }
  const handleGetDayJs1 = (dayACtive,monthACtive,yearACtive,firstDate,lastDate,t2,t3,t4,t5,t6,arr)=>{
    if(typeof(firstDate)=='string'){
      setFirstDate1('')
      setLastDate1('')
      setT2('')
      setT3('')
      setT4('')
      setT5('')
      setT6('')
    }
    else{
      setFirstDate1(
        firstDate.getDate()<10&&firstDate.getMonth()+1<10
        ?
        `0${firstDate.getDate()}/0${firstDate.getMonth()+1}/${firstDate.getFullYear()}`
        :
        firstDate.getDate()<10&&firstDate.getMonth()+1>=10
        ?
        `0${firstDate.getDate()}/${firstDate.getMonth()+1}/${firstDate.getFullYear()}`
        :
        firstDate.getDate()>=10&&firstDate.getMonth()+1<10
        ?
        `${firstDate.getDate()}/0${firstDate.getMonth()+1}/${firstDate.getFullYear()}`
        :
        `${firstDate.getDate()}/${firstDate.getMonth()+1}/${firstDate.getFullYear()}`
      )
      setLastDate1(
        lastDate.getDate()<10&&lastDate.getMonth()+1<10
        ?
        `0${lastDate.getDate()}/0${lastDate.getMonth()+1}/${lastDate.getFullYear()}`
        :
        lastDate.getDate()<10&&lastDate.getMonth()+1>=10
        ?
        `0${lastDate.getDate()}/${lastDate.getMonth()+1}/${lastDate.getFullYear()}`
        :
        lastDate.getDate()>=10&&lastDate.getMonth()+1<10
        ?
        `${lastDate.getDate()}/0${lastDate.getMonth()+1}/${lastDate.getFullYear()}`
        :
        `${lastDate.getDate()}/${lastDate.getMonth()+1}/${lastDate.getFullYear()}`
      )
      setT2(
        t2.getDate()<10&&t2.getMonth()+1<10
        ?
        `0${t2.getDate()}/0${t2.getMonth()+1}/${t2.getFullYear()}`
        :
        t2.getDate()<10&&t2.getMonth()+1>=10
        ?
        `0${t2.getDate()}/${t2.getMonth()+1}/${t2.getFullYear()}`
        :
        t2.getDate()>=10&&t2.getMonth()+1<10
        ?
        `${t2.getDate()}/0${t2.getMonth()+1}/${t2.getFullYear()}`
        :
        `${t2.getDate()}/${t2.getMonth()+1}/${t2.getFullYear()}`
      )
      setT3(
        t3.getDate()<10&&t3.getMonth()+1<10
        ?
        `0${t3.getDate()}/0${t3.getMonth()+1}/${t3.getFullYear()}`
        :
        t3.getDate()<10&&t3.getMonth()+1>=10
        ?
        `0${t3.getDate()}/${t3.getMonth()+1}/${t3.getFullYear()}`
        :
        t3.getDate()>=10&&t3.getMonth()+1<10
        ?
        `${t3.getDate()}/0${t3.getMonth()+1}/${t3.getFullYear()}`
        :
        `${t3.getDate()}/${t3.getMonth()+1}/${t3.getFullYear()}`
      )
      setT4(
        t4.getDate()<10&&t4.getMonth()+1<10
        ?
        `0${t4.getDate()}/0${t4.getMonth()+1}/${t4.getFullYear()}`
        :
        t4.getDate()<10&&t4.getMonth()+1>=10
        ?
        `0${t4.getDate()}/${t4.getMonth()+1}/${t4.getFullYear()}`
        :
        t4.getDate()>=10&&t4.getMonth()+1<10
        ?
        `${t4.getDate()}/0${t4.getMonth()+1}/${t4.getFullYear()}`
        :
        `${t4.getDate()}/${t4.getMonth()+1}/${t4.getFullYear()}`
      )
      setT5(
        t5.getDate()<10&&t5.getMonth()+1<10
        ?
        `0${t5.getDate()}/0${t5.getMonth()+1}/${t5.getFullYear()}`
        :
        t5.getDate()<10&&t5.getMonth()+1>=10
        ?
        `0${t5.getDate()}/${t5.getMonth()+1}/${t5.getFullYear()}`
        :
        t5.getDate()>=10&&t5.getMonth()+1<10
        ?
        `${t5.getDate()}/0${t5.getMonth()+1}/${t5.getFullYear()}`
        :
        `${t5.getDate()}/${t5.getMonth()+1}/${t5.getFullYear()}`
      )
      setT6(
        t6.getDate()<10&&t6.getMonth()+1<10
        ?
        `0${t6.getDate()}/0${t6.getMonth()+1}/${t6.getFullYear()}`
        :
        t6.getDate()<10&&t6.getMonth()+1>=10
        ?
        `0${t6.getDate()}/${t6.getMonth()+1}/${t6.getFullYear()}`
        :
        t6.getDate()>=10&&t6.getMonth()+1<10
        ?
        `${t6.getDate()}/0${t6.getMonth()+1}/${t6.getFullYear()}`
        :
        `${t6.getDate()}/${t6.getMonth()+1}/${t6.getFullYear()}`
      )
    }
  }
  return (
    <div className='home'>
      <div className='home__container'>
        <h1>Thống kê</h1>
        <div className='home__line'>
          <div className='home__line-top'>
            <h4>Doanh thu</h4>
            <Calendar forWeek right handleGetDayJs={handleGetDayJs1} forWeekTrue/>
          </div>
          <div className='home__line-body'>
            <LineChart data1={data} firstDate1={firstDate1} lastDate1={lastDate1} t2={t2} t3={t3} t4={t4} t5={t5} t6={t6} />
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

    