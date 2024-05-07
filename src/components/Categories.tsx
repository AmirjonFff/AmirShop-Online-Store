
import { Box, Stack, Text } from "@mantine/core"
import CategoriesColor from "./CategoriesColor"
import CategoriesName from "./CategoriesName"
import CategoriesPrice from "./CategoriesPrace"
import MySwiperDis from "./SwiperDis"

function Categories() {

    return (
        <Box className={`absolute md:static z-20 w-[200px] sm:w-[300px] mt-1 bg-slate-50 md:bg-colDull`}>
            <Stack gap={0} className='p-[14px_18px] text-[18px]'>
                <Text className='font-[700] text-[14px] sm:text-[16px]'>Категории</Text>
                <CategoriesName />
                <Text className='font-[700] mt-2 text-[14px] sm:text-[16px]'>Ценовой диапазон</Text>
                <CategoriesPrice />
                <Text className='font-[700] mt-2 text-[14px] sm:text-[16px]'>Выбор цвета</Text>
                <CategoriesColor />
                <Text className='font-[700] sm:block mt-2 mb-5 hidden'>Скидки</Text>
                <MySwiperDis />
            </Stack>
        </Box>
    )
}

export default Categories
