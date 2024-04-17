import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Headroom } from '../components/NavbarMui'

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
