import { Button, Container } from "@mantine/core";
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
    return (
        <Container size={1200} pt={80}>
            <OrderTable
                cartItems={cartItems}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
                handleDecreaseCart={handleDecreaseCart}
            />
            <Button onClick={handleClearCart} variant="default" mt={10}>
                Очистить корзину
            </Button>
        </Container>
    );
}

export default Order;
