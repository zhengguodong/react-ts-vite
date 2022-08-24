import React from 'react'
import  Nav from "./components/Nav"
import {Outlet} from "react-router-dom"
import "./index.less"
import msg from "../assets/icons/msg.png"
import study from "../assets/icons/study.svg"
import {
  GithubOutlined,WechatOutlined,QqOutlined
} from '@ant-design/icons';
function index() {
  return (
    <div className='layOut_out'>
        <Nav></Nav>
        <div className="mainBox">
            <div className='leftBox'></div>
            <div className='midBox'>
              <Outlet></Outlet>
            </div>
            <div className='rightBox'>
              <div className='item_header'>
                <span style={{"fontSize":"12px","fontWeight":"600","marginBottom":"5px"}}>
                  更多信息请查询
                </span>
                <div>
                  <GithubOutlined /> ：zhengguodong
                </div>
                <div>
                   <WechatOutlined /> ：zhengguodong1008
                </div>
                <div>
                  <QqOutlined /> ：571954027
                </div>
              <div style={{"width":"80px","height":"80px","backgroundColor":"pink","position":"absolute","top":"10px","right":"10px"}}>
                  <img src={msg} alt="" style={{"width":"100%","objectFit":"cover"}}/>
              </div>
              </div>
              <div className='item_mid'>
                <div style={{"paddingTop":"20px","marginLeft":"15px"}}>
                  这是一个不断学习的过程<img src={study} alt="" style={{"width":"30px","objectFit":"cover","marginLeft":"30px"}}/>
                </div>
              </div>
              <div className='item_bottom'>
                
              </div>
            </div>
        </div>
    </div>
  )
}

export default index