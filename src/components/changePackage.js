import React from 'react'

function changePackage() {
  return (
    <div className='changePackage'>
          <span onClick={handleClick} className={className}>Gói gia đình</span>
          <span onClick={handleClick1} className={className1}>Gói sự kiện</span>
        </div>
  )
}

export default changePackage