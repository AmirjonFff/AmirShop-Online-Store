import { AppShell, Box, Button, Container, Group, UnstyledButton, rem } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import { IconLogin2, IconSearch, IconShoppingCart } from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { useEffect } from 'react';
import { getTotals } from '../store/slice/cart';

interface IHeadroom {
  children: JSX.Element
}

export function Headroom({ children }: IHeadroom) {

  // type RootState = ReturnType<typeof store.getState>

  const pinned = useHeadroom({ fixedAt: 120 });
  const location = useLocation();
  const isActive = location.pathname;
  const navigate = useNavigate();
  const cart = useSelector((state: any) => state.cart);
  const { cartTotalQuantity } = cart
  const dispatch = useDispatch();

  console.log(cartTotalQuantity);

  useEffect(() => {
    dispatch(getTotals(null));
  }, [cart, dispatch]);


  const navData = [
    {
      name: 'Главная',
      path: '/'
    },
    {
      name: 'Магазин',
      path: '/shop'
    },
    {
      name: 'Акции',
      path: '/stock'
    },
    {
      name: 'О нас',
      path: '/about'
    }
  ]


  return (
    <AppShell header={{ height: 85, collapsed: !pinned, offset: false }} padding="md">
      <AppShell.Header>
        <Container className='w-full' size="1200px">
          <Group className="flex justify-between items-center border-b border-[#3a539d84] py-6">
            <Box className="cursor-pointer text-xl font-bold">
              <Logo />
            </Box>
            <Group className="flex gap-11 text-[#3D3D3D] items-center text-[16px] translate-y-1">
              {navData.map(nav =>
                <UnstyledButton key={nav.name} className={`cursor-pointer ${isActive === nav.path && 'font-bold'}`}><Link to={nav.path}>{nav.name}</Link>
                  {isActive === nav.path && <Box className="h-[3px] bg-[#3a539d] w-full translate-y-6"></Box>}</UnstyledButton>
              )}
            </Group>
            <Group className="flex gap-7 items-center">
              <UnstyledButton>
                <IconSearch cursor="pointer" size={27} color="#3D3D3D" /></UnstyledButton>
              <Box className="relative cursor-pointer" onClick={() => navigate('order')}>
                <IconShoppingCart size={27} color="#3D3D3D" />
                {cartTotalQuantity > 0 && <Box className="bg-colLight absolute -top-2 -right-1 font-[500] text-white w-[18px] h-[18px] rounded-full flex items-center justify-center text-[12px]">
                  {cartTotalQuantity}
                </Box>}
              </Box>
              <Button leftSection={<IconLogin2 size={24} />} color="#3a539d" variant="filled">
                Авторизоваться
              </Button>
            </Group>
          </Group>
        </Container>
      </AppShell.Header>
      <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
        {
          children
        }
      </AppShell.Main>
    </AppShell>
  );
}