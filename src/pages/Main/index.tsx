import React,{useState,useEffect} from 'react'
import { Carousel,Divider } from 'antd';
import main from "./index.module.less"  
import {DoubleRightOutlined} from "@ant-design/icons"
const contentStyle: React.CSSProperties = {
  height: '240px ',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  borderRadius:'4px',
};
const index:React.FC=()=>{
  const [articleList,setArticleList]=useState<Array<any>>([{
    title:'a test title',
    url:'\/article\/1'
  },{
    title:'a test title',
    url:'\/article\/1'
  },{
    title:'a test title',
    url:'\/article\/1'
  },{
    title:'a test title',
    url:'\/article\/1'
  },{
    title:'a test title',
    url:'\/article\/1'
  },{
    title:'a test title',
    url:'\/article\/1'
  },{
    title:'a test title',
    url:'\/article\/1'
  },{
    title:'a test title',
    url:'\/article\/1'
  },{
    title:'a test title',
    url:'\/article\/1'
  },{
    title:'a test title',
    url:'\/article\/1'
  }])
  return (
    <div className={main.outBox}>
        <Carousel autoplay style={{"margin":"0 auto"}}>
          <div>
            <div style={contentStyle} >1</div>
          </div>
          <div>
            <h3 style={contentStyle} >1</h3>
          </div>
          <div>
            <h3 style={contentStyle} >1</h3>
          </div>
          <div>
            <h3 style={contentStyle} >1</h3>
          </div>
        </Carousel>
        <Divider />
        <div className={main.mainBox}>
            <div className={main.left_box}>
              <span style={{"fontWeight":"600","fontSize":"16px"}}>文章列表</span><DoubleRightOutlined />
              {
                articleList.map(x=>{
                  return(
                    <div style={{"fontWeight":"400","margin":"10px","fontSize":"16px"}}>
                      {articleList[0].title}-----{articleList[0].url}
                    </div>
                  )
                })
              }
            </div>
            <div>
              <Divider type="vertical" style={{"height":"500px"}}/>
            </div>
            <div className={main.right_box}>
              <span style={{"fontWeight":"600","fontSize":"16px"}}>成果展示</span><DoubleRightOutlined />
              {
                articleList.map(x=>{
                  return(
                    <div style={{"fontWeight":"400","margin":"10px","fontSize":"16px"}}>
                      {articleList[0].title}-----{articleList[0].url}
                    </div>
                  )
                })
              }
            </div>
        </div>
    </div>
  )
}

export default index