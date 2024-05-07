import { Stack } from '@mantine/core';
import { useSelector } from 'react-redux';
import { useGetCategoriesQuery } from '../store/api/device';
import CategoriesItem from './CategoriesItem';

function CategoriesName() {
    const categoryId = useSelector(({ shop }: any) => shop.categoryId);
    const { data = [] } = useGetCategoriesQuery();

    console.log(data);

    return (
        <Stack gap={12}>
            {
                data.slice(0, 14).map((el) => <CategoriesItem key={el.id} active={el.id === categoryId} data={el} />)
            }
        </Stack>
    )
}

export default CategoriesName
