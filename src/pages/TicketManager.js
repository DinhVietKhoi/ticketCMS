import React, { useEffect, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { ref, set, getDatabase, onValue} from 'firebase/database'
import db  from '../firebase'
import Btn from '../components/Btn'
import Search from '../components/Search'
import arrange from '../assets/arrange.png'
import dot from '../assets/Ellipse.png'
import dot1 from '../assets/Ellipse1.png'
import dot2 from '../assets/Ellipse2.png'
import '../sass/ticketManager.scss'
import Status from '../components/Status'
import Calendar from '../components/Calendar'
import Pagigation from '../components/Pagigation'
import ReactPaginate from 'react-paginate'
import ellipsis from '../assets/u_ellipsis-v.png'
import UpdatePackage from '../components/UpdatePackage'
function TicketManager({handleOverlay,handleOverlay1,filter,data,changeDate}) {
  const [dataList,setDataList] = useState()
  // const [arr,setArr] = useState([])
  const [dayObj,setDayObj] = useState(dayjs())

  useEffect(()=>{
    data&&data.map((l,i)=>{
      i===1&&setDataList(data[1])
    })
  },[data])
  const [checkIndex,setCheckindex] = useState()
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
  const [check,setCheck] = useState(true)
  const [className,setClassname] = useState('ticketManager__type--active')
  const [className1,setClassname1] = useState('')
  // changeDate&&console.log(changeDate)
  const handleClick = ()=>{
    data&&data.map((l,i)=>{
      i===1&&setDataList(data[1])
    })
    setClassname('ticketManager__type--active')
    setClassname1('')
    setCheck(true)
  }
  const handleClick1 = ()=>{
    setClassname1('ticketManager__type--active')
    setClassname('')
    setCheck(false)
    data&&data.map((l,i)=>{
      i===0&&setDataList(data[0])
    })
  }
  const handFilter = ()=>{
    // checkBox&&radio&&data&&setDataList(data[1])
    if(check){
      let dataa = []
      if(radio3===true){
         dataa = data&&data[1].filter(f=>f.Status === "HH")
      }
      else if(radio2===true){
         dataa = data&&data[1].filter(f=>f.Status === "CSD")
      }
      else if(radio1===true){
         dataa = data&&data[1].filter(f=>f.Status === "DSD")
      }
      else if(radio===true){
        dataa = data&&data[1].filter(f=>f.Status === "DSD"||f.Status === "CSD"||f.Status === "HH")
      }
      let arr = []
      checkBox&&arr.push(1,2,3,4,5)
      checkBox1&&arr.push(1)
      checkBox2&&arr.push(2)
      checkBox3&&arr.push(3)
      checkBox4&&arr.push(4)
      checkBox5&&arr.push(5)
      // console.log(arr)
      const dataaa = [];
      dataa.map(l=>{
        arr.map(arr=>{
          if(arr===l.gateCheck){
            dataaa.push(l)
          } 
        })
      })
      setDataList(dataaa)
      handleOverlay()
    }
    else if(!check){
      let dataa = []
    if(radio3===true){
       dataa = data&&data[0].filter(f=>f.Status === "HH")
    }
    else if(radio2===true){
       dataa = data&&data[0].filter(f=>f.Status === "CSD")
    }
    else if(radio1===true){
       dataa = data&&data[0].filter(f=>f.Status === "DSD")
    }
    else if(radio===true){
      dataa = data&&data[0].filter(f=>f.Status === "DSD"||f.Status === "CSD"||f.Status === "HH")
    }
    let arr = []
    checkBox&&arr.push(1,2,3,4,5)
    checkBox1&&arr.push(1)
    checkBox2&&arr.push(2)
    checkBox3&&arr.push(3)
    checkBox4&&arr.push(4)
    checkBox5&&arr.push(5)
    // console.log(arr)
    const dataaa = [];
    dataa.map(l=>{
      arr.map(arr=>{
        if(arr===l.gateCheck){
          dataaa.push(l)
        } 
      })
    })
    setDataList(dataaa)
    handleOverlay()
    }
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
    setRadio2(false)
    setRadio3(false)
  }
  const handleRadio2 = ()=>{
    setRadio(false)
    setRadio1(false)
    setRadio2(true)
    setRadio3(false)
  }
  const handleRadio3 = ()=>{
    setRadio(false)
    setRadio1(false)
    setRadio2(false)
    setRadio3(true)
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
  const handleMouseMove = (e)=>{
    setCheckindex(e.id)
  }
  const [update,setUpdate] = useState()
  const [date,setdaate] = useState(dayObj.format(`DD/MM/YYYY`))
  const handleGetDayJs = (dayACtive,monthACtive,yearACtive) =>{
    dayACtive<10&&(monthACtive+1)<10
    ?
    setdaate(`0${dayACtive}/0${monthACtive+1}/${yearACtive}`)
    :
    dayACtive<10&&(monthACtive+1)>=10
    ?
    setdaate(`0${dayACtive}/${monthACtive+1}/${yearACtive}`)
    :
    dayACtive>=10&&(monthACtive+1)<10
    ?
    setdaate(`${dayACtive}/0${monthACtive+1}/${yearACtive}`)
    :
    setdaate(`${dayACtive}/${monthACtive+1}/${yearACtive}`)
  }
  const handleUpdate = (e)=>{
    handleOverlay1()
    setUpdate(e)
  }
  const handleUpdate1 = ()=>{
    check===true?
    set(ref(db,`ticketList/familyList/${update.id-1}`),{
      Status:update.Status,
      bookingCode:update.bookingCode,
      dateSell:update.dateSell,
      dateUse:date,
      gateCheck:update.gateCheck,
      id:update.id,
      ticketCheck:update.ticketCheck,
      ticketNumber:update.ticketNumber
    })
    :
    set(ref(db,`ticketList/eventList/${update.id-1}`),{
      Status:update.Status,
      bookingCode:update.bookingCode,
      dateSell:update.dateSell,
      dateUse:date,
      gateCheck:update.gateCheck,
      id:update.id,
      ticketCheck:update.ticketCheck,
      ticketNumber:update.ticketNumber,
      eventName:update.eventName,
      typeTicket:update.typeTicket
    })
    handleOverlay1()
  }
  const handleChange = (value)=>{
    const  dataa = data&&data[1].filter(f=>f.ticketNumber.startsWith(value)===true)
    setDataList(dataa)
  }
  return (
    <div className='ticketManager'>
      <div className='ticketManager__container'>
        <h1>Danh sách vé</h1>
        <div className='ticketManager__type'>
          <span onClick={handleClick} className={className&&className}>Gói gia đình</span>
          <span onClick={handleClick1} className={className1&&className1}>Gói sự kiện</span>
        </div>
        <div className='ticketManager__top'>
          <Search placeholde='Tìm bằng số vé' input='small' onChange={handleChange}/>
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
                <th></th>
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
                <th></th>
              </tr>}
            </thead>
            <tbody>
            {
                check&&currentItems&&currentItems.map((list,index)=>[
                  <tr key={index} style={index%2?{backgroundColor:'#F7F8FB'}:{backgroundColor:'#FFFFFF'}} onMouseMove={()=>handleMouseMove(list)}>
                    <td>{list.id}</td>
                    <td>{list.bookingCode}</td>
                    <td>{list.ticketNumber}</td>
                    {list.Status==='DSD'&&<td><Status status='0' text="Đã sử dụng" dot={dot}/></td>}
                    {list.Status==='CSD'&&<td><Status status='1' text="Chưa sử dụng" dot={dot1}/></td>}
                    {list.Status==='HH'&&<td><Status status='2' text="Hết hạn" dot={dot2}/></td>}
                    <td>{list.dateUse}</td>
                    <td>{list.dateSell}</td>
                    <td>Cổng {list.gateCheck}</td>
                    <td><img src={ellipsis} className={checkIndex&&checkIndex==list.id?'ticketManager__update':''} style={{opacity: '0', visibility: 'hidden', cursor: 'pointer'}} onClick={()=>handleUpdate(list)}></img></td>
                  </tr>
                ])
              }
              {
                !check&&currentItems&&currentItems.map((list,index)=>[
                  <tr key={index} style={index%2?{backgroundColor:'#F7F8FB'}:{backgroundColor:'#FFFFFF'}} onMouseMove={()=>handleMouseMove(list)}>
                    <td>{list.id}</td>
                    <td>{list.bookingCode}</td>
                    <td>{list.ticketNumber}</td>
                    <td>{list.eventName}</td>
                    {list.Status==='DSD'&&<td><Status status='0' text='Đã sử dụng' dot={dot}/></td>}
                    {list.Status==='CSD'&&<td><Status status='1' text='Chưa sử dụng' dot={dot1}/></td>}
                    {list.Status==='HH'&&<td><Status status='2' text='Hết hạn' dot={dot2}/></td>}
                    <td>{list.dateUse}</td>
                    <td>{list.dateSell}</td>
                    <td>Cổng {list.gateCheck}</td>
                    <td><img src={ellipsis} className={checkIndex&&checkIndex==list.id?'ticketManager__update':''} style={{opacity: '0', visibility: 'hidden', cursor: 'pointer'}} onClick={()=>handleUpdate(list)} ></img></td>
                  </tr>
                ])
              }
            </tbody>
          </table>
          <Pagigation handlePageClick={handlePageClick} pageCount={pageCount}/>
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
      {
        changeDate&&<div className='ticketManager__changeDate'>
                        <div className='ticketManager__changeDate--top'>
                          <span className='ticketManager__changeDate--top--text'>Đổi ngày sử dụng vé</span>
                        </div>
                      <div className='ticketManager__changeDate--main'>
                        <div className='ticketManager__changeDate--group'>
                          <span className='ticketManager__changeDate--group--text'>Số vé</span>
                          <span className='ticketManager__changeDate--group--text'>{update.ticketNumber}</span>
                        </div>
                        <div className='ticketManager__changeDate--group'>
                          <span className='ticketManager__changeDate--group--text'>Loại vé</span>
                          <span className='ticketManager__changeDate--group--text'>Vé cổng - {update.eventName?'Gói sự kiện':'Gói gia đình'}</span>
                        </div>
                        <div className='ticketManager__changeDate--group'>
                          <span className='ticketManager__changeDate--group--text'>Tên sự kiện</span>
                          <span className='ticketManager__changeDate--group--text'>Hội trợ triển lãm hàng tiêu dùng 2022</span>
                        </div>
                        <div className='ticketManager__changeDate--group'>
                          <span className='ticketManager__changeDate--group--text'>Hạn sử dụng</span>
                          <Calendar handleGetDayJs={handleGetDayJs}/>
                        </div>
                      </div>
                      <div className='ticketManager__changeDate--bottom'>
                        <div className='updatePackage__btn'>
                            <div  onClick={handleUpdate} className='updatePackage__btn-child updatePackage__btn--break'>
                                Hủy
                            </div>
                            <div  onClick={handleUpdate1} className='updatePackage__btn-child updatePackage__btn--save'>
                                Lưu
                            </div>
                        </div>
                      </div>
                    </div>
      }
    </div>
  )
}

export default TicketManager