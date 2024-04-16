import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Stock from './pages/Stock';
import Device from './pages/Device';
import Order from './pages/Order';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/shop',
          element: <Shop />
        },
        {
          path: '/device/:id',
          element: <Device />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/stock',
          element: <Stock />
        },
        {
          path: '/order',
          element: <Order />
        },
      ]
    }
  ])

  return (
    <>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  )
}

export default App
