import React, { useState } from 'react'
import Btn from '../components/Btn'
import Search from '../components/Search'
import Status from '../components/Status'
import dot from '../assets/Ellipse1.png'
import dot1 from '../assets/Ellipse2.png'
import edit from '../assets/fi_edit.png'
import '../sass/setting.scss'
import UpdatePackage from '../components/UpdatePackage'
import Navigation from '../components/Navigation'
function Setting({handleOverlay,setting}) {
  const [check,setCheck] = useState(false)
  const handleClick = ()=>{
    setCheck(false)
    handleOverlay()
  }
  const handleClick1 = ()=>{
    setCheck(true)
    handleOverlay()
  }
  return (
    <div className='setting'>
      <div className='setting__container'>
        {
          setting&&!check&&<UpdatePackage handleOverlay={handleOverlay}/>
        }
        {
          setting&&check&&<UpdatePackage handleOverlay={handleOverlay} event/>
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
                    <tr >
                      <td>1</td>
                      <td>ALT20210501</td>
                      <td>Gói gia đình</td>
                      <td>14/04/2021 <br />08:00:00</td>
                      <td>14/04/2021 <br />23:00:00</td>
                      <td>90.000 VNĐ</td>
                      <td>360.000 VNĐ/4 Vé</td>
                      <td><Status status='1' text='Đang áp dụng' dot={dot} /></td>
                      <td onClick={handleClick1}><div><img src={edit} ></img><span>Cập nhật</span></div></td>
                    </tr>
                    <tr >
                      <td>2</td>
                      <td>ALT20210501</td>
                      <td>Gói sự kiện</td>
                      <td>14/04/2021 <br />08:00:00</td>
                      <td>14/04/2021 <br />23:00:00</td>
                      <td>20.000 VNĐ</td>
                      <td></td>
                      <td><Status status='2' text='Tắt' dot={dot1} /></td>
                      <td onClick={handleClick1}><div><img src={edit} ></img><span>Cập nhật</span></div></td>
                    </tr>
              </tbody>
            </table>
          <Navigation />
          </div>
      </div>
    </div>
  )
}

export default Setting