import React, {useState, useEffect} from 'react'
import '../sass/lineChart.scss'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
function LineChart({data1,handleMoney,arrDate,month,year,day,firstDate1, lastDate1, t2, t3, t4, t5 ,t6}) {
   const [money,setMoney] = useState(0)
   const [money1,setMoney1] = useState(0)
   const [money2,setMoney2] = useState(0)
   const [money3,setMoney3] = useState(0)
   const [money4,setMoney4] = useState(0)
   const [money5,setMoney5] = useState(0)
   const [money6,setMoney6] = useState(0)
   const [money7,setMoney7] = useState(0)
   const [name,setName] = useState('')
   const [name1,setName1] = useState('')
   const [name2,setName2] = useState('')
   const [name3,setName3] = useState('')
   const [name4,setName4] = useState('')
   const [name5,setName5] = useState('')
   const [name6,setName6] = useState('')
   const [name7,setName7] = useState('')
   const [data,setData] = useState()
   const [dateArrFormat,setdateArrFormat] = useState('')
   let getDateArray = function(start, end) {
    var arr = [];
    var dt = new Date(start);
    while (dt <= end) {
        arr.push(new Date(dt));
        dt.setDate(dt.getDate() + 1);
    }
    return arr;
}
    useEffect(()=>{
            let dem2=0;
            let dem3=0;
            let dem4=0;
            let dem5=0;
            let dem6=0;
            let dem7=0;
            let demcn=0;
            setMoney7(0)
            setMoney6(0)
            setMoney5(0)
            setMoney(0)
            setMoney1(0)
            setMoney2(0)
            setMoney3(0)
            setMoney4(0)
        if(firstDate1===''){
            if(arrDate.length===35){
                setName(`${arrDate[0]}/${month} - ${arrDate[6]}/${month}`)
                setName1(`${arrDate[7]}/${month} - ${arrDate[13]}/${month}`)
                setName2(`${arrDate[14]}/${month} - ${arrDate[20]}/${month}`)
                setName3(`${arrDate[21]}/${month} - ${arrDate[27]}/${month}`)
                setName4(`${arrDate[28]}/${month} - ${arrDate[34]}/${month}`)

                let startDate = new Date(`${year}/${month}/${arrDate[0]}`); 
                let endDate = new Date(`${year}/${month}/${arrDate[6]}`); 
                
                let startDate1 = new Date(`${year}/${month}/${arrDate[7]}`); 
                let endDate1 = new Date(`${year}/${month}/${arrDate[13]}`); 
                let startDate2 = new Date(`${year}/${month}/${arrDate[14]}`); 
                let endDate2 = new Date(`${year}/${month}/${arrDate[20]}`); 
                let startDate3 = new Date(`${year}/${month}/${arrDate[21]}`); 
                let endDate3 = new Date(`${year}/${month}/${arrDate[27]}`); 
                let startDate4 = new Date(`${year}/${month}/${arrDate[28]}`); 
                let endDate4 = new Date(`${year}/${month}/${arrDate[34]}`); 
                if(arrDate[0]>20){
                    startDate = new Date(`${year}/${month-1}/${arrDate[0]}`); 
                    setName(`${arrDate[0]}/${month-1} - ${arrDate[6]}/${month}`)
                    
                }
                if (arrDate[34]<7){
                    endDate4 = new Date(`${year}/${month+1}/${arrDate[34]}`); 
                    setName4(`${arrDate[28]}/${month} - ${arrDate[34]}/${month+1}`)
                }
                let dateArr = getDateArray(startDate, endDate);
                let dateArr1 = getDateArray(startDate1, endDate1);
                let dateArr2 = getDateArray(startDate2, endDate2);
                let dateArr3 = getDateArray(startDate3, endDate3);
                let dateArr4 = getDateArray(startDate4, endDate4);
                
                let dateArrFormat = []
                let dateArrFormat1 = []
                let dateArrFormat2 = []
                let dateArrFormat3 = []
                let dateArrFormat4 = []
                dateArr.map(da=>{
                    let date = da.getDate()<10?`0${da.getDate()}`:`${da.getDate()}`
                    let month = da.getMonth()+1<10?`0${da.getMonth()+1}`:`${da.getMonth()+1}`
                    setdateArrFormat(pre=>[...pre,`${date}/${month}/${da.getFullYear()}`])
                    dateArrFormat.push(`${date}/${month}/${da.getFullYear()}`)
                })
                dateArr1.map(da=>{
                    let date = da.getDate()<10?`0${da.getDate()}`:`${da.getDate()}`
                    let month = da.getMonth()+1<10?`0${da.getMonth()+1}`:`${da.getMonth()+1}`
                    dateArrFormat1.push(`${date}/${month}/${da.getFullYear()}`)
                })
                dateArr2.map(da=>{
                    let date = da.getDate()<10?`0${da.getDate()}`:`${da.getDate()}`
                    let month = da.getMonth()+1<10?`0${da.getMonth()+1}`:`${da.getMonth()+1}`
                    dateArrFormat2.push(`${date}/${month}/${da.getFullYear()}`)
                })
                dateArr3.map(da=>{
                    let date = da.getDate()<10?`0${da.getDate()}`:`${da.getDate()}`
                    let month = da.getMonth()+1<10?`0${da.getMonth()+1}`:`${da.getMonth()+1}`
                    dateArrFormat3.push(`${date}/${month}/${da.getFullYear()}`)
                })
                dateArr4.map(da=>{
                    let date = da.getDate()<10?`0${da.getDate()}`:`${da.getDate()}`
                    let month = da.getMonth()+1<10?`0${da.getMonth()+1}`:`${da.getMonth()+1}`
                    dateArrFormat4.push(`${date}/${month}/${da.getFullYear()}`)
                })
                
                data1&&data1.map(dt=>{
                    dt.map(l=>{
                        dateArrFormat.map(l1=>{
                            if(l.dateUse === l1){
                                console.log(l1)
                                setMoney(pre=>pre+90000)
                            }
                        })
                        dateArrFormat1.map(l1=>{
                            if(l.dateUse === l1){
                                console.log(l1)
                                setMoney1(pre=>pre+90000)
                            }
                        })
                        dateArrFormat2.map(l1=>{
                            if(l.dateUse === l1){
                                console.log(l1)
                                setMoney2(pre=>pre+90000)
                            }
                        })
                        dateArrFormat3.map(l1=>{
                            if(l.dateUse === l1){
                                console.log(l1)
                                setMoney3(pre=>pre+90000)
                            }
                        })
                        dateArrFormat4.map(l1=>{
                            if(l.dateUse === l1){
                                console.log(l1)
                                setMoney4(pre=>pre+90000)
                            }
                        })
                    })
                })
            }
            else{
                setName(`${arrDate[0]}/${month} - ${arrDate[6]}/${month}`)
                setName1(`${arrDate[7]}/${month} - ${arrDate[13]}/${month}`)
                setName2(`${arrDate[14]}/${month} - ${arrDate[20]}/${month}`)
                setName3(`${arrDate[21]}/${month} - ${arrDate[27]}/${month}`)
                setName4(`${arrDate[28]}/${month} - ${arrDate[34]}/${month}`)
                setName5(`${arrDate[35]}/${month} - ${arrDate[41]}/${month}`)

                let startDate = new Date(`${year}/${month}/${arrDate[0]}`); 
                let endDate = new Date(`${year}/${month}/${arrDate[6]}`); 
                
                let startDate1 = new Date(`${year}/${month}/${arrDate[7]}`); 
                let endDate1 = new Date(`${year}/${month}/${arrDate[13]}`); 
                let startDate2 = new Date(`${year}/${month}/${arrDate[14]}`); 
                let endDate2 = new Date(`${year}/${month}/${arrDate[20]}`); 
                let startDate3 = new Date(`${year}/${month}/${arrDate[21]}`); 
                let endDate3 = new Date(`${year}/${month}/${arrDate[27]}`); 
                let startDate4 = new Date(`${year}/${month}/${arrDate[28]}`); 
                let endDate4 = new Date(`${year}/${month}/${arrDate[34]}`);
                let startDate5 = new Date(`${year}/${month}/${arrDate[35]}`); 
                let endDate5 = new Date(`${year}/${month}/${arrDate[41]}`);  
                if(arrDate[0]>20){
                    startDate = new Date(`${year}/${month-1}/${arrDate[0]}`); 
                    setName(`${arrDate[0]}/${month-1} - ${arrDate[6]}/${month}`)
                    
                }
                if (arrDate[41]<7){
                    endDate5 = new Date(`${year}/${month+1}/${arrDate[41]}`); 
                    setName5(`${arrDate[35]}/${month} - ${arrDate[41]}/${month+1}`)
                }
                let dateArr = getDateArray(startDate, endDate);
                let dateArr1 = getDateArray(startDate1, endDate1);
                let dateArr2 = getDateArray(startDate2, endDate2);
                let dateArr3 = getDateArray(startDate3, endDate3);
                let dateArr4 = getDateArray(startDate4, endDate4);
                let dateArr5 = getDateArray(startDate5, endDate5);
                
                let dateArrFormat = []
                let dateArrFormat1 = []
                let dateArrFormat2 = []
                let dateArrFormat3 = []
                let dateArrFormat4 = []
                let dateArrFormat5 = []
                dateArr.map(da=>{
                    let date = da.getDate()<10?`0${da.getDate()}`:`${da.getDate()}`
                    let month = da.getMonth()+1<10?`0${da.getMonth()+1}`:`${da.getMonth()+1}`
                    setdateArrFormat(pre=>[...pre,`${date}/${month}/${da.getFullYear()}`])
                    dateArrFormat.push(`${date}/${month}/${da.getFullYear()}`)
                })
                dateArr1.map(da=>{
                    let date = da.getDate()<10?`0${da.getDate()}`:`${da.getDate()}`
                    let month = da.getMonth()+1<10?`0${da.getMonth()+1}`:`${da.getMonth()+1}`
                    dateArrFormat1.push(`${date}/${month}/${da.getFullYear()}`)
                })
                dateArr2.map(da=>{
                    let date = da.getDate()<10?`0${da.getDate()}`:`${da.getDate()}`
                    let month = da.getMonth()+1<10?`0${da.getMonth()+1}`:`${da.getMonth()+1}`
                    dateArrFormat2.push(`${date}/${month}/${da.getFullYear()}`)
                })
                dateArr3.map(da=>{
                    let date = da.getDate()<10?`0${da.getDate()}`:`${da.getDate()}`
                    let month = da.getMonth()+1<10?`0${da.getMonth()+1}`:`${da.getMonth()+1}`
                    dateArrFormat3.push(`${date}/${month}/${da.getFullYear()}`)
                })
                dateArr4.map(da=>{
                    let date = da.getDate()<10?`0${da.getDate()}`:`${da.getDate()}`
                    let month = da.getMonth()+1<10?`0${da.getMonth()+1}`:`${da.getMonth()+1}`
                    dateArrFormat4.push(`${date}/${month}/${da.getFullYear()}`)
                })
                dateArr5.map(da=>{
                    let date = da.getDate()<10?`0${da.getDate()}`:`${da.getDate()}`
                    let month = da.getMonth()+1<10?`0${da.getMonth()+1}`:`${da.getMonth()+1}`
                    dateArrFormat5.push(`${date}/${month}/${da.getFullYear()}`)
                })

                data1&&data1.map(dt=>{
                    dt.map(l=>{
                        dateArrFormat.map(l1=>{
                            if(l.dateUse === l1){
                                console.log(l1)
                                setMoney(pre=>pre+90000)
                            }
                        })
                        dateArrFormat1.map(l1=>{
                            if(l.dateUse === l1){
                                console.log(l1)
                                setMoney1(pre=>pre+90000)
                            }
                        })
                        dateArrFormat2.map(l1=>{
                            if(l.dateUse === l1){
                                console.log(l1)
                                setMoney2(pre=>pre+90000)
                            }
                        })
                        dateArrFormat3.map(l1=>{
                            if(l.dateUse === l1){
                                console.log(l1)
                                setMoney3(pre=>pre+90000)
                            }
                        })
                        dateArrFormat4.map(l1=>{
                            if(l.dateUse === l1){
                                console.log(l1)
                                setMoney4(pre=>pre+90000)
                            }
                        })
                        dateArrFormat5.map(l1=>{
                            if(l.dateUse === l1){
                                console.log(l1)
                                setMoney5(pre=>pre+90000)
                            }
                        })
                    })
                })
            }
            
        }
        else {
            data1&&data1.map(dt=>{
                dt.map(l=>{
                        if(l.dateUse===t2){
                            dem2+=90000;
                        }
                        if(l.dateUse===t3){

                            dem3+=90000;

                        }
                        if(l.dateUse===t4){

                            dem4+=90000;

                        }
                        if(l.dateUse===t5){

                            dem5+=90000;

                        }
                        if(l.dateUse===t6){

                            dem6+=90000;

                        }
                        if(l.dateUse===firstDate1){

                            demcn+=90000;
                        }
                        if(l.dateUse===lastDate1){

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
        if(firstDate1===''){
            if(arrDate.length===35){
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
                    }
                ])
            }
            else {
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
                    }
                ])
            }
            
        }
        else{
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
                }
            ])
        }
        let data = money+money1+money2+money3+money4+money5+money6+money7;
        handleMoney(data);
    },[name,money,money1,money2,money3,money4,money5,money6,money7])
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