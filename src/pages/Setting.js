import React from 'react'
import Btn from '../components/Btn'
import Search from '../components/Search'
import Status from '../components/Status'
import dot from '../assets/Ellipse1.png'
import dot1 from '../assets/Ellipse2.png'
import edit from '../assets/fi_edit.png'
import '../sass/setting.scss'
function Setting() {
  return (
    <div className='setting'>
      <div className='setting__container'>
      <h1>Danh sách gói vé</h1>
        <div className='setting__top'>
          <Search placeholde='Tìm bằng số vé' input='small' />
          <div className='ticketManager__handle'>
            <Btn text='Xuất file (.csv)'/>
            <Btn text='Thêm gói vé' active='true'/>
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
                      <td><Status status='1' text='Đang áp dụng' dot={dot}/></td>
                      <td><div><img src={edit}></img><span>Cập nhật</span></div></td>
                    </tr>
                    <tr >
                      <td>2</td>
                      <td>ALT20210501</td>
                      <td>Gói sự kiện</td>
                      <td>14/04/2021 <br />08:00:00</td>
                      <td>14/04/2021 <br />23:00:00</td>
                      <td>20.000 VNĐ</td>
                      <td></td>
                      <td><Status status='2' text='Tắt' dot={dot1}/></td>
                      <td><div><img src={edit}></img><span>Cập nhật</span></div></td>
                    </tr>
              </tbody>
            </table>
          </div>
      </div>
    </div>
  )
}

export default Setting