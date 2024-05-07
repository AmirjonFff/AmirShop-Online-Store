import { Box, Button, RangeSlider, Text } from '@mantine/core';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetDeviceQuery } from '../store/api/device';
import { handlePriceValue } from '../store/slice/slice';


function CategoriesPrice() {
    const { data = [] } = useGetDeviceQuery();
    console.log(data);

    const maxPr = data?.reduce(
        (accumulator, currentValue) => Math.max(accumulator, currentValue.price), data[0]?.price
    );

    const minPr = data?.reduce(
        (accumulator, currentValue) => Math.min(accumulator, currentValue.price), data[0]?.price
    );


    const priceValue = useSelector(({ shop }: any) => shop.priceValue)
    const dispach = useDispatch()

    const handleChange = useCallback((event: any) => {
        dispach(handlePriceValue(event));
    }, [dispach]);

    return (
        <Box className='p-3'>
            <Box>
                <RangeSlider onChange={handleChange} color='#3a539d' minRange={0.2} min={minPr} max={maxPr} step={1} defaultValue={priceValue} />
            </Box>
            <Box className='text-[15px]'>
                Цена: <Text className='text-colLight font-[700] inline'>${priceValue[0]} - ${priceValue[1]}</Text>
            </Box>
            <Button className='mt-6 rounded-[6px] bg-colLight text-white text-[12px] sm:text-[16px]'>Фильтр</Button>
        </Box>
    )
}

export default CategoriesPrice
