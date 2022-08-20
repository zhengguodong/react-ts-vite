import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "antd/dist/antd.css";
import {store} from "./app/store"
import {Provider} from "react-redux"
import './index.css'
import {BrowserRouter as Router} from "react-router-dom"
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
         <App />
      </Router>
    </Provider>
  </React.StrictMode>
)
