import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import BlobFollow from '../components/BlobComponent'

function Layout() {
  return (
    <div className="flex flex-col items-center justify-start ">
      <BlobFollow />
      <Outlet />
      <Navbar />
      <Footer />
    </div>
  );
}

export default Layout



