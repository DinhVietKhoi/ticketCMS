import React, { useEffect, useRef, useState } from 'react'
import 'chart.js/auto';
import dayjs, { Dayjs } from 'dayjs'
import {Chart as charts} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'react-chartjs-2';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import '../sass/circleChart.scss'
function CircleChart({dataa,firstDate,lastDate}) {
  charts.register(ChartDataLabels);
  const [lengthCSD,setLengthCSD] = useState()
  const [lengthDSD,setLengthDSD] = useState()
  const [lengthCSD1,setLengthCSD1] = useState()
  const [lengthDSD1,setLengthDSD1] = useState()
  const [dataLength,setDataLength] = useState([])
  const [dataLength1,setDataLength1] = useState([])

  useEffect(()=>{
    let startDate = new Date(firstDate); 
    let endDate = new Date(lastDate); 
    let getDateArray = function(start, end) {
        var arr = [];
        var dt = new Date(start);
        while (dt <= end) {
            arr.push(new Date(dt));
            dt.setDate(dt.getDate() + 1);
        }
        return arr;
    }
    let dateArr = getDateArray(startDate, endDate);
    let dateArrFormat = []
      dateArr.map(da=>{
        let date = da.getDate()<10?`0${da.getDate()}`:`${da.getDate()}`
        let month = da.getMonth()+1<10?`0${da.getMonth()+1}`:`${da.getMonth()+1}`
        dateArrFormat.push(`${date}/${month}/${da.getFullYear()}`)
      })
      let dataFinish = []
      let dataFinish1 = []
    dataa&&dataa.map((l,i)=>{
      i===0&&
        l.map(dt=>{

          dateArrFormat.map(dtt=>{
            if(dtt===dt.dateUse){
              dataFinish.push(dt)
            }
          })
        })
      i===1&&
        l.map(dt=>{
          dateArrFormat.map(dtt=>{
            if(dtt===dt.dateUse){
              dataFinish1.push(dt)
            }
          })
        })

    })
    setDataLength(dataFinish1)
    setDataLength1(dataFinish)
  },[dataa,firstDate,lastDate])



  useEffect(()=>{
    const CSD = dataLength&&dataLength.filter(l=>l.Status === 'CSD')
    const DSD = dataLength&&dataLength.filter(l=>l.Status === 'DSD')
    const CSD1 = dataLength1&&dataLength1.filter(l=>l.Status === 'CSD')
    const DSD1 = dataLength1&&dataLength1.filter(l=>l.Status === 'DSD')
    CSD&&setLengthCSD(CSD.length)
    DSD&&setLengthDSD(DSD.length)
    CSD1&&setLengthCSD1(CSD1.length)
    DSD1&&setLengthDSD1(DSD1.length)
  },[dataLength,dataLength1])




  let colorHex = ["#FF8A48","#4F75FF"];
    const data =
      {
        labels:['Vé chưa sử dụng','Vé đã sử dụng'],
        datasets: [
        {
          data: [lengthCSD,lengthDSD],
          backgroundColor: colorHex,
          borderWidth: 0, 
        },
      ]
    }
    const data2 =
      {
        labels:['Vé chưa sử dụng','Vé đã sử dụng'],
        datasets: [
        {
          data: [lengthCSD1,lengthDSD1],
          backgroundColor: colorHex,
          borderWidth: 0, 
        },
      ]
    }
    const options= {
      responsive: true,
      plugins:{
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Gói gia đình',
          color:'#1E0D03',
          font: {
            size:18
          },
          padding:{
            bottom:12
          },
          responsive:true,
          animation:{
            animateScale: true,
          }
        },
        datalabels: {
          color: '#1E0D03',
          anchor: 'end',
          align: 'start',
          offset: -28,
          borderWidth: 2,
          borderColor: '#F5F5F5',
          borderRadius: 10,
          backgroundColor: '#fff',
          padding: 12,
          labels: {
            title: {
              font: {
                weight: '400',
                size: '14'
              }
            }
          }
      }
    }
  }
  const options2= {
    responsive: true,
    plugins:{
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Gói sự kiện',
        color:'#1E0D03',
        font: {
          size:18
        },
        padding:{
          bottom:12
        },
        responsive:true,
        animation:{
          animateScale: true,
        }
      },
      datalabels: {
        color: '#1E0D03',
        anchor: 'end',
        align: 'start',
        offset: -28,
        borderWidth: 2,
        borderColor: '#F5F5F5',
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 12,
        labels: {
          title: {
            font: {
              weight: '400',
              size: '14'
            }
          }
        }
    }
  }
}
  return (
    <div className='circle__control'>
      <div className='circleChart'>
        <Chart type='doughnut' data={data} options={options} />
      </div>
      <div className='circleChart'>
        <Chart type='doughnut' data={data2} options={options2} />
      </div>
      <div className='circleLegend'>
        <span>Vé đã sử dụng</span>
        <span>Vé chưa sử dụng</span>
      </div>
    </div>
  )
}

export default CircleChart