import { Container } from '@mantine/core'
import HomeDevices from '../components/HomeDevices'
import HomeStart from '../components/HomeStart'

function Home() {
  return (
    <Container size={1200} pt={10}>
      <HomeStart />
      <HomeDevices />
    </Container>
  )
}

export default Home
