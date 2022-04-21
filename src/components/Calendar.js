import React, { useState, useEffect, useRef } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import range from "lodash-es/range"
import '../sass/calendar.scss'
import calendar from '../assets/fi_calendar.png'
import calendar1 from '../assets/u_calendar-alt.png'
import pre from '../assets/Previous.png'
import next from '../assets/Next.png'
function Calendar({text,disable,showDate,hideDate,right,handleGetDayJs,forWeek,forWeekTrue}) {
  const [firstDate,setFirstDate] = useState('')
  const [lastDate,setLastDate] = useState('')
  const [t2,setT2] = useState('')
  const [t3,setT3] = useState('')
  const [t4,setT4] = useState('')
  const [t5,setT5] = useState('')
  const [t6,setT6] = useState('')
  const [filterWeek,setFilterWeek] = useState(false)
  const [overLay,setOverlay] = useState(false)
  const [checked,setChecked] = useState(true)
  const [check,setCheck] = useState(false)
  const [dayObj,setDayObj] = useState(dayjs())
  const [month,setMonth] = useState('')
  const [month1,setMonth1] = useState('dd/mm/yyyy')
  const [hide,setHide] = useState(true)
  const todayObj = dayjs()
  const [dayACtive,setDayActive] = useState(dayjs().date())
  const [monthACtive,setMonthActive] = useState(dayjs().month())
  const [yearACtive,setYearActive] = useState(dayjs().year())
  const [dayy,setDayy] = useState()
  const [dayy1,setDayy1] = useState()

  const [arr,setArr] = useState('')
  
  const handleChecked = ()=>{
    setChecked(true)
  }
  const handleChecked1 = ()=>{
    setChecked(false)
  }
  const [dem,setDem] = useState(0);
  useEffect(()=>{
    handleGetDayJs&&handleGetDayJs(dayACtive,monthACtive,yearACtive,firstDate,lastDate,t2,t3,t4,t5,t6,arr)
    if(forWeekTrue){
      setChecked(false)
    }
    else{
      setChecked(true)
    }
  },[])
  useEffect(()=>{
    if(checked==false){
      const current = new Date(`${yearACtive}/${monthACtive+1}/${dayACtive}`);
      const check = current.getDate() - current.getDay();
        const cn = new Date(current.setDate(check));
        const t2 = new Date(current.setDate(check +1));
        const t3 = new Date(current.setDate(check +2));
        const t4 = new Date(current.setDate(check +3));
        const t5 = new Date(current.setDate(check +4));
        const t6 = new Date(current.setDate(check +5));
        const t7 = new Date(current.setDate(check +6));
        if(cn.getMonth()==monthACtive&&cn.getFullYear()==yearACtive&&t7.getMonth()==monthACtive&&t7.getFullYear()==yearACtive){
          setFirstDate(cn)
          setLastDate(t7)
          setT2(t2)
          setT3(t3)
          setT4(t4)
          setT5(t5)
          setT6(t6)
          dem===0&&handleGetDayJs&&handleGetDayJs(dayACtive,monthACtive,yearACtive,cn,t7,t2,t3,t4,t5,t6,arr)
          setDem(1)
      }
    }
    else {
          setFirstDate('')
          setLastDate('')
          setT2('')
          setT3('')
          setT4('')
          setT5('')
          setT6('')
    }
  },[dayACtive,checked])
  useEffect(()=>{
    if(checked){
      setArr('')
      const dayy=document.getElementsByClassName("calendar__days-month--textt");
      const dayy1 = [...dayy]
      dayy1.map(l=>{
        setArr(pre=>[...pre,l.innerText])
      })
    }
    else{
      setArr('')
    }
  },[month1,check,checked])
  const handleClick = ()=>{
    setCheck(!check)
    setOverlay(true)
    handleGetDayJs&&handleGetDayJs(dayACtive,monthACtive,yearACtive,firstDate,lastDate,t2,t3,t4,t5,t6,arr)
  }
  useEffect(()=>{
    setMonth(dayObj.format(`M, YYYY`))
    setMonth1(dayObj.format(`DD/MM/YYYY`))
  },[dayObj])
  const [date,setDate] = useState()
  useEffect(()=>{
    setDate(
      dayACtive<10&&monthACtive+1<10
      ?
      `0${dayACtive}/0${monthACtive+1}/${yearACtive}`
      :
      dayACtive<10&&monthACtive+1>=10
      ?
      `0${dayACtive}/${monthACtive+1}/${yearACtive}`
      :
      dayACtive>=10&&monthACtive+1<10
      ?
      `${dayACtive}/0${monthACtive+1}/${yearACtive}`
      :
      `${dayACtive}/${monthACtive+1}/${yearACtive}`)
  },[dayACtive])
  const daysWeek = ['CN','T2','T3','T4','T5','T6','T7']
  const daysInMonth = dayObj.daysInMonth()
  const handlePrev = () => {
    setDayObj(dayObj.subtract(1, "month"))
  }

  const handleNext = () => {
    setDayObj(dayObj.add(1, "month"))
  }

  const thisYear = dayObj.year()
  const thisMonth = dayObj.month()
  const dayObjOf1 = dayjs(`${thisYear}-${thisMonth + 1}-1`)
  const weekDayOf1 = dayObjOf1.day()
  const dayObjOfLast = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`)
  const weekDayOfLast =  dayObjOfLast.day()

//   var startDate = new Date("2029-10-01"); //YYYY-MM-DD
// var endDate = new Date("2030-10-07"); //YYYY-MM-DD

// var getDateArray = function(start, end) {
//     var arr = new Array();
//     var dt = new Date(start);
//     while (dt <= end) {
//         arr.push(new Date(dt));
//         dt.setDate(dt.getDate() + 1);
//     }
//     return arr;
// }

// var dateArr = getDateArray(startDate, endDate);

// // Output
// document.write("<p>Start Date: " + startDate + "</p>");
// document.write("<p>End Date: " + endDate + "</p>");
// document.write("<p>Date Array</p>")
// for (var i = 0; i < dateArr.length; i++) {
//     document.write("<p>" + dateArr[i] + "</p>");
// }
// for (var i = 0; i < dateArr.length; i++) {
//     console.log(dateArr[i])
// }
  const handleGetDay = (i) =>{
    setHide(false)
    i>=10?setMonth1(dayObj.format(`${i}/MM/YYYY`)):setMonth1(dayObj.format(`0${i}/MM/YYYY`))
    setMonthActive(dayObj.format(`M`)-1)
    setYearActive(dayObj.format(`YYYY`))
    setDayActive(i)
  }
  
  return (
    <div className="calendar" >
      {
        check&&<div className='calendar__overLay' onClick={handleClick}></div>
      }
      {
        disable&&<div className='calendar__btn' style={{background: '#E0E0E0', opacity: '1'}} >
        {<span>{hideDate&&hide?'dd/mm/yy':hideDate&&!hide?date:showDate?date:`Tháng ${month}`}</span>}
        {
          <img src={!disable?calendar:calendar1}></img>
        }
        
      </div>
      }
      {
        !disable&&<div className='calendar__btn' style={{color:'#A5A8B1'}} onClick={handleClick}>
        {<span>{hideDate&&hide?'dd/mm/yy':hideDate&&!hide?date:showDate?date:`Tháng ${month}`}</span>}
        {
          <img src={!disable?calendar:calendar1}></img>
        }
        
      </div>
      }
      
      {
        check&&
        <div className='calendar__app' style={right?{right:'0'}:{left:'0'}}>
          <div className='calendar__month-current'>
            <span  className='calendar__month-current--btn' onClick={handlePrev}></span>
            {<span className='calendar__month-current--text'>Tháng {month}</span>}
            <span  className='calendar__month-current--btn' onClick={handleNext}></span>
          </div>
          {
            forWeek&&<div className='calendar__changeType'>
            <div className='calendar__changeType-group'>
              <input type='radio' checked={checked&&'checked'} onChange={()=>handleChecked()}></input>
              <span>Theo ngày</span>
            </div>
            <div className='calendar__changeType-group'>
              <input type='radio' checked={!checked&&'checked'} onChange={()=>handleChecked1()}></input>
              <span>Theo tuần</span>
            </div>
          </div>
          }
          
          <div className='calendar__days-week'>
            {
              daysWeek.map(dw=>[
                <span key={dw} className='calendar__days-week--text'>{dw}</span>
              ])
            }
          </div>
          <div  className='calendar__days-month'>
            {
              range(weekDayOf1).map((i) => (
                <div key={i} className='calendar__days-month--text'>
                  <span style={{opacity: '0.3'}} className='calendar__days-month--textt'>
                    {dayObjOf1.subtract(weekDayOf1 - i, "day").date()}
                  </span>
                </div>
              ))
            }
            {
              range(daysInMonth).map(i => (
                <div onClick={handleGetDay.bind(this,i+1)} key={i} className={`calendar__days-month--text ${
                    i + 1 === dayACtive &&
                    thisMonth === ~~(monthACtive) &&
                    thisYear === ~~(yearACtive) && checked
                    ? 
                    "calendar__days-month--text--active"
                    :
                    lastDate&&i + 1 === lastDate.getDate() &&
                    thisMonth === lastDate.getMonth() &&
                    thisYear === lastDate.getFullYear() && !checked 
                    ?
                    "calendar__days-month--text--active"
                    :
                    firstDate&&i + 1 === firstDate.getDate() &&
                    thisMonth === firstDate.getMonth() &&
                    thisYear === firstDate.getFullYear() && !checked 
                    ?
                    "calendar__days-month--text--active"
                    :
                    t2&&i + 1 === t2.getDate() &&
                    thisMonth === t2.getMonth() &&
                    thisYear === t2.getFullYear() && !checked 
                    ?
                    "calendar__days-month--text--activeee"
                    :
                    t3&&i + 1 === t3.getDate() &&
                    thisMonth === t3.getMonth() &&
                    thisYear === t3.getFullYear() && !checked 
                    ?
                    "calendar__days-month--text--activeee"
                    :
                    t4&&i + 1 === t4.getDate() &&
                    thisMonth === t4.getMonth() &&
                    thisYear === t4.getFullYear() && !checked 
                    ?
                    "calendar__days-month--text--activeee"
                    :
                    t5&&i + 1 === t5.getDate() &&
                    thisMonth === t5.getMonth() &&
                    thisYear === t5.getFullYear() && !checked 
                    ?
                    "calendar__days-month--text--activeee"
                    :
                    t6&&i + 1 === t6.getDate() &&
                    thisMonth === t6.getMonth() &&
                    thisYear === t6.getFullYear() && !checked 
                    ?
                    "calendar__days-month--text--activeee"
                    :
                    ""
                }`}>
                <span  className={'calendar__days-month--textt'}
                // style={i===7?{color:'#FFFFFF'}:{color:'#23221F'}}
                >{i+1}</span>
                {
                  <div className='calendar__days-month--text--activee'></div>
                }
                {
                  <div className='calendar__days-month--text--activeeee'></div>
                }
              </div>
              ))
            }
            {
              range(6 - weekDayOfLast).map(i => (
                <div  key={i} className='calendar__days-month--text' >
                  <span  style={{opacity: '0.3'}} className="calendar__days-month--textt">{dayObjOfLast.add(i + 1 , "day").date()}</span>
                </div>
              ))
            }
          </div>
        </div>
      }
      
    </div>
  )
}

export default Calendar