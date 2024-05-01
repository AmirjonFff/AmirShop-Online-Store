
import { Box, Stack, Text } from "@mantine/core"
import CategoriesColor from "./CategoriesColor"
import CategoriesName from "./CategoriesName"
import CategoriesPrice from "./CategoriesPrace"
import MySwiperDis from "./SwiperDis"

function Categories() {

    return (
        <Box className={`w-[300px] mt-1 bg-colDull`}>
            <Stack gap={0} className='p-[14px_18px] text-[18px]'>
                <Text className='font-[700]'>Категории</Text>
                <CategoriesName />
                <Text className='font-[700]'>Ценовой диапазон</Text>
                <CategoriesPrice />
                <Text className='font-[700]'>Выбор цвета</Text>
                <CategoriesColor />
                <Text className='font-[700] block mt-2 mb-5'>Скидки</Text>
                <MySwiperDis />
            </Stack>
        </Box>
    )
}

export default Categories
