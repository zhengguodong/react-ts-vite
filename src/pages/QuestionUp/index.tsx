import React,{useState} from 'react'
import Editor from 'for-editor'
import {Input,Button, message, Select} from "antd"
import {useNavigate} from "react-router-dom"
function index() {
    const { Option } = Select;
    let navigate=useNavigate()
    const [value,setValue]=useState<any>('')
    const [title,setTitle]=useState<string>('')
    const [type,setType]=useState<string>('')
    let back=()=>{
        navigate("/home")
        message.info("取消成功")
    }
    let options:Array<any> = ['JavaScript','TypeScript','Vue','React','Mysql','Mongodb','Java','SpringBoot','其他']
    return (
        <div>
            <Input placeholder="请输入问题描述(关键词)" value={title} onInput={(e:any)=>{setTitle(e.target.value)}}  maxLength={20} bordered={false} style={{"width":"50%","height":"50px"}}/>
            <div style={{"display":"inline-block","float":"right","lineHeight":"50px","marginRight":"10px"}}>
                <Button type="primary" style={{"marginRight":"10px"}}>提交</Button>
                <Button onClick={()=>back()}>取消</Button> 
            </div>
            <Editor value={value} onChange={(e:any) =>setValue(e.target.value)} style={{"width":"100%","height":"calc(100vh - 50px)"}}></Editor>
        </div>
    )
}

export default index