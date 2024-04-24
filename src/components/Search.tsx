import { Box, Button, CloseButton, Image, Input, Menu, Stack, Title } from '@mantine/core';
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
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { data } = useGetDeviceNameQuery(value);
    const cart = useSelector((state: RootState) => state.cart);

    const handleAddToCart = (product: IMyCard) => {
        dispatch(addToCart(product));
    };

    return (
        <Menu width={670} shadow="md">
            <Menu.Target>
                <IconSearch cursor="pointer" size={27} color="#3D3D3D" />
            </Menu.Target>

            <Menu.Dropdown style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%)', height: '500px' }}>
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
                {(cart.searchItems.length !== 0 && !value) &&
                    <Box>
                        <Box className='flex justify-between px-5'>
                            <Title className='font-bold text-xl'>Вы раньше искали</Title>
                            <Button onClick={() => dispatch(removeSearch(null))} variant='default' className='border-none text-[#3a539d] text-[16px] px-3'>Очистить</Button>
                        </Box>
                        <Box className='px-4'>
                            {
                                cart.searchItems.map((value, i) =>
                                    <Menu.Item key={i} className='text-[16px]'>{value}</Menu.Item>
                                )
                            }
                        </Box>
                    </Box>}
                <Box mt={'xl'} className='px-7'>
                    {
                        data?.map(el =>
                            <Box key={el.id} mt={'md'} className='text-[16px] flex justify-between'>
                                <Box className='flex cursor-pointer' onClick={() => navigate(`device/${el.id}`)}>
                                    <Box w={100}>
                                        <Image src={el.images[0]} />
                                    </Box>
                                    <Stack>
                                        <Title size={18}>{el.title}</Title>
                                        <Title size={18}>{el.price}</Title>
                                    </Stack>
                                </Box>
                                <Button variant='default' onClick={() => handleAddToCart(el)}>В корзину</Button>
                            </Box>
                        )
                    }
                </Box>
            </Menu.Dropdown>
        </Menu >
    );
}
