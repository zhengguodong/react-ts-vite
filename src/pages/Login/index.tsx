import React from 'react'
import LoginForm from './components/LoginForm'
import "./index.less";
function index() {
  return (
    <div className="login-container">
    <div className="login-box">
      <div className="login-left">
      </div>
      <div className="login-form">
        <div className="login-logo">
          <span className="logo-text">Dapp-admin</span>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
  )
}

export default index