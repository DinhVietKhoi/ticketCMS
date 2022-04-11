import React, { useState} from 'react'
import '../sass/updatePackage.scss'
import Calendar from './Calendar'
import TimeCLock from './TimeCLock'
function UpdatePackage({event,handle,handleCancel}) {
    
    const [name,setName] = useState("")
    const [dateStart,setDateStart] = useState('')
    const [dateEnd,setDateEnd] = useState('')
    const [price,setPrice] = useState('')
    const [status,setStatus] = useState('Đang áp dụng')
    const [combo,setCombo] = useState('')
    const [codeEvent,setCodeEvent] = useState('PKG20210502')
    const [nameEvent,setNameEvent] = useState('Hội chợ triển lãm hàng tiêu dùng 2021')
    const [priceNumber,setPriceNumber] = useState(true)
    const [comboNumber,setComboNumber] = useState(true)
    const handleGetDayJs = (dayACtive,monthACtive,yearACtive)=>{
        dayACtive<10&&(monthACtive+1)<10
        ?
        setDateStart(`0${dayACtive}/0${monthACtive+1}/${yearACtive}`)
        :
        dayACtive<10&&(monthACtive+1)>=10
        ?
        setDateStart(`0${dayACtive}/${monthACtive+1}/${yearACtive}`)
        :
        dayACtive>=10&&(monthACtive+1)<10
        ?
        setDateStart(`${dayACtive}/0${monthACtive+1}/${yearACtive}`)
        :
        setDateStart(`${dayACtive}/${monthACtive+1}/${yearACtive}`)
    }
    const handleGetDayJs1 = (dayACtive,monthACtive,yearACtive)=>{
        dayACtive<10&&(monthACtive+1)<10
        ?
        setDateEnd(`0${dayACtive}/0${monthACtive+1}/${yearACtive}`)
        :
        dayACtive<10&&(monthACtive+1)>=10
        ?
        setDateEnd(`0${dayACtive}/${monthACtive+1}/${yearACtive}`)
        :
        dayACtive>=10&&(monthACtive+1)<10
        ?
        setDateEnd(`${dayACtive}/0${monthACtive+1}/${yearACtive}`)
        :
        setDateEnd(`${dayACtive}/${monthACtive+1}/${yearACtive}`)
    }
    const handleCombo = ()=>{
        setCombo('')
        setComboNumber(!comboNumber)
    }
    const handlePrice = ()=>{
        setPrice('')
        setPriceNumber(!priceNumber)
    }
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
                        <input  value={codeEvent} onChange={(e)=>setCodeEvent(e)}/>
                    </div>
                    <div className='updatePackage__event--group'>
                        <h3>Tên sự kiện</h3>
                        <input value={nameEvent} onChange={(e)=>setCodeEvent(e)}/>
                    </div>
                </div>
                :
                <div className='updatePackage__family'>
                    <div className='updatePackage__family--group'>
                        <h3>Tên gói vé<span>*</span></h3>
                        <input placeholder='Nhập tên gói vé' onChange={(e)=>setName(e.target.value)}/>
                    </div>
                </div>
            }
                <div className='updatePackage__date'>
                    <div className='updatePackage__date--group'>
                        <h3>Ngày áp dụng</h3>
                        <div className='updatePackage__date--group--time'>
                            {
                                !event?<Calendar handleGetDayJs={handleGetDayJs} showDate/>:<Calendar handleGetDayJs={handleGetDayJs} hideDate/>
                            }
                            {
                                !event?<TimeCLock showTime/>:<TimeCLock hideTime/>
                            }

                        </div>
                    </div>
                    <div className='updatePackage__date--group'>
                        <h3>Ngày hết hạn</h3>
                        <div className='updatePackage__date--group--time'>
                        {
                                !event?<Calendar handleGetDayJs={handleGetDayJs1} showDate/>:<Calendar handleGetDayJs={handleGetDayJs1} hideDate/>
                            }
                            {
                                !event?<TimeCLock showTime/>:<TimeCLock hideTime/>
                            }
                        </div>
                    </div>
                </div>
                <div className='updatePackage__price'>
                    <h3>Giá vé áp dụng</h3>
                    <div className='updatePackage__price--group'>
                        <input type='checkbox' onChange={handlePrice}></input>
                        <span>Vé lẻ (vnđ/vé) với giá</span>
                        <input  disabled={priceNumber} placeholder='Giá vé' value={price} onChange={(e)=>setPrice(e.target.value)}></input>
                        <span>/ vé</span>
                    </div>
                    <div className='updatePackage__price--group'>
                        <input type='checkbox' onChange={handleCombo}></input>
                        <span>Combo vé với giá</span>
                        <input  disabled={comboNumber} placeholder='Giá vé' value={combo} onChange={(e)=>setCombo(e.target.value)}></input>
                        <span>/</span>
                        <input disabled placeholder='Số vé' value='4' ></input>
                        <span>/ vé</span>
                    </div>
                </div>
                <div className='updatePackage__status'>
                    <h3>Tình trạng</h3>
                    <select value={status} onChange={(e)=>setStatus(e.target.value)}>
                        <option >Đang áp dụng</option>
                        <option>Tắt</option>
                    </select>
                </div>
                <div className='updatePackage__note'>
                    <span>*</span>
                    <span>là thông tin bắt buộc</span>
                </div>
                <div className='updatePackage__btn'>
                    <div onClick={handleCancel} className='updatePackage__btn-child updatePackage__btn--break'>
                        Hủy
                    </div>
                    <div onClick={()=>handle(name,dateStart,dateEnd,price,comboNumber===false&&combo,status)} className='updatePackage__btn-child updatePackage__btn--save'>
                        Lưu
                        {/*price,combo,status */}
                    </div>
                </div>
        </div>
    </div>
  )
}

export default UpdatePackage