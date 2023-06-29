import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
function Layout() {
  return (
    <div>
        <Profile/>
        <Outlet/>
        <Navbar/>
    </div>
  )
}

export default Layout



