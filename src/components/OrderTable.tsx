import { Box, Button, Image, Table, Title } from "@mantine/core";
import SizeDevice from "../components/SizeDevice";
import { IMyproduct } from "../store/type";
import { useNavigate } from "react-router-dom";

interface IOrderTable {
    cartItems: IMyproduct[],
    handleDecreaseCart: (product: IMyproduct) => void,
    handleAddToCart: (product: IMyproduct) => void,
    handleRemoveFromCart: (product: IMyproduct) => void
}
function OrderTable({ cartItems, handleDecreaseCart, handleAddToCart, handleRemoveFromCart }: IOrderTable) {
    const navigate = useNavigate();
    return (
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
    )
}

export default OrderTable
