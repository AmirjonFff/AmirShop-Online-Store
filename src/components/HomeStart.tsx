import { Button, Container, Grid } from '@mantine/core'
import MySwiper from './Swiper'

function HomeStart() {
    return (
        <Container size="1200px" className='bg-[#3a539d0e] mt-5'>
            <Grid justify="center">
                <Grid.Col span={6} className='flex flex-col items-start justify-center pl-6'>
                    <h3 className='#3D3D3D uppercase text-[14px]'>ДОБРО ПОЖАЛОВАТЬ В AMIRSHOP</h3>
                    <h1 className='text-[#3D3D3D] font-[800] text-[70px] leading-tight uppercase my-3'>
                        Let’s Make a
                        Better <span className='text-[#3a539d]'>Planet</span>
                    </h1>
                    <p className='text-[#727272] text-[14px]'>Освежите свой стиль! Интернет-магазин модной одежды для смелых и стильных. Покупайте легко и удобно прямо сейчас</p>
                    <Button className='mt-[50px] uppercase' size='md' color="#3a539d" variant="filled">
                    Купить сейчас
                    </Button>
                </Grid.Col>
                <Grid.Col span={6}>
                    <MySwiper />
                </Grid.Col>
            </Grid>
            <div>

            </div>
        </Container>
    )
}

export default HomeStart
