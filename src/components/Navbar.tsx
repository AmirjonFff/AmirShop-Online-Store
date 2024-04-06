import { Button, Container } from "@mantine/core";
import { IconBasket, IconLogin2, IconSearch } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
    // const nameNav = useSelector(({show}) => show.nameNav)
    const location = useLocation();
    const isActive = location.pathname
    console.log(isActive);


    return (
        <Container className="flex justify-between items-center border-b border-[#3a539d84] pb-6 pt-4" size="1200px">
            <div className="cursor-pointer text-xl font-bold">
                Logo
            </div>
            <ul className="flex gap-11 text-[#3D3D3D] items-center text-[16px] ">
                <li className={`cursor-pointer ${isActive === '/' && 'border-b-[3px] border-[#3a539d]'}`}><Link to={'/'}>Главная</Link>
                <div className="h-[3px] bg-[#3a539d] w-full"></div>
                </li>
                
                <li className={`cursor-pointer ${isActive === '/shop' && 'text-red-500'}`}><Link to={'/shop'}>Магазин</Link></li>
                <li className={`cursor-pointer ${isActive === '/stock' && 'text-red-500'}`}><Link to={'/stock'}>Акции</Link></li>
                <li className={`cursor-pointer ${isActive === '/about' && 'text-red-500'}`}><Link to={'/about'}>О нас</Link></li>
            </ul>
            <div className="flex gap-7 items-center">
                <span><IconSearch cursor="pointer" size={27} color="#3D3D3D" /></span>
                <span><IconBasket cursor="pointer" size={27} color="#3D3D3D" /></span>
                <Button leftSection={<IconLogin2 size={24} />} color="#3a539d" variant="filled">
                    Авторизоваться
                </Button>
            </div>
        </Container>
    )
}

export default Navbar
