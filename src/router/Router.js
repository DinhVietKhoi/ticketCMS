import React from 'react'
import {Route,Routes} from 'react-router-dom'
import CheckTicket from '../pages/CheckTicket'
import DeviceManager from '../pages/DeviceManager'
import EventList from '../pages/EventList'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Setting from '../pages/Setting'
import TicketManager from '../pages/TicketManager'
function Router({handleOverlay,handleOverlay1,filter,dataEvent,dataFamily,setting,ticketList,data,data1,changeDate}) {
  return (
    <Routes> 
        <Route path="/" element={<Home data={data}/>}></Route>
        <Route path="/TicketManager" element={<TicketManager handleOverlay={handleOverlay} handleOverlay1={handleOverlay1} filter={filter} changeDate={changeDate} data={data}/>}></Route>
        <Route path="/CheckTicket" element={<CheckTicket data={data} />} ></Route>
        <Route path="/EventList" element={<EventList />}></Route>
        <Route path="/DeviceManager" element={<DeviceManager />}></Route>
        <Route path="/Setting" element={<Setting handleOverlay={handleOverlay} setting={setting} data1={data1}/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}

export default Router