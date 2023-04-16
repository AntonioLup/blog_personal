import {Outlet} from "react-router-dom"
import "./styles/Layout.scss"
const Layout =() => {
  return (
    <div className="content">
      
      <Outlet/>
    </div>
  )
}

export default Layout;