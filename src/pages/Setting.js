import React, { useState, useEffect } from 'react'
import { ref, set, onValue} from 'firebase/database'
import { CSVLink } from "react-csv";
import db  from '../firebase'
import Btn from '../components/Btn'
import Search from '../components/Search'
import Status from '../components/Status'
import dot from '../assets/Ellipse1.png'
import dot1 from '../assets/Ellipse2.png'
import edit from '../assets/fi_edit.png'
import '../sass/setting.scss'
import UpdatePackage from '../components/UpdatePackage'
import Pagigation from '../components/Pagigation'
function Setting({handleOverlay,setting,data1}) {
  const [checkPackage,setCheckPackage] = useState()
  useEffect(()=>{
    onValue((ref(db,'checkPackage/id')),(snapshot)=>{
      const data = snapshot.val();
      const ticketList = data
      setCheckPackage(ticketList)
    })
  },[])
  const [dataList,setDataList] = useState()
  const [csvData,setCsvData] = useState([])
  const [csvReport,setCsvReport] = useState()
  const headerCsv = [
    { label: "STT", key: "stt" },
    { label: "Mã gói", key: "magoi" },
    { label: "Tên gói vé", key: "tengoive" },
    { label: "Ngày áp dụng", key: "ngayapdung" },
    { label: "Ngày hết hạn", key: "ngayhethan" },
    { label: "Giá vé", key: "giave" },
    { label: "Giá Combo", key: "giacombo" },
    { label: "Tình trạng", key: "tinhtrang" },
  ]
  useEffect(()=>{
      setDataList(data1)
      setCsvData([])
      data1&&data1.map(data=>{
        setCsvData(pre=>[...pre,{"stt":`${data.id}`,"magoi":data.codePackage,"tengoive":data.namePackage,"ngayapdung":data.dateStart,"ngayhethan":data.dateEnd,"giave":`${formatMoney(~~data.price)} VNĐ`,"giacombo":data.combo==0?"":`${formatMoney(~~data.combo)} VNĐ/4 Vé`,"tinhtrang":data.status===1?"Đang áp dụng":"Tắt"}])
      })
  },[data1])
  useEffect(()=>{
    setCsvReport({
      data: csvData,
      headers: headerCsv,
      filename: 'Danhsachgoive.csv'
    })
  },[csvData])
  const [check,setCheck] = useState(false)
  const handleClick = ()=>{
    setCheck(false)
    handleOverlay()
  }
  const [item,setitem] = useState()
  const handleClick1 = (current)=>{
    setitem(current)
    setCheck(true)
    handleOverlay()
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
  const handleCancel = ()=>{
    handleOverlay()
  }
  
  const handle = (name,dateStart,dateEnd,price,combo,status)=>{
    handleOverlay()
    set(ref(db,`packageList/${checkPackage-1}`),{
      id:checkPackage,
      codePackage:"ALT20210501",
      combo:combo>0?combo:'',
      dateEnd:`${dateEnd} 23:00:00`,
      dateStart:`${dateStart} 08:00:00`,
      namePackage:name,
      price:~~price,
      status:status=='Đang áp dụng'?1:2
    })
    set(ref(db,'checkPackage'),{
      id:checkPackage+1
    })
  }
  const handle1 = (name,dateStart,dateEnd,price,combo,status)=>{
    handleOverlay()
    set(ref(db,`packageList/${item.id-1}`),{
      id:item.id,
      codePackage:"ALT20210501",
      combo:combo?combo:item.combo,
      dateEnd:dateEnd?`${dateEnd} 23:00:00`:item.dateEnd,
      dateStart:dateStart?`${dateStart} 08:00:00`:item.dateStart,
      namePackage:item.namePackage,
      price:price?~~price:item.price,
      status:status=='Đang áp dụng'?1:2
    })
  }
  function formatMoney(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return (
    <div className='setting'>
      <div className='setting__container'>
        {
          setting&&!check&&<UpdatePackage handle={handle} handleCancel={handleCancel}/>
        }
        {
          setting&&check&&<UpdatePackage handle={handle1} handleCancel={handleCancel} event/>
        }
      <h1>Danh sách gói vé</h1>
        <div className='setting__top'>
          <Search placeholde='Tìm bằng số vé' input='small' />
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
            
            <Btn text='Thêm gói vé' active='true' handleClick={handleClick}/>
          </div>
        </div>
        <div className='setting__bottom'>
            <table  className='setting__table'>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã gói</th>
                  <th>Tên gói vé</th>
                  <th>Ngày áp dụng</th>
                  <th>Ngày hết hạn</th>
                  <th>Giá vé (VNĐ/Vé)</th>
                  <th>Giá Combo (VNĐ/Combo)</th>
                  <th>Tình trạng</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  currentItems&&currentItems.map((current,index)=>[
                    <tr key={index} style={index%2?{backgroundColor:'#F7F8FB'}:{backgroundColor:'#FFFFFF'}}>
                      <td>{current.id}</td>
                      <td>{current.codePackage}</td>
                      <td>{current.namePackage}</td>
                      <td>{current.dateStart}</td>
                      <td>{current.dateEnd}</td>
                      <td>{formatMoney(~~current.price)}VNĐ</td>
                      <td>{current.combo&&current.combo==0?"":current.combo&&formatMoney(~~current.combo)+"VNĐ/4 Vé"}</td>
                      <td><Status status={current.status} text={current.status==2?'Tắt':'Đang áp dụng'} dot={current.status==2?dot1:dot} /></td>
                      <td onClick={()=>handleClick1(current)}><div><img src={edit} ></img><span>Cập nhật</span></div></td>
                    </tr>
                  ])
                }
              </tbody>
            </table>
            <Pagigation handlePageClick={handlePageClick} pageCount={pageCount}/>
          </div>
      </div>
    </div>
  )
}

export default Setting