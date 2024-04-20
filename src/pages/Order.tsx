import { Box, Button, Container, Image, Table, Title } from "@mantine/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SizeDevice from "../components/SizeDevice";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "../store/slice/cart";
import { IMyproduct } from "../store/type";
import { RootState } from "../store/store";

function Order() {
    const navigate = useNavigate();

    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals(null));
    }, [cart, dispatch]);

    const handleAddToCart = (product: IMyproduct) => {
        dispatch(addToCart(product));
    };
    const handleDecreaseCart = (product: IMyproduct) => {
        dispatch(decreaseCart(product));
    };
    const handleRemoveFromCart = (product: IMyproduct) => {
        dispatch(removeFromCart(product));
    };

    const handleClearCart = () => {
        dispatch(clearCart(null));
    };

    const { cartItems } = cart

    return (
        <Container size={1200} pt={80}>
            <Table striped w={780}>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th colSpan={2}>Продукты</Table.Th>
                        <Table.Th>Цена</Table.Th>
                        <Table.Th>Количество</Table.Th>
                        <Table.Th>Общий Цена</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {
                        cartItems && cartItems?.map((product: IMyproduct) =>
                            <Table.Tr key={product.id} mt={5}>
                                <Table.Td className="w-[80px]">
                                    <Image src={product?.images[0]} />
                                </Table.Td>
                                <Table.Td>
                                    <Title size={16} className="cursor-pointer" onClick={() => navigate(`/device/${product.id}`)}>
                                        {product.title.slice(0, 23)}...
                                    </Title>
                                    <SizeDevice />
                                </Table.Td>
                                <Table.Td>
                                    <Title size={16}>
                                        {product.price} c
                                    </Title>
                                </Table.Td>
                                <Table.Td>
                                    <Box className="flex items-center gap-3">
                                        <Button disabled={product.cartQuantity <= 1} onClick={() => handleDecreaseCart(product)} className={`btnDis cursor-pointer w-[33px] h-[38px] px-0 bg-colLight text-white font-bold rounded-full flex items-center justify-center text-[20px]`}>-</Button>
                                        <Title className="text-[20px] font-[500] w-[20px] text-center">{product.cartQuantity}</Title>
                                        <Button disabled={product.cartQuantity >= 9} onClick={() => handleAddToCart(product)} className={`btnDis cursor-pointer w-[30px] h-[38px] px-0 bg-colLight text-white font-bold rounded-full flex items-center justify-center text-[20px] pb-1`}>+</Button>
                                    </Box>
                                </Table.Td>
                                <Table.Td>
                                    <Title size={16}>
                                        {product.cartQuantity * product.price} c
                                    </Title>
                                </Table.Td>
                                <Table.Td>
                                    <Image onClick={() => {
                                        handleRemoveFromCart(product)
                                    }} w={20} className="cursor-pointer" src={'image/home/Delete.svg'} />
                                </Table.Td>
                            </Table.Tr>
                        )
                    }
                </Table.Tbody>
            </Table>
            <Button onClick={handleClearCart} variant="default" mt={10}>
                Очистить корзину
            </Button>
        </Container>
    );
}

export default Order;
