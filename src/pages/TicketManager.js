import React, { useState } from 'react'
import Btn from '../components/Btn'
import Search from '../components/Search'
import arrange from '../assets/arrange.png'
import dot from '../assets/Ellipse.png'
import dot1 from '../assets/Ellipse1.png'
import dot2 from '../assets/Ellipse2.png'
import '../sass/ticketManager.scss'
import Status from '../components/Status'
function TicketManager() {
  const listTicker1 = [
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    }
  ]
  const listTicker = [
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1'
    }
  ]
  const [list,setList] = useState(listTicker)
  const [check,setCheck] = useState(true)

  const [className,setClassname] = useState('ticketManager__type--active')
  const [className1,setClassname1] = useState('')

  const handleClick = ()=>{
    setClassname('ticketManager__type--active')
    setClassname1('')
    setList(listTicker)
    setCheck(true)
  }
  const handleClick1 = ()=>{
    setList(listTicker1 )
    setClassname1('ticketManager__type--active')
    setClassname('')
    setCheck(false)

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
            <Btn icon={arrange} text='Lọc vé'/>
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
                <th>Tên sự kiện</th>
                <th>Tình trạng sử dụng</th>
                <th>Ngày sử dung</th>
                <th>Ngày xuất vé</th>
                <th>Cổng check-in</th>
              </tr>}
              {!check&&<tr>
                <th >STT</th>
                <th>Booking code</th>
                <th>Số vé</th>
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
              {
                !check&&list.map((list,index)=>[
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TicketManager