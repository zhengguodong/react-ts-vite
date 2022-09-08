import React from 'react'
import {BackTop, Tag} from "antd"
import question from "./index.module.less"
import SearchBar from "../../components/SearchBar/index"
const style: React.CSSProperties = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
};
function index() {
  let options:Array<any> = ['all','JavaScript','TypeScript','Vue','React','Mysql','Mongodb','Java','SpringBoot','others']
  let getDataList=(val:number)=>{
      console.log(val);
  }
  return (
    <div className={question.box}>
      <div className={question.title}>
        <SearchBar options={options}/>
      </div>
        <div style={{"marginLeft":"10px"}}>
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>
            <Tag color="lime">lime</Tag>
            <Tag color="green">green</Tag>
            <Tag color="cyan">cyan</Tag>
            <Tag color="blue">blue</Tag>
            <Tag color="geekblue">geekblue</Tag>
            <Tag color="purple">purple</Tag>
        </div>
      <div className={question.mainBox}>
          {
            [1,2,3,4,7,7,7,7,7,7,7,7,7,7,7,7].map((x :any,index:number)=>{
              return (
                <div className={question.item} key={index}>
                    <h2 style={{"paddingTop":"10px","marginLeft":"10px","fontWeight":"400"}}>title</h2>
                    <h4 style={{"paddingTop":"10px","marginLeft":"10px","fontWeight":"300"}}> 提出者：zgd  <span style={{"marginLeft":"50px"}}>状态:</span></h4>
                    <h4 style={{"paddingTop":"10px","marginRight":"15px","fontWeight":"300","float":"right"}}> 发布于  xxx年xx月xx日</h4>
                </div>
              )
            })
          }
      </div>
        <BackTop>
            <div style={style}>UP</div>
        </BackTop>
    </div>
  )
}

export default index
