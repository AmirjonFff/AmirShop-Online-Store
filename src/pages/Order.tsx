import { Box, Button, Container, Image, Table, Title } from "@mantine/core";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SizeDevice from "../components/SizeDevice";
import { delProduct } from "../store/addLocStor";
import { IMyCard } from "../store/type";

function Order() {
    const navigate = useNavigate();

    interface IMyproduct extends IMyCard {
        quantity: number;
    }

    const [products, setProducts] = useState<IMyproduct[]>(
        JSON.parse(localStorage.getItem("carts") as string) || []
    );

    useEffect(() => {
        // Обновляем состояние корзины из localStorage при изменении его значения
        const storedData = localStorage.getItem("carts");
        if (storedData) {
            setProducts(JSON.parse(storedData));
        }
    }, []);

    const handleIncrement = (id: number) => {
        const updateCart = products.map((product) => {
            if (product.id === id) {
                return {
                    ...product,
                    quantity: product.quantity + 1,
                };
            }
            return product;
        });
        updateCartState(updateCart);
    };

    const handleDecrement = (id: number) => {
        const updateCart = products.map((product) => {
            if (product.id === id) {
                return {
                    ...product,
                    quantity: product.quantity - 1,
                };
            }
            return product;
        });
        updateCartState(updateCart);
    };

    const updateCartState = (updatedCart: IMyproduct[]) => {
        setProducts(updatedCart);
        localStorage.setItem("carts", JSON.stringify(updatedCart));
    };

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
                        products.map(product =>
                            <Table.Tr key={product.id} mt={5}>
                                <Table.Td className="w-[80px]">
                                    <Image src={product.images[0]} />
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
                                        <Button disabled={product.quantity <= 1} onClick={() => handleDecrement(product.id)} className={`btnDis cursor-pointer w-[33px] h-[38px] px-0 bg-colLight text-white font-bold rounded-full flex items-center justify-center text-[20px]`}>-</Button>
                                        <Title className="text-[20px] font-[500] w-[20px] text-center">{product.quantity}</Title>
                                        <Button disabled={product.quantity >= 9} onClick={() => handleIncrement(product.id)} className={`btnDis cursor-pointer w-[30px] h-[38px] px-0 bg-colLight text-white font-bold rounded-full flex items-center justify-center text-[20px] pb-1`}>+</Button>
                                    </Box>
                                </Table.Td>
                                <Table.Td>
                                    <Title size={16}>
                                        {product.quantity * product.price} c
                                    </Title>
                                </Table.Td>
                                <Table.Td>
                                    <Image onClick={() => {
                                        delProduct(product.id);
                                        updateCartState(products.filter(p => p.id !== product.id));
                                    }} w={20} className="cursor-pointer" src={'image/home/Delete.svg'} />
                                </Table.Td>
                            </Table.Tr>
                        )
                    }
                </Table.Tbody>
            </Table>
        </Container>
    );
}

export default Order;
