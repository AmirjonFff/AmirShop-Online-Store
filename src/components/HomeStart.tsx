import { Button, Container, Grid } from '@mantine/core'

function HomeStart() {
    return (
        <Container size="1200px">
            <Grid>
                <Grid.Col span={6}>
                    <h3 className='#3D3D3D uppercase text-[14px]'>Welcome to GreenShop</h3>
                    <h1 className='text-[#3D3D3D] font-[800] text-[70px] leading-tight uppercase'>
                        Let’s Make a
                        Better <span className='text-[#46A358]'>Planet</span>
                    </h1>
                    <p className='text-[#727272] text-[14px]'>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                    <Button size='md' color="#46A358" variant="filled">
                        SHOP NOW
                    </Button>
                </Grid.Col>
                <Grid.Col span={6}></Grid.Col>
            </Grid>
            <div>

            </div>
        </Container>
    )
}

export default HomeStart
