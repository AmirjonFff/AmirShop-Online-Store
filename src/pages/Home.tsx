import { Container } from '@mantine/core'
import HomeDevices from '../components/HomeDevices'
import HomeStart from '../components/HomeStart'
import { Toaster } from 'react-hot-toast';

function Home() {
  return (
    <Container size={1200} pt={10}>
      <HomeStart />
      <HomeDevices />
      <Toaster
        position="top-right"
        reverseOrder={true}
      />
    </Container>
  )
}

export default Home
