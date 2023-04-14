import React from 'react'
import {Outlet} from "react-router-dom"
import Aside from './Aside';
import "./styles/Layout.scss"
const Layout =() => {
  return (
    <div className="content">
    
      <Outlet/>
    </div>
  )
}

export default Layout;