import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { handlePriceValue } from '../store/slice/slice';

function valuetext(value: number) {
    return `${value}°C`;
}

function CategoriesPrice() {
    const priceValue = useSelector(({ shop }: any) => shop.priceValue)
    const dispach = useDispatch()

    const handleChange = (event: Event, newValue: number | number[]) => {
        event = event
        dispach(handlePriceValue(newValue as number[]));
    };

    return (
        <div className='p-3'>
            <Box>
                <Slider
                    sx={{ width: 220, color: "#263e87", height: "5px" }}
                    getAriaLabel={() => 'Temperature range'}
                    value={priceValue}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </Box>

            <div className='text-[15px]'>
                Цена: <span className='text-colLight font-[700]'>${priceValue[0]} - ${priceValue[1]}</span>
            </div>

            <button className='w-[90px] h-[35px] mt-6 rounded-[6px] bg-colLight text-white text-[16px]'>Фильтр</button>
        </div>
    )
}

export default CategoriesPrice
