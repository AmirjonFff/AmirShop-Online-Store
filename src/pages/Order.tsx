import { Container, Image, Table, Title } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SizeDevice from "../components/SizeDevice";
import { IMyCard } from "../store/type";

function Order() {

    const navigate = useNavigate()
    interface IMyproduct extends IMyCard {
        quantity: number;
    }

    // const [total, setTotal] = useState()
    const [products, setProducts] = useState<IMyproduct[]>(
        JSON.parse(localStorage.getItem("carts") as string) || []
    );

    const removeProduct = (id: number) => {
        const updateCart = products.filter((product) => product.id !== id);
        localStorage.setItem("carts", JSON.stringify(updateCart));
        setProducts(updateCart);
    };

    // useEffect(() => {
    //     const total = products.reduce((acc, item) => {
    //         return acc + item.quantity * item.price;
    //     }, 0);
    //     setTotal(total);
    // }, [products]);

    return (
        <Container size={1200} pt={80}>
            <Table striped w={780}>
                <Table.Thead>
                    <Table.Tr >
                        <Table.Th colSpan={2}>Продукты</Table.Th>
                        <Table.Th>Цена</Table.Th>
                        <Table.Th>Количество</Table.Th>
                        <Table.Th >Общий Цена</Table.Th>
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
                                    <div className="flex items-center gap-3">
                                        <span className={`cursor-pointer w-[33px] h-[38px] bg-colLight text-white font-bold rounded-full flex items-center justify-center text-[20px] pb-1`}>-</span>
                                        <span className="text-[20px] font-[500]">{product.quantity}</span>
                                        <span className={`cursor-pointer w-[33px] h-[38px] bg-colLight text-white font-bold rounded-full flex items-center justify-center text-[20px] pb-1`}>+</span>
                                    </div>
                                </Table.Td>
                                <Table.Td>
                                    <Title size={16}>
                                        {product.quantity * product.price} c
                                    </Title>
                                </Table.Td>
                                <Table.Td>
                                    <Image onClick={() => removeProduct(product.id)} w={20} className="cursor-pointer" src={'image/home/Delete.svg'} />
                                </Table.Td>
                            </Table.Tr>
                        )
                    }
                </Table.Tbody>
            </Table>
        </Container>
    )
}

export default Order
