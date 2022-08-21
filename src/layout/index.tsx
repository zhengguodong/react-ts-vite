import React from 'react'
import  Nav from "./components/Nav"
import {Outlet} from "react-router-dom"
import "./index.less"
function index() {
  return (
    <div className='layOut_out'>
        <Nav></Nav>
        <div className="mainBox">
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default index