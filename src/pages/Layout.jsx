import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function Layout() {
  return (
    <div className='flex flex-col items-center justify-start ' >
        <Outlet/>
        <Navbar/>
        <Footer/>
    </div>
  )
}

export default Layout



