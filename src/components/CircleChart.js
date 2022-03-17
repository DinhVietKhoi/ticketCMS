import React, { useEffect, useRef } from 'react'
import 'chart.js/auto';
import {Chart as charts} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'react-chartjs-2';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import '../sass/circleChart.scss'
function CircleChart() {
  charts.register(ChartDataLabels);

  let colorHex = ["#FF8A48","#4F75FF"];
    const data =
      {
        labels:['Vé chưa sử dụng','Vé đã sử dụng'],
        datasets: [
        {
          data: [13568,56024],
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
          data: [28302,30256],
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