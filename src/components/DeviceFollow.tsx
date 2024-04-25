import { Box, Button, Rating, Skeleton, Text, Title } from "@mantine/core";
import { IconBrandInstagram, IconBrandTelegram, IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseCart } from "../store/slice/cart";
import { RootState } from "../store/store";
import { IMyCard } from "../store/type";
import HandleQuantity from "./HandleQuantity";
import { OrderModal } from "./OrderModal/OrderModal";
import SizeDevice from "./SizeDevice";



function DeviceFollow({ data, isLoading }: { data: IMyCard | undefined, isLoading: boolean }) {
    const dispatch = useDispatch()
    const cart = useSelector((state: RootState) => state.cart);
    const isGal = (id: number | undefined) => !!cart.cartItems.find(el => el.id === id)
    const newData = cart.cartItems.find(el => el.id === data?.id);

    const increment = () => dispatch(addToCart(data))
    const decrement = () => dispatch(decreaseCart(data));
    const handleAddToCart = (product: IMyCard | undefined) => {
        dispatch(addToCart(product));
    };

    const sss = cart.cartItems.find(el => el.id === data?.id)?.cartQuantity
    const oplata = isGal(data?.id) ? ((sss ?? 0) * (data?.price ?? 0)) : data?.price;

    return (
        <Box className="w-full">
            {isLoading ?
                <Box>
                    <Skeleton className="w-full h-[50px]">
                    </Skeleton>
                </Box> :
                <Box className="border-b-[1px] border-[#3a539d84] pb-2">
                    <Title className="text-[26px]">
                        {data?.title}
                    </Title>
                    <Box className="mt-3 flex justify-between w-full">
                        <Title className="text-[20px] text-colLight">{data?.price} с</Title>
                        <Box className="flex items-center gap-2">
                            <Rating value={3.5} fractions={2} readOnly />
                            <Box><Text className="text-colLight font-[500] inline">{130}</Text> <Text className="inline">отзывов</Text></Box>
                        </Box>
                    </Box>
                </Box>}
            {isLoading ?
                <Box>
                    <Skeleton className="w-full h-[120px] mt-10">
                    </Skeleton>
                    <Skeleton className="w-[50%] h-[200px] mt-4">
                    </Skeleton>
                </Box> :
                <Box className="mt-3">
                    <Title className="text-[17px]">Краткое описание:</Title>
                    <Box className="text-[15px] leading-6 text-[#727272] mt-2">{data?.description.slice(0, 220)}.</Box>
                    <Title className="text-[17px] mt-4">Размер:</Title>
                    <SizeDevice />
                    <Box className="flex gap-5 items-center mt-5">
                        <HandleQuantity quantity={newData?.cartQuantity ? newData?.cartQuantity : 1} increment={increment} decrement={decrement} />
                        <Button disabled={isGal(data?.id)} onClick={() => handleAddToCart(data)} color="#3a539d">В КАРЗИНУ</Button>
                        <OrderModal oplata={oplata} bool={true} />
                    </Box>
                    <Box className="flex items-center mt-5 gap-2"> <Title className="text-[17px]">Категории: </Title> <span className="text-[15px] text-[#727272]">{data?.category.name}</span> </Box>
                    <Box className="flex items-center mt-3 gap-2"> <Title className="text-[17px]">Поделитесь этими продуктами: </Title> <Box className="flex gap-2">
                        <IconBrandTelegram className="text-[#727272] hover:text-black cursor-pointer" />
                        <IconBrandWhatsapp className="text-[#727272] hover:text-black cursor-pointer" />
                        <IconBrandInstagram className="text-[#727272] hover:text-black cursor-pointer" />
                        <IconMail className="text-[#727272] hover:text-black cursor-pointer" />
                    </Box>
                    </Box>
                </Box>}
        </Box>
    )
}

export default DeviceFollow
