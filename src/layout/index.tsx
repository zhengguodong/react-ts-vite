import React from 'react'
import  Nav from "./components/Nav"
import {Outlet} from "react-router-dom"
import "./index.less"
import msg from "../assets/icons/msg.png"
import study from "../assets/icons/study.svg"
import person1 from "../assets/icons/person1.svg"
import person2 from "../assets/icons/person2.svg"
import person3 from "../assets/icons/person3.svg"
import person4 from "../assets/icons/person4.svg"
import person5 from "../assets/icons/person5.svg"
import person6 from "../assets/icons/person6.svg"
import person7 from "../assets/icons/person7.svg"
import person8 from "../assets/icons/person8.svg"
import person9 from "../assets/icons/person9.svg"
import {
  GithubOutlined,WechatOutlined,QqOutlined
} from '@ant-design/icons';
import {Button} from "antd"
import man from "../assets/icons/man.svg"
import help from "../assets/icons/help.svg"
function index() {
  return (
    <div className='layOut_out'>
        <Nav></Nav>
        <div className="mainBox">
          <div style={{"width":"220px","height":"400px","marginRight":"10px"}}>
            <div className='leftBox'>
                <img src={man} alt="" />
            </div>
          </div>
            <div className='midBox'>
              <Outlet></Outlet>
            </div>
            <div style={{"width":"300px","height":"800px","marginLeft":"auto"}}>
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
                <div>
                  <Button type="primary" style={{"width":"90%","margin":"30px 0 10px 10px"}}>发布文章</Button>
                </div>
                <div>
                  <Button danger style={{"width":"90%","margin":"10px 0 10px 10px"}}>记录问题</Button>
                </div>
              </div>
              <div className='item_bottom'>
                <img src={person1} alt="" style={{"width":"80px","margin":"10px"}}/>
                <img src={person2} alt="" style={{"width":"80px","margin":"10px"}}/>
                <img src={person3} alt="" style={{"width":"80px","margin":"10px"}}/>
                <img src={person4} alt="" style={{"width":"80px","margin":"10px"}}/>
                <img src={person5} alt="" style={{"width":"80px","margin":"10px"}}/>
                <img src={person6} alt="" style={{"width":"80px","margin":"10px"}}/>
                <img src={person7} alt="" style={{"width":"80px","margin":"10px"}}/>
                <img src={person8} alt="" style={{"width":"80px","margin":"10px"}}/>
                <img src={person9} alt="" style={{"width":"80px","margin":"10px"}}/>
              </div>
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default index