import { Container } from "@mantine/core"
import HomeCards from "../components/HomeCards"

function Stock() {
    return (
        <Container size={1200}>
            <HomeCards isStac={true} />
        </Container>
    )
}

export default Stock
