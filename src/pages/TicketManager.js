import React, { useState } from 'react'
import Btn from '../components/Btn'
import Search from '../components/Search'
import arrange from '../assets/arrange.png'
import dot from '../assets/Ellipse.png'
import dot1 from '../assets/Ellipse1.png'
import dot2 from '../assets/Ellipse2.png'
import '../sass/ticketManager.scss'
import Status from '../components/Status'
import Calendar from '../components/Calendar'
import Navigation from '../components/Navigation'
function TicketManager({handleOverlay,filter,dataFamily,dataEvent}) {
  const [radio,setRadio] = useState(true)
  const [radio1,setRadio1] = useState()
  const [radio2,setRadio2] = useState()
  const [radio3,setRadio3] = useState()
  const [checkBox,setCheckbox] = useState(true)
  const [checkBox1,setCheckbox1] = useState()
  const [checkBox2,setCheckbox2] = useState()
  const [checkBox3,setCheckbox3] = useState()
  const [checkBox4,setCheckbox4] = useState()
  const [checkBox5,setCheckbox5] = useState()
  const [list,setList] = useState(dataFamily)
  const [check,setCheck] = useState(true)

  const [className,setClassname] = useState('ticketManager__type--active')
  const [className1,setClassname1] = useState('')

  const handleClick = ()=>{
    setClassname('ticketManager__type--active')
    setClassname1('')
    setList(dataFamily)
    setCheck(true)
  }
  const handleClick1 = ()=>{
    setList(dataEvent )
    setClassname1('ticketManager__type--active')
    setClassname('')
    setCheck(false)
  }
  const handFilter = ()=>{
    handleOverlay()
  }
  const handleRadio = ()=>{
    setRadio1(false)
    setRadio2(false)
    setRadio3(false)
    setRadio(true)
  }
  const handleRadio1 = ()=>{
    setRadio(false)
    setRadio1(!radio1)
  }
  const handleRadio2 = ()=>{
    setRadio(false)
    setRadio2(!radio2)
  }
  const handleRadio3 = ()=>{
    setRadio(false)
    setRadio3(!radio3)
  }
  const handleCheckBox = ()=>{
    setCheckbox(true)
    setCheckbox1(false)
    setCheckbox2(false)
    setCheckbox3(false)
    setCheckbox4(false)
    setCheckbox5(false)
  }
  const handleCheckBox1 = ()=>{
    setCheckbox(false)
    setCheckbox1(!checkBox1)
  }
  const handleCheckBox2 = ()=>{
    setCheckbox(false)
    setCheckbox2(!checkBox2)
  }
  const handleCheckBox3 = ()=>{
    setCheckbox(false)
    setCheckbox3(!checkBox3)
  }
  const handleCheckBox4 = ()=>{
    setCheckbox(false)
    setCheckbox4(!checkBox4)
  }
  const handleCheckBox5 = ()=>{
    setCheckbox(false)
    setCheckbox5(!checkBox5)
  }

  return (
    <div className='ticketManager'>
      <div className='ticketManager__container'>
        <h1>Danh sách vé</h1>
        <div className='ticketManager__type'>
          <span onClick={handleClick} className={className}>Gói gia đình</span>
          <span onClick={handleClick1} className={className1}>Gói sự kiện</span>
        </div>
        <div className='ticketManager__top'>
          <Search placeholde='Tìm bằng số vé' input='small' />
          <div className='ticketManager__handle'>
            <Btn icon={arrange} text='Lọc vé' handleClick={handleOverlay}/>
            <Btn text='Xuất file (.csv)'/>
          </div>
        </div>
        <div className='ticketManager__bottom'>
          <table  className='ticketManager__table'>
            <thead>
              {check&&<tr>
                <th >STT</th>
                <th>Booking code</th>
                <th>Số vé</th>
                <th>Tình trạng sử dụng</th>
                <th>Ngày sử dung</th>
                <th>Ngày xuất vé</th>
                <th>Cổng check-in</th>
              </tr>}
              {!check&&<tr>
                <th >STT</th>
                <th>Booking code</th>
                <th>Số vé</th>
                <th>Tên sự kiện</th>
                <th>Tình trạng sử dụng</th>
                <th>Ngày sử dung</th>
                <th>Ngày xuất vé</th>
                <th>Cổng check-in</th>
              </tr>}
            </thead>
            <tbody>
              {
                check&&list.map((list,index)=>[
                  index<=9&&<tr key={index} style={index%2?{backgroundColor:'#F7F8FB'}:{backgroundColor:'#FFFFFF'}}>
                    <td>{index+1}</td>
                    <td>{list.code}</td>
                    <td>{list.numberTicker}</td>
                    {list.status==='Đã sử dụng'&&<td><Status status='0' text={list.status} dot={dot}/></td>}
                    {list.status==='Chưa sử dụng'&&<td><Status status='1' text={list.status} dot={dot1}/></td>}
                    {list.status==='Hết hạn'&&<td><Status status='2' text={list.status} dot={dot2}/></td>}
                    <td>{list.dateUse}</td>
                    <td>{list.dateBuy}</td>
                    <td>{list.checkIn}</td>
                  </tr>
                ])
              }
              {
                !check&&list.map((list,index)=>[
                  index<=9&&<tr key={index} style={index%2?{backgroundColor:'#F7F8FB'}:{backgroundColor:'#FFFFFF'}}>
                    <td>{index+1}</td>
                    <td>{list.code}</td>
                    <td>{list.numberTicker}</td>
                    <td>{list.eventName}</td>
                    {list.status==='Đã sử dụng'&&<td><Status status='0' text={list.status} dot={dot}/></td>}
                    {list.status==='Chưa sử dụng'&&<td><Status status='1' text={list.status} dot={dot1}/></td>}
                    {list.status==='Hết hạn'&&<td><Status status='2' text={list.status} dot={dot2}/></td>}
                    <td>{list.dateUse}</td>
                    <td>{list.dateBuy}</td>
                    <td>{list.checkIn}</td>
                  </tr>
                ])
              }
            </tbody>
          </table>
          <Navigation />
          {/* <div className='ticketManager__navigation'>
            <i className="fa-solid fa-caret-left"></i>
            <div className='ticketManager__navigation--numberPage'>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>...</span>
              <span>20</span>
            </div>
            <i className="fa-solid fa-caret-right"></i>
          </div> */}
        </div>
      </div>
      {
        filter&&<div className='ticketManager__filter'>
        <div className='ticketManager__filter-top'>
          <h1>Lọc vé</h1>
        </div>
        <div className='ticketManager__filter-main'>
          <div className='ticketManager__filter-date'>
              <div className='ticketManager__filter-date--group'>
                <span>Từ ngày</span>
                <Calendar text='Tháng 4, 2021' right/>
              </div>
              <div className='ticketManager__filter-date--group'>
                <h3>Đến ngày</h3>
                <Calendar text='Tháng 4, 2021'/>
              </div>
          </div>
          <div className='ticketManager__filter-status'>
              <h3>Tình trạng sử dụng</h3>
              <div className='ticketManager__filter-status--radio'>
                <div className='ticketManager__filter-status--group'>
                  <input type='radio' checked={radio} onChange={handleRadio}></input>
                  <span>Tất cả</span>
                </div>
                <div className='ticketManager__filter-status--group'>
                  <input type='radio' checked={radio1} onChange={handleRadio1}></input>
                  <span>Đã sử dụng</span>
                </div>
                <div className='ticketManager__filter-status--group'>
                  <input type='radio' checked={radio2} onChange={handleRadio2}></input>
                  <span>Chưa sử dụng</span>
                </div>
                <div className='ticketManager__filter-status--group'>
                  <input type='radio' checked={radio3} onChange={handleRadio3}></input>
                  <span>Hết hạn</span>
                </div>
              </div>
          </div>
          <div className='ticketManager__filter-check'>
            <h3>Cổng Check - in</h3>
            <div className='ticketManager__filter-list'>
              <div className='ticketManager__filter-list--group'>
                <input type='checkbox' checked={checkBox} onChange={handleCheckBox}></input>
                <span>Tất cả</span>
              </div>
              <div className='ticketManager__filter-list--group'>
                <input type='checkbox' checked={checkBox1} onChange={handleCheckBox1}></input>
                <span>Cổng 1</span>
              </div>
              <div className='ticketManager__filter-list--group'>
                <input type='checkbox' checked={checkBox2} onChange={handleCheckBox2}></input>
                <span>Cổng 2</span>
              </div>
              <div className='ticketManager__filter-list--group'>
                <input type='checkbox' checked={checkBox3} onChange={handleCheckBox3}></input>
                <span>Cổng 3</span>
              </div>
              <div className='ticketManager__filter-list--group'>
                <input type='checkbox' checked={checkBox4} onChange={handleCheckBox4}></input>
                <span>Cổng 4</span>
              </div>
              <div className='ticketManager__filter-list--group'>
                <input type='checkbox' checked={checkBox5} onChange={handleCheckBox5}></input>
                <span>Cổng 5</span>
              </div>
            </div>
          </div>
        </div>
        <div className='ticketManager__filter-bottom'>
          <button onClick={handFilter}>Lọc</button>
        </div>
        </div>
      }
    </div>
  )
}

export default TicketManager