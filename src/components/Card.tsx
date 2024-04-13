import { Button, Card, Group, Text } from '@mantine/core';
import { IconBasket } from '@tabler/icons-react';


interface IMyCard {
    title: string
    price: number
    description: string,
    image: string
    rating: [
        {
            count: number,
            rate: number
        }
    ]
}

export function MyCard({ title, price, image }: IMyCard) {
    return (
        <Card shadow="sm" className='cursor-pointer myCard border-none' padding="lg" radius="md" withBorder>
            <Card.Section h={250} className='flex relative justify-center items-center p-1 bg-colDull'>
                <img
                    className='max-w-full max-h-[100%] object-center'
                    src={image}
                    height={160}
                    alt="Norway"
                />
                <div className='bg-white absolute bottom-0 left-[6px] py1 px-2 myPrice'>{price} c</div>
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{title.length < 28 ? title : `${title.slice(0, 40)}...`}</Text>
            </Group>
            <Button leftSection={<IconBasket size={20} />} color="#3a539d" fullWidth mt="auto" radius="md"> В корзину
            </Button>
        </Card>
    );
}