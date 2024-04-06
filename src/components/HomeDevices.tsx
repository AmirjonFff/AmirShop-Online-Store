import { Container } from "@mantine/core"
import Categories from "./Categories"

function HomeDevices() {
    return (
        <Container size={'1200px'} className='flex gap-[50px] mt-16'>
            <Categories />
        </Container>
    )
}

export default HomeDevices
