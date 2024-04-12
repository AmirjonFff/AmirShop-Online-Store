import { Button, Container } from "@mantine/core";
import { IconBasket, IconLogin2, IconSearch } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
function Navbar() {

    const navData = [
        {
            name: 'Главная',
            path: '/'
        },
        {
            name: 'Магазин',
            path: '/shop'
        },
        {
            name: 'Акции',
            path: '/stock'
        },
        {
            name: 'О нас',
            path: '/about'
        }
    ]
    // const nameNav = useSelector(({show}) => show.nameNav)
    const location = useLocation();
    const isActive = location.pathname

    return (
        <Container size="1200px">
            <div className="flex justify-between items-center border-b border-[#3a539d84] pb-6 pt-4">
                <div className="cursor-pointer text-xl font-bold">
                    <Logo />
                </div>
                <ul className="flex gap-11 text-[#3D3D3D] items-center text-[16px] translate-y-1">
                    {navData.map(nav =>
                        <li key={nav.name} className={`cursor-pointer ${isActive === nav.path && 'font-bold'}`}><Link to={nav.path}>{nav.name}</Link>
                            {isActive === nav.path && <div className="h-[3px] bg-[#3a539d] w-full translate-y-6"></div>}</li>
                    )}
                </ul>
                <div className="flex gap-7 items-center">
                    <span><IconSearch cursor="pointer" size={27} color="#3D3D3D" /></span>
                    <span><IconBasket cursor="pointer" size={27} color="#3D3D3D" /></span>
                    <Button leftSection={<IconLogin2 size={24} />} color="#3a539d" variant="filled">
                        Авторизоваться
                    </Button>
                </div>
            </div>
        </Container>
    )
}

export default Navbar
