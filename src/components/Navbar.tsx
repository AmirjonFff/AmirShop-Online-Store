import { Container } from "@mantine/core";

function Navbar() {
    const demoProps = {
        bg: 'var(--mantine-color-blue-light)',
        h: 50,
    };
    return (
        <Container size="1200px" {...demoProps}>
            <div>
                Logo
            </div>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>Plant Care</li>
                <li>Blogs</li>
            </ul>
            <div>
            </div>
        </Container>
    )
}

export default Navbar
