import React from 'react'
import '../sass/lineChart.scss'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function LineChart() {

    const dataChart = [
        {
            date: 1,
            revenue: 109
        },
        {
            date: 2,
            revenue: 139
        },
        {
            date: 3,
            revenue: 119
        },
        {
            date: 4,
            revenue: 169
        },
        {
            date: 5,
            revenue: 199
        },
        {
            date: 6,
            revenue: 169
        },
        {
            date: 7,
            revenue: 129
        },
        {
            date: 8,
            revenue: 229
        },
        {
            date: 9,
            revenue: 179
        },
        {
            date: 10,
            revenue: 189
        },
        {
            date: 11,
            revenue: 129
        },
        {
            date: 12,
            revenue: 119
        },
        {
            date: 13,
            revenue: 229
        },
        {
            date: 14,
            revenue: 169
        },
        {
            date: 15,
            revenue: 159
        },
        {
            date: 16,
            revenue: 169
        },
        {
            date: 17,
            revenue: 159
        },
        {
            date: 18,
            revenue: 149
        },
        {
            date: 19,
            revenue: 159
        },
        {
            date: 20,
            revenue: 199
        },
        {
            date: 21,
            revenue: 139
        },
        {
            date: 22,
            revenue: 229
        },
        {
            date: 23,
            revenue: 149
        },
        {
            date: 24,
            revenue: 179
        },
        {
            date: 25,
            revenue: 169
        },
        {
            date: 26,
            revenue: 179
        },
        {
            date: 27,
            revenue: 189
        },
        {
            date: 28,
            revenue: 179
        },
        {
            date: 29,
            revenue: 179
        },
        {
            date: 30,
            revenue: 229
        },
        {
            date: 31,
            revenue: 219
        },
        {
            date: 32,
            revenue: 259
        },
        {
            date: 33,
            revenue: 179
        },
        {
            date: 34,
            revenue: 229
        },
        {
            date: 35,
            revenue: 279
        }
    ]
    const data = [
        {
          name: 'Thứ 2',
          uv: 150,
        },
        {
          name: 'Thứ 3',
          uv: 175,
          
        },
        {
          name: 'Thứ 4',
          uv: 155,
        
        },
        {
          name: 'Thứ 5',
          uv: 230,
          
        },
        {
          name: 'Thứ 6',
          uv: 200,
          
        },
        {
          name: 'Thứ 7',
          uv: 220,
          
        },
        {
          name: 'Chủ nhật',
          uv: 185,
         
        },
      ];
  return (
    <div className='line-chart'>
        <ResponsiveContainer width={"100%"} height="100%" >
            <AreaChart
                width={"100%"} 
                height="100%"
                data={data}
                margin={{
                top: 10,
                right: 0,
                left: 40,
                bottom: 20,
                }}
            >   
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FE9E49" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#FE9E49" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FE9E49" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#FE9E49" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid horizontal="true" vertical="" stroke='#ECE9F1'/>
                <XAxis dy={20} dataKey="name" stroke="#888888"/>
                <YAxis dx={-40} stroke="#888888" dataKey="" unit="tr" tickCount={4} domain={[140,'auto']}/>
                <Tooltip cursor={false}/>
                <Area strokeWidth={4} radius="12" type="monotone" dataKey="uv" stroke="#FF993C" fillOpacity={0.3} fill="url(#colorUv)" />
            </AreaChart>
        </ResponsiveContainer>
    </div>
    
  )
}

export default LineChart