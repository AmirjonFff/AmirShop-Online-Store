"use client"
import { useDispatch } from 'react-redux';
import { handleCategoryId } from '../store/slice/slice';
import { ICategory } from '../store/type';
import { useGetSearchQuery } from '../store/api/device';
import { Box, Text } from '@mantine/core';

interface ICategoriesItem {
    data: ICategory
    active: boolean
}



function CategoriesItem({ data, active }: ICategoriesItem) {

    const cntProduct = (id: number) => {
        const { data } = useGetSearchQuery({ title: '', price_min: 0, price_max: 0, categoryId: id });
        return data?.length
    }
    const dispatch = useDispatch();

    return (
        <Box onClick={() => dispatch(handleCategoryId(data?.id))} className={`flex justify-between text-[15px] font-[400] hover:text-colLight leading-[20px] px-3 cursor-pointer`}>
            <Text className={`${active && "text-colLight font-[700]"} text-[14px] sm:text-[16px]`}>{data?.name}</Text>
            <Text className={`${active && "text-colLight font-[700]"} hidden sm:block`}>({cntProduct(data?.id)})</Text>
        </Box>
    )
}

export default CategoriesItem
