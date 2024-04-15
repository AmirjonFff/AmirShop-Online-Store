import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'

function Layout() {
    return (
        <div>
            <Navbar />
            {/* <HideAppBar> */}
            <Outlet />
            {/* </HideAppBar> */}
            <Footer />
        </div>
    )
}

export default Layout
