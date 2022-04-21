import React, {useState, useEffect} from 'react'
import '../sass/lineChart.scss'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
function LineChart({data1,day,firstDate1, lastDate1, t2, t3, t4, t5 ,t6}) {
   const [money,setMoney] = useState(0)
   const [money1,setMoney1] = useState(0)
   const [money2,setMoney2] = useState(0)
   const [money3,setMoney3] = useState(0)
   const [money4,setMoney4] = useState(0)
   const [money5,setMoney5] = useState(0)
   const [money6,setMoney6] = useState(0)
   const [name,setName] = useState('')
   const [name1,setName1] = useState('')
   const [name2,setName2] = useState('')
   const [name3,setName3] = useState('')
   const [name4,setName4] = useState('')
   const [name5,setName5] = useState('')
   const [name6,setName6] = useState('')
   const [data,setData] = useState()

    useEffect(()=>{
            let dem2=0;
            let dem3=0;
            let dem4=0;
            let dem5=0;
            let dem6=0;
            let dem7=0;
            let demcn=0;
        setMoney6(0)
        setMoney5(0)
        setMoney(0)
        setMoney1(0)
        setMoney2(0)
        setMoney3(0)
        setMoney4(0)
        if(typeof(firstDate1)===''){
            console.log(1)
        }
        else {
            
            data1&&data1.map(dt=>{
                dt.map(l=>{
                        if(l.dateUse===t2){
                            console.log(l)
                            dem2+=90000;
                        }
                        if(l.dateUse===t3){
                            console.log(l)

                            dem3+=90000;

                        }
                        if(l.dateUse===t4){
                            console.log(l)

                            dem4+=90000;

                        }
                        if(l.dateUse===t5){
                            console.log(l)

                            dem5+=90000;

                        }
                        if(l.dateUse===t6){
                            console.log(l)

                            dem6+=90000;

                        }
                        if(l.dateUse===firstDate1){
                            console.log(l)

                            demcn+=90000;
                        }
                        if(l.dateUse===lastDate1){
                            console.log(l)

                            dem7+=90000;
                        }
                    
                    
                })
                setMoney(dem2)
                setMoney1(dem3)
                setMoney2(dem4)
                setMoney3(dem5)
                setMoney4(dem6)
                setMoney6(dem7)
                setMoney5(demcn)

            })
            setName('Thứ 2')
            setName1('Thứ 3')
            setName2('Thứ 4')
            setName3('Thứ 5')
            setName4('Thứ 6')
            setName5('Thứ 7')
            setName6('Chủ nhật')
        }
        
        
    },[day, firstDate1,data1, lastDate1, t2, t3, t4, t5 ,t6])
    useEffect(()=>{
            setData([
                {
                    name: name,
                    uv: money/1000000,
                },
                {
                    name: name1,
                    uv: money1/1000000,
                },
                {
                    name: name2,
                    uv: money2/1000000,
                },
                {
                    name: name3,
                    uv: money3/1000000,
                },
                {
                    name: name4,
                    uv: money4/1000000,
                },
                {
                    name: name5,
                    uv: money5/1000000,
                },
                {
                    name: name6,
                    uv: money6/1000000,
                },
            ])
    },[name,money,money1,money2,money3,money4,money5,money6])
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