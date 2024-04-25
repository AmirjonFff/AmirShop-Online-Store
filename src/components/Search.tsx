import { Box, Button, CloseButton, Image, Input, Menu, Title } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetDeviceNameQuery } from '../store/api/device';
import { addSerch, addToCart, removeSearch } from '../store/slice/cart';
import { RootState } from '../store/store';
import { IMyCard } from '../store/type';

export function Search() {
    const [value, setValue] = useState('');
    const pinned = useHeadroom({ fixedAt: 120 });
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { data } = useGetDeviceNameQuery(value);
    const cart = useSelector((state: RootState) => state.cart);
    const isGal = (id: number) => !!cart.cartItems.find(el => el.id === id)

    const handleAddToCart = (product: IMyCard) => {
        dispatch(addToCart(product));
    };

    const lengthSearch = cart.searchItems.length
    const isSearch = lengthSearch !== 0 && !value

    return (
        <Menu width={670} shadow="md">
            <Menu.Target>
                <IconSearch cursor="pointer" size={27} color="#3D3D3D" />
            </Menu.Target>

            <Menu.Dropdown mt={pinned ? 0 : 25} pb={20} style={{ transform: 'translate(-50%)' }}>
                <Box className='flex w-full items-center px-7 py-3 justify-between'>
                    <Input
                        placeholder="Название товара"
                        value={value}
                        onChange={(event) => setValue(event.currentTarget.value)}
                        rightSectionPointerEvents="all"
                        w='85%'
                        rightSection={
                            <CloseButton
                                aria-label="Clear input"
                                onClick={() => setValue('')}
                                style={{ display: value ? undefined : 'none' }}
                            />
                        }
                    />
                    <Button onClick={() => dispatch(addSerch(value))} color='#3a539d'>Найты</Button>
                </Box>
                {isSearch &&
                    <Box>
                        <Box className='flex justify-between px-5'>
                            <Title size={20} className='font-bold'>Вы раньше искали</Title>
                            <Button onClick={() => dispatch(removeSearch(null))} variant='default' className='border-none text-[#3a539d] text-[16px] px-3'>Очистить</Button>
                        </Box>
                        <Box className='px-4'>
                            {
                                cart.searchItems.map((value, i) =>
                                    <Menu.Item h={30} key={i} className='text-[16px]'>{value}</Menu.Item>
                                )
                            }
                        </Box>
                    </Box>}
                <Box mt={45} px={20}>
                    {!value && <Title size={20}>Хиты продаж</Title>}
                    {
                        data?.slice(0, 4 - (!value ? (lengthSearch < 3 ? lengthSearch : 2) : 0)).map(el =>
                            <Box key={el.id} mt={'md'} className='text-[16px] flex justify-between'>
                                <Box className='flex cursor-pointer gap-3' onClick={() => navigate(`device/${el.id}`)}>
                                    <Menu.Item w={70} p={0}>
                                        <Image src={el.images[0]} />
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Title size={18}>{el.title}</Title>
                                        <Title size={18}>{el.price} c</Title>
                                    </Menu.Item>
                                </Box>
                                <Button disabled={isGal(el.id)} variant='default' onClick={() => handleAddToCart(el)}>В корзину</Button>
                            </Box>
                        )
                    }
                </Box>
            </Menu.Dropdown>
        </Menu >
    );
}
