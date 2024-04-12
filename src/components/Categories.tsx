import { Button } from "@mantine/core"
import { IconMenu2, IconX } from "@tabler/icons-react"
import CategoriesColor from "./CategoriesColor"
import CategoriesName from "./CategoriesName"
import CategoriesPrice from "./CategoriesPrace"
import { useState } from "react"

function Categories() {
    const [open, setOpen] = useState(false)
    const tagleIcon = () => {
        setOpen(!open);
    }
    return (
        <div className={`w-[310px] overflow-hidden`}>
            <Button color="" onClick={tagleIcon} leftSection={open ? <IconX size={18} /> : <IconMenu2 size={18} />} variant="default">
                Каталог товаров
            </Button>

            <div className='bg-colDull mt-1 p-[14px_18px] text-[18px] -translate-x-[250px]'>
                <span className='font-[700]'>Категории</span>
                <CategoriesName />
                <span className='font-[700]'>Ценовой диапазон</span>
                <CategoriesPrice />
                <span className='font-[700]'>Выбор цвета</span>
                <CategoriesColor />
            </div>
        </div>
    )
}

export default Categories
