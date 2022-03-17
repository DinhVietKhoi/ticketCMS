import React from 'react'
import '../sass/avatar.scss'
function Avatar({avatar}) {
  return (
    <div className='avatar'>
        <img src={avatar}></img>
    </div>
  )
}

export default Avatar