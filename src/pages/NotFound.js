import React from 'react'
import { Link } from 'react-router-dom'
import nf from '../assets/notfound.jpg'
import '../sass/notfound.scss'
function NotFound() {
  return (
    <div className='not-found'>
      <img src={nf}></img>
      <Link to="/">BACK TO HOME</Link>
    </div>
  )
}

export default NotFound