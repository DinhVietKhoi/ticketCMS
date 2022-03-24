import React from 'react'
import '../sass/navigation.scss'
function Navigation() {
  return (
    <div className='navigation'>
            <i className="fa-solid fa-caret-left"></i>
            <div className='navigation--numberPage'>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>...</span>
              <span>20</span>
            </div>
            <i className="fa-solid fa-caret-right"></i>
          </div>
  )
}

export default Navigation