import React,{useState} from 'react'
import Editor from 'for-editor'
import {Input,Button, message} from "antd"
import {useNavigate} from "react-router-dom"
function index() {
    let navigate=useNavigate()
    const [value,setValue]=useState<any>(null)
    const [title,setTitle]=useState<string>('')
    let back=()=>{
        navigate("/home")
        message.info("取消成功")
    }
    return (
        <div>
            <Input placeholder="请输入文章标题" value={title} onInput={(e:any)=>{setTitle(e.target.value)}}  maxLength={20} bordered={false} style={{"width":"50%","height":"50px"}}/>
            <div style={{"display":"inline-block","float":"right","lineHeight":"50px","marginRight":"10px"}}>
                <Button type="primary" style={{"marginRight":"10px"}}>发布</Button>
                <Button onClick={()=>back()}>取消</Button> 
            </div>
           
            <Editor value={value} onChange={(e:any) =>setValue(e.target.value)} style={{"width":"100%","height":"calc(100vh - 50px)"}}></Editor>
        </div>
    )
}

export default index