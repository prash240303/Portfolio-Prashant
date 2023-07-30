import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
function Layout() {
  return (
    <div className='flex flex-col items-center justify-start ' >
        <Profile/>
        <Outlet/>
        <Navbar/>
        {/* <Navbar/> */}
    </div>
  )
}

export default Layout



