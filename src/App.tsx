import { MantineProvider } from '@mantine/core'
import './App.css'
import '@mantine/core/styles.css';
import Navbar from './components/Navbar'
import HomeStart from './components/HomeStart';

function App() {

  return (
    <>
      <MantineProvider>
        <Navbar />
        <HomeStart />
      </MantineProvider>
    </>
  )
}

export default App
