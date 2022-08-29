import React from 'react'
import thing from "./index.module.less"
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import {Checkbox} from "antd"
function index() {
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  };
  return (
    <div>
      <div className={thing.box}>
        <h3 className={thing.title}>第三方包和插件的使用</h3>
        <div className={thing.item1}> 
          <Checkbox.Group options={plainOptions} onChange={onChange} className={thing.antd_checkbox}/>
        </div>
      </div>
    </div>
  )
}

export default index