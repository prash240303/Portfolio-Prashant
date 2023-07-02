import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Navbar2 from '../components/Navbar2'
function Layout() {
  return (
    <div >
        <Profile/>
        <Outlet/>
        {/* <Navbar/> */}
        <Navbar2/>
    </div>
  )
}

export default Layout



