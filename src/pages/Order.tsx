import { Box, Button, Container, Stack, Text } from "@mantine/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import OrderNone from "../components/OrderNone";
import OrderTable from "../components/OrderTable";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "../store/slice/cart";
import { RootState } from "../store/store";
import { IMyproduct } from "../store/type";

function Order() {


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
    if (!cartItems.length) {
        return <OrderNone />
    }

    const oplataQuantity = cartItems.reduce((a, b) => a + (b.cartQuantity * b.price), 0)
    const deviceQuantity = cartItems.reduce((a, b) => a + (b.cartQuantity), 0)
    return (
        <Container size={1200} pt={80} className="flex justify-between items-start">
            <Box>
                <OrderTable
                    cartItems={cartItems}
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleDecreaseCart={handleDecreaseCart}
                />
                <Button onClick={handleClearCart} variant="default" mt={10}>
                    Очистить корзину
                </Button>
            </Box>
            <Stack className="w-[300px] bg-colDull rounded-lg p-3 pb-5">
                <Box className="flex justify-between">
                    <Text className="text-[15px]">Товары ({deviceQuantity})</Text>
                    <Text>{oplataQuantity} c</Text>
                </Box>
                <Box className="flex justify-between">
                    <Text className="text-[15px]">Общая сумма доставки</Text>
                    <Text>{0} c</Text>
                </Box>
                <Box className="flex justify-between">
                    <Text className="text-[20px] font-bold">Итого</Text>
                    <Text className="text-[20px] font-bold">{oplataQuantity} c</Text>
                </Box>
                <Button color="#3a539d" h={40}>Перейти к оформлению</Button>
            </Stack>
        </Container>
    );
}

export default Order;
