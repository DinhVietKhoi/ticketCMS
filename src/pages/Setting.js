import React, { useState, useEffect } from 'react'
import { ref, set, getDatabase, onValue} from 'firebase/database'
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
  useEffect(()=>{
      setDataList(data1)
  },[data1])
  // console.log('data',data1)
  const [check,setCheck] = useState(false)
  const handleClick = ()=>{
    setCheck(false)
    handleOverlay()
  }
  const handleClick1 = ()=>{
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
  // console.log(currentItems)
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
  return (
    <div className='setting'>
      <div className='setting__container'>
        {
          setting&&!check&&<UpdatePackage handle={handle} handleCancel={handleCancel}/>
        }
        {
          setting&&check&&<UpdatePackage handle={handle} handleCancel={handleCancel} event/>
        }
      <h1>Danh sách gói vé</h1>
        <div className='setting__top'>
          <Search placeholde='Tìm bằng số vé' input='small' />
          <div className='ticketManager__handle'>
            <Btn text='Xuất file (.csv)'/>
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
                      <td>{current.price}.000 VNĐ</td>
                      <td>{current.combo&&current.combo+".000 VNĐ/4 Vé"}</td>
                      <td><Status status={current.status} text={current.status==2?'Tắt':'Đang áp dụng'} dot={current.status==2?dot1:dot} /></td>
                      <td onClick={handleClick1}><div><img src={edit} ></img><span>Cập nhật</span></div></td>
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