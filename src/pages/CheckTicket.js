import React, { useEffect, useState } from 'react'
import { CSVLink } from "react-csv";
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
  const [radio1,setRadio1] = useState(false)
  const [radio2,setRadio2] = useState(false)
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
    setRadio1(true)
    setRadio2(false)
    setRadio(false)
  }
  const handleRadio2 = ()=>{
    setRadio1(false)
    setRadio2(true)
    setRadio(false)
  }
  const [csvData,setCsvData] = useState([])
  const [csvReport,setCsvReport] = useState()
  const headerCsv = [
    { label: "STT", key: "stt" },
    { label: "Số vé", key: "sove" },
    { label: "Ngày sử dụng", key: "ngaysudung" },
    { label: "Tên loại vé", key: "tenloaive" },
    { label: "Cổng check - in", key: "congcheckin" },
    { label: "Tình trạng", key: "tinhtrang" },
  ]
  const headerCsv1 = [
    { label: "STT", key: "stt" },
    { label: "Số vé", key: "sove" },
    { label: "Tên sự kiện", key: "tensukien" },
    { label: "Ngày sử dụng", key: "ngaysudung" },
    { label: "Tên loại vé", key: "tenloaive" },
    { label: "Cổng check - in", key: "congcheckin" },
    { label: "Tình trạng", key: "tinhtrang" },
  ]
  useEffect(()=>{
    setCsvData([])
    check&&dataList&&dataList.map(data=>{
      setCsvData(pre  => 
        [
          ...pre,
          {
            "stt":`${data.id}`,
            "sove":data.ticketNumber,
            "ngaysudung":data.dateUse,
            "tenloaive":"Vé cổng",
            "congcheckin":`Cổng ${data.gateCheck}`,
            "tinhtrang":data.ticketCheck==true?"Đã đối soát":"Chưa đối soát"}])
    })
    !check&&dataList&&dataList.map(data=>{
      setCsvData(pre  => 
        [
          ...pre,
          {
            "stt":`${data.id}`,
            "sove":data.ticketNumber,
            "tensukien":data.eventName,
            "ngaysudung":data.dateUse,
            "tenloaive":"Vé cổng",
            "congcheckin":`Cổng ${data.gateCheck}`,
            "tinhtrang":data.ticketCheck==true?"Đã đối soát":"Chưa đối soát"}])
    })
  },[dataList])
  useEffect(()=>{
    check&&setCsvReport({
      data: csvData,
      headers: headerCsv,
      filename: 'Danhsachdoisoatve.csv'
    })
    !check&&setCsvReport({
      data: csvData,
      headers: headerCsv1,
      filename: 'Danhsachdoisoatve.csv'
    })
  },[csvData])
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
  const handleFilter = ()=>{
    if(check){
      radio&&data&&setDataList(data[1])
      radio1&&data&&setDataList(data[1].filter(l=>l.ticketCheck===true))
      radio2&&data&&setDataList(data[1].filter(l=>l.ticketCheck===false))
    }
    else if(!check){
      radio&&data&&setDataList(data[0])
      radio1&&data&&setDataList(data[0].filter(l=>l.ticketCheck===true))
      radio2&&data&&setDataList(data[0].filter(l=>l.ticketCheck===false))
    }
    
  }
  const handleChange = (value)=>{
    if(check){
      const  dataa = data&&data[1].filter(f=>f.ticketNumber.startsWith(value)===true)
      setDataList(dataa)
    }
    else {
      const  dataa = data&&data[0].filter(f=>f.ticketNumber.startsWith(value)===true)
      setDataList(dataa)
    }
    
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
            <Search placeholde='Tìm bằng số vé' input='small' onChange={handleChange}/>
            <div className='ticketManager__handle'>
            {
              csvReport&&<div className='btn' style={{marginLeft: '10px',borderRadius: '8px'}}>
                          <CSVLink {...csvReport} className='btn__container'>
                              <span>
                                  Xuất file(.CSV)
                              </span>
                          </CSVLink>
                        </div>
            }
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
                      <td>{n.ticketNumber}</td>
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
                      <td>{n.ticketNumber}</td>
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
          {
            !check&&<select>
                      <option>Hội chợ triển lãm tiêu dùng 2022</option>
                    </select>
          }
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
            <Calendar showDate disable/>
          </div>
          <div className='checkTicket__filter--status'>
            <h3>Đến ngày</h3>
            <Calendar  hideDate right/>
          </div>
          <div className='checkTicket__filter-bottom'>
            <button onClick={handleFilter}>Lọc</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CheckTicket