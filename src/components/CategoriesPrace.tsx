import { useDispatch, useSelector } from 'react-redux';
import { handlePriceValue } from '../store/slice/slice';
import { Box, RangeSlider } from '@mantine/core';


function CategoriesPrice() {
    const priceValue = useSelector(({ shop }: any) => shop.priceValue)
    const dispach = useDispatch()

    const handleChange = (event: any) => {
        return dispach(handlePriceValue(event as number[]));
    };

    return (
        <div className='p-3'>
            <Box>
                <RangeSlider onChange={handleChange} color='#3a539d' minRange={0.2} min={0} max={150} step={1} defaultValue={priceValue} />
            </Box>

            <div className='text-[15px]'>
                Цена: <span className='text-colLight font-[700]'>${priceValue[0]} - ${priceValue[1]}</span>
            </div>

            <button className='w-[90px] h-[35px] mt-6 rounded-[6px] bg-colLight text-white text-[16px]'>Фильтр</button>
        </div>
    )
}

export default CategoriesPrice
