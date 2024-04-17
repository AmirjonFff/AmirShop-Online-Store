import { Box, Button, Rating, Skeleton, Title } from "@mantine/core";
import { IconBrandInstagram, IconBrandTelegram, IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
import { useState } from "react";
import { IMyCard } from "../store/type";
import { useSelector } from "react-redux";



function DeviceFollow({ data, isLoading }: { data: IMyCard | undefined, isLoading: boolean }) {
    const [size, setSize] = useState('S')
    const countDevice = useSelector(({ shop }: any) => shop.countDevice)
    return (
        <div className="w-full">
            {isLoading ?
                <div>
                    <Skeleton className="w-full h-[50px]">
                    </Skeleton>
                </div> :
                <Box className="border-b-[1px] border-[#3a539d84] pb-2">
                    <Title className="text-[26px]">
                        {data?.title}
                    </Title>
                    <Box className="mt-3 flex justify-between w-full">
                        <Title className="text-[20px] text-colLight">{data?.price} с</Title>
                        <Box className="flex items-center gap-2">
                            <Rating value={3.5} fractions={2} readOnly />
                            <div><span className="text-colLight font-[500]">{130}</span> <span>отзывов</span></div>
                        </Box>
                    </Box>
                </Box>}
            {isLoading ?
                <div>
                    <Skeleton className="w-full h-[120px] mt-10">
                    </Skeleton>
                    <Skeleton className="w-[50%] h-[200px] mt-4">
                    </Skeleton>
                </div> :
                <Box className="mt-3">
                    <Title className="text-[17px]">Краткое описание:</Title>
                    <div className="text-[15px] leading-6 text-[#727272] mt-2">{data?.description.slice(0, 220)}.</div>
                    <Title className="text-[17px] mt-4">Размер:</Title>
                    <div className="flex gap-3 mt-2">
                        <span className={`cursor-pointer border-colDull border-[1px] w-[30px] h-[30px] rounded-full flex items-center justify-center text-[14px] ${size === 'S' && 'border-colLight text-colLight font-bold'}`} onClick={() => setSize('S')}>S</span>
                        <span className={`cursor-pointer border-colDull border-[1px] w-[30px] h-[30px] rounded-full flex items-center justify-center text-[14px] ${size === 'M' && 'border-colLight text-colLight font-bold'}`} onClick={() => setSize('M')}>M</span>
                        <span className={`cursor-pointer border-colDull border-[1px] w-[30px] h-[30px] rounded-full flex items-center justify-center text-[14px] ${size === 'L' && 'border-colLight text-colLight font-bold'}`} onClick={() => setSize('L')}>L</span>
                        <span className={`cursor-pointer border-colDull border-[1px] w-[30px] h-[30px] rounded-full flex items-center justify-center text-[14px] ${size === 'XL' && 'border-colLight text-colLight font-bold'}`} onClick={() => setSize('XL')}>XL</span>
                    </div>
                    <Box className="flex gap-5 items-center mt-5">
                        <span className={`cursor-pointer w-[33px] h-[38px] bg-colLight text-white font-bold rounded-full flex items-center justify-center text-[20px] pb-1 ${size === 'S' && 'border-colLight text-colLight font-bold'}`} onClick={() => setSize('S')}>-</span>
                        <span className="text-[20px] font-[500]">{countDevice}</span>
                        <span className={`cursor-pointer w-[33px] h-[38px] bg-colLight text-white font-bold rounded-full flex items-center justify-center text-[20px] pb-1 ${size === 'S' && 'border-colLight text-colLight font-bold'}`} onClick={() => setSize('S')}>+</span>

                        <Button color="#3a539d">В КАРЗИНУ</Button>
                        <Button variant="default" className="border-colLight text-colLight -ml-2">КУПИТ СЕЙЧАС</Button>
                    </Box>
                    <div className="flex items-center mt-5 gap-2"> <Title className="text-[17px]">Категории: </Title> <span className="text-[15px] text-[#727272]">{data?.category.name}</span> </div>
                    <div className="flex items-center mt-3 gap-2"> <Title className="text-[17px]">Поделитесь этими продуктами: </Title> <div className="flex gap-2">
                        <IconBrandTelegram className="text-[#727272] hover:text-black cursor-pointer" />
                        <IconBrandWhatsapp className="text-[#727272] hover:text-black cursor-pointer" />
                        <IconBrandInstagram className="text-[#727272] hover:text-black cursor-pointer" />
                        <IconMail className="text-[#727272] hover:text-black cursor-pointer" />
                    </div>
                    </div>
                </Box>}
        </div>
    )
}

export default DeviceFollow
