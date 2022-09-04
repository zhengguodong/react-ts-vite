import React from 'react'
import {Breadcrumb} from "antd"
import question from "./index.module.less"
import SearchBar from "../../components/SearchBar/index"
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
      <div className={question.mainBox}>
          {
            [1,2,3,4].map(x=>{
              return (
                <div className={question.item}>

                </div>
              )
            })
          }
      </div>

    </div>
  )
}

export default index