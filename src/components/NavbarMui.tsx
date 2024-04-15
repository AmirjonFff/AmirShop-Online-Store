import { Button } from "@mantine/core";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { IconLogin2, IconSearch, IconShoppingCart } from "@tabler/icons-react";
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props: Props) {

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
  const location = useLocation();
  const isActive = location.pathname
  const sentOrder = 0;

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className='!bg-white'>
          <div className="flex w-[1200px] px-4 mx-auto justify-between items-center pb-6 pt-4">
            <div className="cursor-pointer text-xl font-bold">
              <Logo />
            </div>
            <ul className="flex gap-11 text-[#3D3D3D] items-center text-[16px] translate-y-1">
              {navData.map(nav =>
                <li key={nav.name} className={`cursor-pointer ${isActive === nav.path && 'font-bold'}`}><Link to={nav.path}>{nav.name}</Link>
                  {isActive === nav.path && <div className="h-[3px] bg-[#3a539d] w-full translate-y-6"></div>}</li>
              )}
            </ul>
            <div className="flex gap-7 items-center">
              <span><IconSearch cursor="pointer" size={27} color="#3D3D3D" /></span>
              <div className="relative">
                <IconShoppingCart cursor="pointer" size={27} color="#3D3D3D" />
                {sentOrder > 0 && <div className="bg-colLight absolute -top-2 -right-1 font-[500] text-white w-[18px] h-[18px] rounded-full flex items-center justify-center text-[12px]">
                  {sentOrder}
                </div>}
              </div>
              <Button leftSection={<IconLogin2 size={24} />} color="#3a539d" variant="filled">
                Авторизоваться
              </Button>
            </div>
          </div>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {props.children}
    </React.Fragment>
  );
}
