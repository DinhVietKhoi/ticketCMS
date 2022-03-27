import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ref, set, getDatabase, onValue} from 'firebase/database'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Router from "./router/Router";
import db from './firebase.js'
import './sass/app.scss'
import "./sass/base.scss"
function App() {
    const [data,setData] = useState()
    const [data1,setData1] = useState()
    useEffect(()=>{
    onValue((ref(db,'ticketList')),(snapshot)=>{
      const data = snapshot.val();
      const ticketList = Object.values(data)
      setData(ticketList)
    })
    onValue((ref(db,'packageList')),(snapshot)=>{
      const data1 = snapshot.val();
      const packageList = Object.values(data1)
      setData1(packageList)
    })
  },[])
  const [overlay,setOverlay] = useState(false)
  const [overlay1,setOverlay1] = useState(false)
  const [filter,setFilter] = useState(false)
  const [changeDate,setChangeDate] = useState(false)
  const [setting,setSetting] = useState(false)
  const handleOverlay = ()=>{
    setOverlay(!overlay)
    setFilter(!filter)
    setSetting(!filter)
  }
  const handleOverlay1 = ()=>{
    setOverlay1(!overlay1)
    setChangeDate(!changeDate)
  }
  return (
    <BrowserRouter>
        <div className="app">
        {
          overlay&&<div className='overlay' onClick={handleOverlay}></div>
        }
        {
          overlay1&&<div className='overlay' onClick={handleOverlay1}></div>
        }
          <div className="app__left">
            <Navbar />
          </div>
          <div className="app__right">
            <Header />
            
            <Router handleOverlay={handleOverlay} handleOverlay1={handleOverlay1} filter={filter} setting={setting} data={data} data1={data1} changeDate={changeDate}/>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
