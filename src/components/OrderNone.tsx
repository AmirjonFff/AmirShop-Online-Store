import { Box, Button, Container, Image, Title } from "@mantine/core"
import { useNavigate } from "react-router-dom"

function OrderNone() {
    const navigate = useNavigate()
    return (
        <Container className="flex flex-col items-center">
            <Box w={450}>
                <Image src={'image/home/cart.png'} />
            </Box>
            <Title size={25}>В корзине нет товаров
            </Title>
            <Title size={14} mt={5}>Найдите то, что вам нужно в каталоге или при помощи поиска</Title>
            <Button onClick={() => navigate('/shop')} mt={10} variant="default">Вернуться к покупкам</Button>
        </Container>
    )
}

export default OrderNone
