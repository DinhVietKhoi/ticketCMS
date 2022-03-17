import React from 'react'
import '../sass/status.scss'
function Status({status,text,dot}) {
  return (
    <>
        {
        status==0&&<div className='status' style={{border: '1px solid #919DBA', background: '#EAF1F8', color:'#919DBA'}}>
                        <div className='status__container'>
                            <img src={dot}></img>
                            <span>{text}</span>
                        </div>
                    </div>
        }
        {
        status==1&&<div className='status' style={{border: '1px solid #03AC00', background: '#DEF7E0', color:'#03AC00'}}>
                        <div className='status__container'>
                            <img src={dot}></img>
                            <span>{text}</span>
                        </div>
                    </div>
        }
        {
        status==2&&<div className='status' style={{border: '1px solid #FD5959', background: '#F8EBE8', color:'#FD5959'}}>
                        <div className='status__container'>
                            <img src={dot}></img>
                            <span>{text}</span>
                        </div>
                    </div>
        }
    </>
    
  )
}

export default Status