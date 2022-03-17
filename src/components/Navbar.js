import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../sass/navbar.scss'
import logo from '../assets/insight-05 1.png'
import vector0 from '../assets/Vector-0.png'
import vector1 from '../assets/Vector-1.png'
import vector2 from '../assets/Vector-2.png'
import vector3 from '../assets/Vector-3.png'
import vector4 from '../assets/Vector-4.png'
import vector5 from '../assets/Vector-5.png'
import vector01 from '../assets/Vector-0-1.png'
import vector11 from '../assets/Vector-1-1.png'
import vector21 from '../assets/Vector-2-1.png'
import vector31 from '../assets/Vector-3-1.png'
import vector41 from '../assets/Vector-4-1.png'
import vector51 from '../assets/Vector-5-1.png'
function Navbar() {
  return (
    <div className='nav'>
        <div className='nav__top'>
            <Link className='nav__logo' to="/">
                <img src={logo}></img>
            </Link>
            <div className='nav__menu'>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <NavLink to="/" className="nav__link">
                            <img src={vector0}></img>
                            <img src={vector01}></img>
                            <span>Trang chủ</span>
                        </NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink to="/TicketManager" className="nav__link">
                            <img src={vector1}></img>
                            <img src={vector11}></img>
                            <span>Quản lý vé</span>
                        </NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink to="/CheckTicket" className="nav__link">
                            <img src={vector2}></img>
                            <img src={vector21}></img>
                            <span>Đối soát vé</span>
                        </NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink to="/EventList" className="nav__link">
                            <img src={vector3}></img>
                            <img src={vector31}></img>
                            <span>Danh sách sự kiện</span>
                        </NavLink>
                    </li>
                    <li className='nav__item'>
                        <NavLink to="/DeviceManager" className="nav__link">
                            <img src={vector4}></img>
                            <img src={vector41}></img>
                            <span>Quản lý thiết bị</span>
                        </NavLink>
                        
                    </li>
                    <li className='nav__item'>
                        <NavLink to="/Setting" className="nav__link">
                            <img src={vector5}></img>
                            <img src={vector51}></img>
                            <span>Cài đặt</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <div className='nav__coppyright'>Coppyright &copy; 2020 Alta Software</div>
    </div>
  )
}

export default Navbar