import { Box, Button, Card, Group, Image, Text } from '@mantine/core';
import { IconBasket } from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../store/slice/cart';
import { IMyCard } from '../store/type';
import { RootState } from '../store/store';




export function MyCard({ card }: { card: IMyCard }) {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleAddToCart = (product: IMyCard) => {
        dispatch(addToCart(product));
    };

    const cart = useSelector((state: RootState) => state.cart);
    const isGal = (id: number) => !!cart.cartItems.find(el => el.id === id)

    return (
        <Card shadow="sm" className='w-full cursor-pointer myCard border-none' padding="lg" radius="md" withBorder>
            <Card.Section onClick={() => navigate('/device/' + card.id)} h={250} className='flex relative justify-center items-center p-1 bg-colDull'>
                <img
                    className='max-w-full max-h-[100%] object-center'
                    src={card.images[0]}
                    height={160}
                    alt="Norway"
                />
                <div className='bg-white absolute bottom-0 left-[6px] py1 px-2 myPrice'>{card.price} c</div>
            </Card.Section>
            <Group onClick={() => navigate('/device/' + card.id)} justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{card.title.length < 28 ? card.title : `${card.title.slice(0, 40)}...`}</Text>
            </Group>
            <Button disabled={isGal(card.id)} className='relative addOrderBtn' onClick={() => handleAddToCart(card)} leftSection={<IconBasket size={20} />} color="#3a539d" fullWidth mt="auto" radius="md"> В корзину {isGal(card.id) && <Box className='absolute right-3 -bottom-[3px]' w={50}><Image src={'image/home/галочка.png'} /></Box>}
            </Button>
        </Card>
    );
}