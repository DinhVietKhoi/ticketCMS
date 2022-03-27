import React from 'react'
import '../sass/header.scss'
import avatar from '../assets/avatar.jpg'
import Avatar from './Avatar'
import bell from '../assets/fi_bell.png'
import mail from '../assets/fi_mail.png'
import { Link } from 'react-router-dom'
import Search from './Search'
function Header() {
  return (
    <div className='header'>
        <Search placeholde='search'/>
        <div className='header__noti'>
          <img src={mail}></img>
          <img src={bell}></img>
          <Avatar avatar={avatar}/>
        </div>
    </div>
  )
}

export default Header