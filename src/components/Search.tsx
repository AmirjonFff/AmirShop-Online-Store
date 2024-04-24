import { Box, Button, CloseButton, Input, Menu, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSerch, removeSearch } from '../store/slice/cart';
import { RootState } from '../store/store';

export function Search() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch()

    const cart = useSelector((state: RootState) => state.cart);

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
                {cart.searchItems.length !== 0 && <Box className='flex justify-between px-5'>
                    <Text className='font-bold text-xl'>Вы раньше искали</Text>
                    <Button onClick={() => dispatch(removeSearch(null))} variant='default' className='border-none text-[#3a539d] text-[16px] px-3'>Очистить</Button>
                </Box>}
                <Box className='px-4'>
                    {
                        cart.searchItems.map((value, i) =>
                            <Menu.Item key={i} className='text-[16px]'>{value}</Menu.Item>
                        )
                    }
                </Box>
            </Menu.Dropdown>
        </Menu>
    );
}
