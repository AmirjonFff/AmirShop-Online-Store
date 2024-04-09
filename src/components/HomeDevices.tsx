import { Container } from "@mantine/core"
import Categories from "./Categories"
import HomeCards from "./HomeCards"

function HomeDevices() {
    return (
        <Container size={'1200px'} className='flex gap-[50px] mt-16'>
            <Categories />
            <HomeCards />
        </Container>
    )
}

export default HomeDevices
