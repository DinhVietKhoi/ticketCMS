import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Btn from '../components/Btn'
import Calendar from '../components/Calendar'
import Pagigation from '../components/Pagigation'
import Search from '../components/Search'
import '../sass/checkTicket.scss'
function CheckTicket({data}) {
  const [dataList,setDataList] = useState()
  useEffect(()=>{
    data&&data.map((l,i)=>{
      i===1&&setDataList(data[1])
    })
  },[data])
  const [radio,setRadio] = useState(true)
  const [radio1,setRadio1] = useState()
  const [radio2,setRadio2] = useState()
  const [check,setCheck] = useState(true)
  const [className,setClassname] = useState('checkTicket__type--active')
  const [className1,setClassname1] = useState('')
  const handleClick = ()=>{
    setClassname('checkTicket__type--active')
    setClassname1('')
    data&&data.map((l,i)=>{
      i===1&&setDataList(data[1])
    })
    setCheck(true)
  }
  const handleClick1 = ()=>{
    // setList(dataEvent )
    setClassname1('checkTicket__type--active')
    setClassname('')
    setCheck(false)
    data&&data.map((l,i)=>{
      i===0&&setDataList(data[0])
    })
  }
  const handleRadio = ()=>{
    setRadio1(false)
    setRadio2(false)
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
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  
  useEffect(() => {
    const endOffset = itemOffset + 10;
    dataList&&setCurrentItems(dataList.slice(itemOffset, endOffset));
    dataList&&setPageCount(Math.ceil(dataList.length / 10));
  }, [itemOffset,dataList]);
  const handlePageClick = (event) => {
    const newOffset = dataList&&(event.selected * 10 % dataList.length);
    setItemOffset(newOffset);
  };
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
                {
                  check&&<tr>
                  <th >STT</th>
                  <th>Số vé</th>
                  <th>Ngày sử dụng</th>
                  <th>Tên loại vé</th>
                  <th>Cổng check - in</th>
                  <th></th>
                </tr>
                }
                {
                  !check&&<tr>
                  <th >STT</th>
                  <th>Số vé</th>
                  <th>Tên sự kiện</th>
                  <th>Ngày sử dụng</th>
                  <th>Tên loại vé</th>
                  <th>Cổng check - in</th>
                  <th></th>
                  </tr>
                }
              </thead>
              <tbody>
                {
                  check&&currentItems&&currentItems.map((n,i)=>[
                    <tr key={i} style={i%2?{backgroundColor:'#F7F8FB'}:{backgroundColor:'#FFFFFF'}} >
                      <td>{n.id}</td>
                      <td>{n.bookingCode}</td>
                      <td>{n.dateUse}</td>
                      <td>Vé cổng</td>
                      <td>Cổng {n.gateCheck}</td>
                      <td style={n.ticketCheck!==true?{color: '#A5A8B1'}:{color: '#FD5959'}}>{n.ticketCheck==true?'Đã đối soát':'Chưa đối soát'}</td>
                    </tr>
                  ])
                }
                {
                  !check&&currentItems&&currentItems.map((n,i)=>[
                    <tr key={i} style={i%2?{backgroundColor:'#F7F8FB'}:{backgroundColor:'#FFFFFF'}}>
                      <td>{n.id}</td>
                      <td>{n.bookingCode}</td>
                      <td>{n.eventName}</td>
                      <td>{n.dateUse}</td>
                      <td>Vé cổng</td>
                      <td>Cổng {n.gateCheck}</td>
                      <td style={n.ticketCheck!==true?{color: '#A5A8B1'}:{color: '#FD5959'}}>{n.ticketCheck==true?'Đã đối soát':'Chưa đối soát'}</td>
                    </tr>
                  ])
                }
              </tbody>
            </table>
            <Pagigation handlePageClick={handlePageClick} pageCount={pageCount}/>
          </div>
        </div>
        <div className='checkTicket__filter'>
          <h2>Lọc vé</h2>
          <div className='checkTicket__filter--status'>
            <h3>Tình trạng đối soát</h3>
            <div className='checkTicket__filter--radio'>
              <div className='checkTicket__filter--radio-group'>
                <input type='radio' checked={radio} onChange={handleRadio}></input>
                <span>Tất cả</span>
              </div>
              <div className='checkTicket__filter--radio-group'>
                <input type='radio' checked={radio1} onChange={handleRadio1}></input>
                <span>Đã đối soát</span>
              </div>
              <div className='checkTicket__filter--radio-group'>
                <input type='radio' checked={radio2} onChange={handleRadio2}></input>
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
            <Calendar text='dd/mm/yy' right/>
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