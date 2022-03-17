import React from 'react'
import search from '../assets/Vector.png'
import '../sass/search.scss'
function Search({placeholde,input}) {
  return (
    <div className='search' style={!input?{width: '470px'}:{width: '446px'}}>
        <input placeholder={placeholde} />
        <img src={search}></img>
    </div>
  )
}

export default Search