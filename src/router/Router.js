import React from 'react'
import {Route,Routes} from 'react-router-dom'
import CheckTicket from '../pages/CheckTicket'
import DeviceManager from '../pages/DeviceManager'
import EventList from '../pages/EventList'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Setting from '../pages/Setting'
import TicketManager from '../pages/TicketManager'
function Router({handleOverlay,filter,dataEvent,dataFamily}) {
  return (
    <Routes> 
        <Route path="/" element={<Home />}></Route>
        <Route path="/TicketManager" element={<TicketManager handleOverlay={handleOverlay} filter={filter} dataEvent={dataEvent} dataFamily={dataFamily}/>}></Route>
        <Route path="/CheckTicket" element={<CheckTicket />} ></Route>
        <Route path="/EventList" element={<EventList />}></Route>
        <Route path="/DeviceManager" element={<DeviceManager />}></Route>
        <Route path="/Setting" element={<Setting />}></Route>
        <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}

export default Router