import { Box, Text } from "@mantine/core"

function CategoriesColor() {
    const item = [
        {
            title: "Черный",
            quantity: 119
        },
        {
            title: "Белый",
            quantity: 86
        },
        {
            title: "Красный",
            quantity: 78
        },
    ]

    const active = false
    return (
        <Box>
            {
                item.map((el, i) =>
                    <Box key={i} className={`flex justify-between text-[15px] font-[400] ${active && "text-colLight font-[700]"} leading-[20px] px-3 py-[6px] cursor-pointer`}>
                        <Text className="text-[14px] sm:text-[16px]">{el.title}</Text>
                        <Text className="hidden sm:block">({el.quantity})</Text>
                    </Box>)
            }
        </Box>
    )
}

export default CategoriesColor
