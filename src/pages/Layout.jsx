import { Outlet } from 'react-router-dom'
// import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TabsDemo from '../components/NavbarNew'
function Layout() {
  return (
    <div className='flex flex-col items-center justify-start ' >
        <Outlet/>
        {/* <Navbar/> */}
        <TabsDemo/>
        <Footer/>
    </div>
  )
}

export default Layout



