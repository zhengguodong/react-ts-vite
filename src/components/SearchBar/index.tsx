import React,{useState} from 'react'
import {Button} from "antd"
import search  from "./index.module.less"
import classnames from 'classnames'
function index(props:any) {
    const [flag,setFlag]=useState<number>(0)
    const {options}=props
    let change=(val:number)=>{
        setFlag(val)
    }
  return (
    <div> 
        {
            (options as Array<string>).map((x,index)=>{
            return(
                <Button className={classnames(search.button_list,`${flag===index?search.button_main:null}`)} onClick={()=>change(index)} key={index}>{x}</Button>
            )
            })
        }
        </div>
    ) 
}

export default index