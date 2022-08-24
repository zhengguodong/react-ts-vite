import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import { Avatar,Popover,Button} from 'antd';
import "./nav.less"
interface typeList{
    label:String,
    path:String
}
function Nav() {
  const [routeList,setRouteList]=useState<Array<typeList>>([]);
  const navigate =useNavigate()
  const goPath=(val:String)=>{
    navigate(val as any);
  }
  useEffect(()=>{
    const list:Array<typeList>=[{
        label:"首页",
        path:'/login'
    },{
        label:"首页",
        path:'/login'
    }]
    setRouteList(list);
  },[])
  const out=()=>{
    navigate("/login")
  }
  const content=(
    <div>
        <Button type="link" onClick={out}>登出</Button>
    </div>
  )
  return (
    <div className='outBox'>
        <div className='item_1'>
            web3学习平台
        </div>
        <div style={{"width":"400px"}}>
        {
            routeList.map((x,index)=>{
                return (
                    <span onClick={()=>{goPath(x.path)}} style={{"color":"#fff","lineHeight":"50px","marginLeft":"20px","whiteSpace":"nowrap"}} key={index}>{x.label}</span>
                )
            })
        }
        </div>
        <div style={{"marginLeft":"auto","marginRight":"5%","lineHeight":"50px"}}>
        <Popover placement="bottom" content={content} trigger="click">
            <Avatar src="https://joeschmoe.io/api/v1/random" />
        </Popover>
          <span style={{"paddingLeft":"10px","color":"#fff"}}>
            登山人
          </span> 
        </div>
    </div>
  )
}

export default Nav