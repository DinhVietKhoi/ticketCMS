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
function TicketManager({handleOverlay,filter,dataFamily,dataEvent}) {

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
            <Btn icon={arrange} text='Lọc vé' handeClick2={handleOverlay}/>
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
                  <tr key={index} style={index%2?{backgroundColor:'#F7F8FB'}:{backgroundColor:'#FFFFFF'}}>
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
                  <tr key={index} style={index%2?{backgroundColor:'#F7F8FB'}:{backgroundColor:'#FFFFFF'}}>
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
                <Calendar text='Tháng 4, 2021'/>
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
                  <input type='radio'></input>
                  <span>Tất cả</span>
                </div>
                <div className='ticketManager__filter-status--group'>
                  <input type='radio'></input>
                  <span>Đã sử dụng</span>
                </div>
                <div className='ticketManager__filter-status--group'>
                  <input type='radio'></input>
                  <span>Chưa sử dụng</span>
                </div>
                <div className='ticketManager__filter-status--group'>
                  <input type='radio'></input>
                  <span>Hết hạn</span>
                </div>
              </div>
          </div>
          <div className='ticketManager__filter-check'>
            <h3>Cổng Check - in</h3>
            <div className='ticketManager__filter-list'>
              <div className='ticketManager__filter-list--group'>
                <input type='checkbox'></input>
                <span>Tất cả</span>
              </div>
              <div className='ticketManager__filter-list--group'>
                <input type='checkbox'></input>
                <span>Cổng 1</span>
              </div>
              <div className='ticketManager__filter-list--group'>
                <input type='checkbox'></input>
                <span>Cổng 2</span>
              </div>
              <div className='ticketManager__filter-list--group'>
                <input type='checkbox'></input>
                <span>Cổng 3</span>
              </div>
              <div className='ticketManager__filter-list--group'>
                <input type='checkbox'></input>
                <span>Cổng 4</span>
              </div>
              <div className='ticketManager__filter-list--group'>
                <input type='checkbox'></input>
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