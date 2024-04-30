import { Button, Grid } from '@mantine/core'
import MySwiper from './Swiper'
import { useNavigate } from 'react-router-dom'

function HomeStart() {
    const navigate = useNavigate()
    return (
        <div className='bg-colDull mt-5'>
            <Grid justify="center">
                <Grid.Col span={6} className='flex flex-col items-start justify-center pl-6'>
                    <h3 className='#3D3D3D uppercase text-[14px]'>ДОБРО ПОЖАЛОВАТЬ В AMIRSHOP</h3>
                    <h1 className='text-[#3D3D3D] font-[800] text-[70px] leading-tight uppercase my-3'>
                        Let’s Make a
                        Better <span className='text-[#3a539d]'>Planet</span>
                    </h1>
                    <p className='text-[#727272] text-[14px]'>Освежите свой стиль! Интернет-магазин модной одежды для смелых и стильных. Покупайте легко и удобно прямо сейчас</p>
                    <Button onClick={() => navigate('/shop')} className='mt-[50px] uppercase' size='md' color="#3a539d" variant="filled">
                        Купить сейчас
                    </Button>
                </Grid.Col>
                <Grid.Col span={6}>
                    <MySwiper />
                </Grid.Col>
            </Grid>
        </div>
    )
}

export default HomeStart
