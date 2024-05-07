import { Box, Button, Text, Title } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import MySwiper from './Swiper'

function HomeStart() {
    const navigate = useNavigate()
    return (
        <Box className='bg-colDull mt-5 py-4'>
            <Box className='flex'>
                <Box className='flex sm:w-1/2 w-full flex-col items-start justify-center pl-6'>
                    <Text className='#3D3D3D uppercase text-[12px] sm:text-[14px] '>ДОБРО ПОЖАЛОВАТЬ В AMIRSHOP</Text>
                    <Title className='text-[#3D3D3D] text-[30px] md:text-[50px] font-[800] lg:text-[70px] leading-tight uppercase my-2'>
                        Let’s Make a
                        Better <span className='text-[#3a539d]'>Planet</span>
                    </Title>
                    <Text className='text-[#727272] text-[14px]'>Освежите свой стиль! Интернет-магазин модной одежды для смелых и стильных. Покупайте легко и удобно прямо сейчас</Text>
                    <Button onClick={() => navigate('/shop')} className='mt-8 md:mt-[50px] text-[12px] h-[30px] md:text-[16px] uppercase md:h-[42px]'  color="#3a539d" variant="filled">
                        Купить сейчас
                    </Button>
                </Box>
                <Box className='hidden w-1/2 sm:block px-4'>
                    <MySwiper />
                </Box>
            </Box>
        </Box>
    )
}

export default HomeStart
