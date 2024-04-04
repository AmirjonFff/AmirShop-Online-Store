import { MantineProvider } from '@mantine/core'
import './App.css'
import '@mantine/core/styles.css';
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <MantineProvider>
        <Navbar />
      </MantineProvider>
    </>
  )
}

export default App
