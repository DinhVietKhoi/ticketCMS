import React, { useState } from 'react'
import Btn from '../components/Btn'
import Calendar from '../components/Calendar'
import Search from '../components/Search'
import '../sass/checkTicket.scss'
function CheckTicket() {
  const [check,setCheck] = useState(true)
  const [className,setClassname] = useState('checkTicket__type--active')
  const [className1,setClassname1] = useState('')
  const number = [1,2,3,4,5,6,7,8,8,8,8,8,8,8,8,8,8,8,88,8,8,8,88,8,8,8,8,8,8,88,8,8,8,8,8,8,8,8,8,88]
  const handleClick = ()=>{
    setClassname('checkTicket__type--active')
    setClassname1('')
    // setList(dataFamily)
    setCheck(true)
  }
  const handleClick1 = ()=>{
    // setList(dataEvent )
    setClassname1('checkTicket__type--active')
    setClassname('')
    setCheck(false)
  }
  return (
    <div className='checkTicket'>
      <div className='checkTicket__container'>
        <div className='checkTicket__main'>
          <h1>Đối soát vé</h1>
          <div className='checkTicket__type'>
            <span onClick={handleClick} className={className}>Gói gia đình</span>
            <span onClick={handleClick1} className={className1}>Gói sự kiện</span>
          </div>
          <div className='checkTicket__top'>
            <Search placeholde='Tìm bằng số vé' input='small' />
            <div className='ticketManager__handle'>
              <Btn text='Xuất file (.csv)'/>
              <Btn text='Chốt đối soát' active='true'/>
            </div>
          </div>
          <div className='checkTicket__bottom'>
            <table  className='checkTicket__table'>
              <thead>
                <tr>
                  <th >STT</th>
                  <th>Số vé</th>
                  <th>Ngày sử dụng</th>
                  <th>Tên loại vé</th>
                  <th>Cổng check - in</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  number.map((n,i)=>[
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>ALT20210501</td>
                      <td>14/04/2021</td>
                      <td>Vé cổng</td>
                      <td>Cổng 1</td>
                      <td>Đã đối soát</td>
                    </tr>
                  ])
                }
                    
                    
              </tbody>
            </table>
          </div>
        </div>
        <div className='checkTicket__filter'>
          <h2>Lọc vé</h2>
          <div className='checkTicket__filter--status'>
            <h3>Tình trạng đối soát</h3>
            <div className='checkTicket__filter--radio'>
              <div className='checkTicket__filter--radio-group'>
                <input type='radio'></input>
                <span>Tất cả</span>
              </div>
              <div className='checkTicket__filter--radio-group'>
                <input type='radio'></input>
                <span>Đã đối soát</span>
              </div>
              <div className='checkTicket__filter--radio-group'>
                <input type='radio'></input>
                <span>Chưa đối soát</span>
              </div>
            </div>
          </div>
          <div className='checkTicket__filter--type'>
            <h3>Loại vé</h3>
            <span>Vé cổng</span>
          </div>
          <div className='checkTicket__filter--date'>
            <h3>Từ ngày</h3>
            <Calendar text='01/05/2021' disable/>
          </div>
          <div className='checkTicket__filter--status'>
            <h3>Đến ngày</h3>
            <Calendar text='dd/mm/yy'/>
          </div>
          <div className='checkTicket__filter-bottom'>
          <button>Lọc</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CheckTicket