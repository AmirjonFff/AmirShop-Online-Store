import { Container } from "@mantine/core"
import HomeDevices from "../components/HomeDevices"
import { Toaster } from "react-hot-toast"

function Shop() {
  return (
    <Container size={1200}>
      <HomeDevices />
      <Toaster
        position="top-right"
        reverseOrder={true}
      />
    </Container>
  )
}

export default Shop
