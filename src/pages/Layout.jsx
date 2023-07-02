import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Navbar2 from '../components/Navbar2'
function Layout() {
  return (
    <div className='flex flex-col items-center justify-center' >
        <Profile/>
        <Outlet/>
        <Navbar2/>
        {/* <Navbar/> */}
    </div>
  )
}

export default Layout



