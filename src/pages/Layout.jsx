import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
function Layout() {
  return (
    <div className='flex flex-col items-center justify-start ' >
       
        <Outlet/>
        <Navbar/>
    </div>
  )
}

export default Layout



