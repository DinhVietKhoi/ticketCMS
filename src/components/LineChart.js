import React, {useState, useEffect} from 'react'
import '../sass/lineChart.scss'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
function LineChart() {
    const data = [
        {
            name: 'Thứ 2',
            uv: 0.9,
        },
        {
            name: 'Thứ 3',
            uv: 5,
        },
        {
            name: 'Thứ 4',
            uv: 4,
        },
        {
            name: 'Thứ 5',
            uv: 3,
        },
        {
            name: 'Thứ 6',
            uv: 2,
        },
        {
            name: 'Thứ 7',
            uv: 0.5,
        },
        {
            name: 'Chủ nhật',
            uv: 0.5,
        },
    ];
    // const [test,setTest] = useState([]);
    // useEffect(()=>{
    //     data.map(l=>{
    //         setTest(pre=>([...pre,{'name':l.name,'uv':l.uv}]))
    //     })
    // },[])
    // console.log(test)
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
                    <YAxis dx={-40} stroke="#888888" dataKey="" unit="tr" tickCount={4} domain={[0,'auto']}/>
                    <Tooltip cursor={false}/>
                    <Area strokeWidth={4} radius="12" type="monotone" dataKey="uv" stroke="#FF993C" fillOpacity={0.3} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineChart