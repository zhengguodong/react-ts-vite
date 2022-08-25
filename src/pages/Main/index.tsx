import React from 'react'
import { Carousel,Divider } from 'antd';
import main from "./index.module.less"
import {DoubleRightOutlined} from "@ant-design/icons"
const contentStyle: React.CSSProperties = {
  height: '240px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  borderRadius:'4px',
};
const index:React.FC=()=>{
  return (
    <div className={main.outBox}>
        <Carousel autoplay >
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        <Divider />
        <div className={main.mainBox}>
            <div className={main.left_box}>
              文章列表<DoubleRightOutlined />
            </div>
            <div>
              <Divider type="vertical" style={{"height":"500px"}}/>
            </div>
            <div className={main.right_box}>
              成果展示<DoubleRightOutlined />
            </div>
        </div>
    </div>
  )
}

export default index