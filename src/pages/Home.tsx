import { Container } from '@mantine/core';
import { Toaster } from 'react-hot-toast';
import HomeDevice from '../components/HomeDevice';
import HomeStart from '../components/HomeStart';

function Home() {
  return (
    <Container size={1200} pt={10}>
      <HomeStart />
      <HomeDevice />
      <Toaster
        position="top-right"
        reverseOrder={true}
      />
    </Container>
  )
}

export default Home
