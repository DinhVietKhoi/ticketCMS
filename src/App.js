import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Router from "./router/Router";
import './sass/app.scss'
import "./sass/base.scss"
function App() {
  const listTicker1 = [
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    }
  ]
  const listTicker = [
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Đã sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: false
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Chưa sử dụng',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    },
    {
      code: "ALT20210501" ,
      numberTicker: "123456789034",
      eventName: 'Hội chợ triển lãm tiêu dùng 2021',
      status: 'Hết hạn',
      dateUse: '14/04/2021',
      dateBuy: '14/04/2021',
      checkIn: 'Cổng 1',
      checkTicket: true
    }
  ]
  const [dataFamily,setDatafamily] = useState(listTicker1)
  const [dataEvent,setDataevent] = useState(listTicker)
  const [overlay,setOverlay] = useState(false)
  const [filter,setFilter] = useState(false)
  const [setting,setSetting] = useState(false)
  const handleOverlay = ()=>{
    setOverlay(!overlay)
    setFilter(!filter)
    setSetting(!filter)
  }
  return (
    <BrowserRouter>
        <div className="app">
        {
          overlay&&<div className='overlay' onClick={handleOverlay}></div>
        }

          <div className="app__left">
            <Navbar />
          </div>
          <div className="app__right">
            <Header />
            
            <Router handleOverlay={handleOverlay} filter={filter} setting={setting} dataEvent={dataEvent} dataFamily={dataFamily}/>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
