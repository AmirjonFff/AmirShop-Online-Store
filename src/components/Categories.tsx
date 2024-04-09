import CategoriesName from "./CategoriesName"
import CategoriesPrice from "./CategoriesPrace"
import CategoriesColor from "./CategoriesColor"

function Categories() {
    return (
        <div className='w-[310px]'>
            <div className='bg-colDull p-[14px_18px] text-[18px]'>
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
