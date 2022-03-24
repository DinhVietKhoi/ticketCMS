import React from 'react'
import '../sass/updatePackage.scss'
import Calendar from './Calendar'
import TimeCLock from './TimeCLock'
function UpdatePackage({event,handleOverlay,}) {
  return (
    <div className='updatePackage'>
        <div className='updatePackage__container'>
            {
                event?<h1>Cập nhật thông tin gói vé</h1>:<h1>Thêm gói vé</h1>
            }
            {
                event
                ?
                <div className='updatePackage__event'>
                    <div className='updatePackage__event--group'>
                        <h3>Mã sự kiện<span>*</span></h3>
                        <input value='PKG20210502'/>
                    </div>
                    <div className='updatePackage__event--group'>
                        <h3>Tên sự kiện</h3>
                        <input value='Hội chợ triển lãm hàng tiêu dùng 2021'/>
                    </div>
                </div>
                :
                <div className='updatePackage__family'>
                    <div className='updatePackage__family--group'>
                        <h3>Tên gói vé<span>*</span></h3>
                        <input placeholder='Nhập tên gói vé'/>
                    </div>
                </div>
            }
                <div className='updatePackage__date'>
                    <div className='updatePackage__date--group'>
                        <h3>Ngày áp dụng</h3>
                        <div className='updatePackage__date--group--time'>
                            <Calendar />
                            <TimeCLock />
                        </div>
                    </div>
                    <div className='updatePackage__date--group'>
                        <h3>Ngày hết hạn</h3>
                        <div className='updatePackage__date--group--time'>
                            <Calendar />
                            <TimeCLock />
                        </div>
                    </div>
                </div>
                <div className='updatePackage__price'>
                    <h3>Giá vé áp dụng</h3>
                    <div className='updatePackage__price--group'>
                        <input type='checkbox'></input>
                        <span>Vé lẻ (vnđ/vé) với giá</span>
                        <input placeholder='Giá vé'></input>
                        <span>/ vé</span>
                    </div>
                    <div className='updatePackage__price--group'>
                        <input type='checkbox'></input>
                        <span>Combo vé với giá</span>
                        <input placeholder='Giá vé'></input>
                        <span>/</span>
                        <input placeholder='Giá vé'></input>
                        <span>/ vé</span>
                    </div>
                </div>
                <div className='updatePackage__status'>
                    <h3>Tình trạng</h3>
                    <select>
                        <option>Đang áp dụng</option>
                        <option>Tắt</option>
                    </select>
                </div>
                <div className='updatePackage__note'>
                    <span>*</span>
                    <span>là thông tin bắt buộc</span>
                </div>
                <div className='updatePackage__btn'>
                    <div onClick={handleOverlay} className='updatePackage__btn-child updatePackage__btn--break'>
                        Hủy
                    </div>
                    <div onClick={handleOverlay} className='updatePackage__btn-child updatePackage__btn--save'>
                        Lưu
                    </div>
                </div>
        </div>
    </div>
  )
}

export default UpdatePackage