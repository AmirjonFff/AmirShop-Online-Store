import { Button, Container } from "@mantine/core";
import { IconBasket, IconLogin2, IconSearch } from "@tabler/icons-react";
function Navbar() {
    return (
        <Container className="flex justify-between items-center border-b border-[#46a3596a] pb-6 pt-4" size="1200px">
            <div className="cursor-pointer text-xl font-bold">
                Logo
            </div>
            <ul className="flex gap-11 text-[#3D3D3D] items-center text-[16px] ">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Shop</li>
                <li className="cursor-pointer">Plant Care</li>
                <li className="cursor-pointer">Blogs</li>
            </ul>
            <div className="flex gap-7 items-center">
                <span><IconSearch cursor="pointer" size={27} color="#3D3D3D" /></span>
                <span><IconBasket cursor="pointer" size={27} color="#3D3D3D" /></span>
                <Button leftSection={<IconLogin2 size={24} />} color="#46A358" variant="filled">
                    Login
                </Button>
            </div>
        </Container>
    )
}

export default Navbar
