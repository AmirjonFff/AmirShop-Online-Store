import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import * as React from 'react';

function valuetext(value: number) {
    return `${value}°C`;
}

function CategoriesPrice() {
    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        event = event
        setValue(newValue as number[]);
    };

    return (
        <div className='p-3'>
            <Box>
                <Slider
                    sx={{ width: 220, color: "colLight", height: "5px" }}
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </Box>

            <div className='text-[15px]'>
                Price: <span className='text-colLight font-[700]'>${value[0]} - ${value[1]}</span>
            </div>

            <button className='w-[90px] h-[35px] mt-6 rounded-[6px] bg-colLight text-white text-[16px]'>Filter</button>
        </div>
    )
}

export default CategoriesPrice
