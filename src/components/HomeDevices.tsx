import { Container } from "@mantine/core"
import HomeCards from "./HomeCards"
import { SexTab } from "./SexTab"

function HomeDevices() {
    return (
        <Container size={'1200px'} className=' gap-[50px] mt-16'>
            <SexTab />            
            <HomeCards />
        </Container>
    )
}

export default HomeDevices
