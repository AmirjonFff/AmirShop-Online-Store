import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { Headroom } from '../components/Navbar'

function Layout() {
    return (
        <div>
            <Headroom>
                <Outlet />
            </Headroom>
            <Footer />
        </div>
    )
}

export default Layout
