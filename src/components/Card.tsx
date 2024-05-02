import { Box, Button, Card, Group, Image, Text } from '@mantine/core';
import { IconArrowUpRight, IconBasket } from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../store/slice/cart';
import { RootState } from '../store/store';
import { IMyCard } from '../store/type';
import HoverSlider from './HoverSlider';


export function MyCard({ card, isStock }: { card: IMyCard, isStock?: boolean }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddToCart = (product: IMyCard) => {
        dispatch(addToCart(product));
    };

    const cart = useSelector((state: RootState) => state.cart);
    const isGal = (id: number) => !!cart.cartItems.find(el => el.id === id)

    const ss = Math.round((card.price * 100) / 70)

    return (
        <Card h={'100%'} shadow="sm" className='w-full cursor-pointer myCard border-none' padding="lg" radius="md" withBorder>
            <Card.Section onClick={() => navigate('/device/' + card.id)} className='flex h-[200px] md:h-[267px] relative justify-center items-center bg-colDull'>
                <HoverSlider image={card.images} />
                {isStock && <Box>
                    <Box className='absolute text-[13px] line-through text-slate-500 bg-colDull  -bottom-5 left-[9px] px-2'>{ss} c</Box>
                    <Box className='absolute text-[14px] w-[100px] bg-colLight -rotate-[55deg] h-[100px] text-white   -top-16 -right-12 px-2'></Box>
                    <Text className='absolute text-[14px] text-white   top-[1px] -right-1 px-2'>-30 %</Text>
                </Box>
                }
                <Box className='bg-white absolute  bottom-0 left-[6px] px-2 myPrice text-[13px] md:text-[16px]'>{card.price} c</Box>
            </Card.Section>
            <Group onClick={() => navigate('/device/' + card.id)} justify="space-between" mt="md" mb="xs">
                <Text className='text-[13px] hidden sm:text-[16px]' fw={500}>{card.title.length < 28 ? card.title : `${card.title.slice(0, 40)}...`}</Text>
                <Text className='text-[13px] sm:text-[16px]' fw={500}>{card.title.length < 7 ? card.title : `${card.title.slice(0, 7)}...`}</Text>
            </Group>
            <Button disabled={isGal(card.id)} className='relative hidden md:block addOrderBtn' onClick={() => handleAddToCart(card)} leftSection={<IconBasket size={20} />} color="#3a539d" fullWidth mt="auto" radius="md"> В корзину {isGal(card.id) && <Box className='absolute right-3 -bottom-[3px]' w={50}><Image src={'image/home/галочка.png'} /></Box>}
            </Button>
            <Group mt={'auto'} className='flex md:hidden justify-center gap-5'>
                <IconArrowUpRight size={23} />
                <IconBasket size={23} />
            </Group>
        </Card>
    );
}