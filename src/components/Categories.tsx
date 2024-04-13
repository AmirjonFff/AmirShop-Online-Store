
import CategoriesColor from "./CategoriesColor"
import CategoriesName from "./CategoriesName"
import CategoriesPrice from "./CategoriesPrace"
import MySwiperDis from "./SwiperDis"

function Categories() {

    return (
        <div className={`w-[300px] mt-1 bg-colDull`}>
            <div className='p-[14px_18px] text-[18px]'>
                <span className='font-[700]'>Категории</span>
                <CategoriesName />
                <span className='font-[700]'>Ценовой диапазон</span>
                <CategoriesPrice />
                <span className='font-[700]'>Выбор цвета</span>
                <CategoriesColor />
                <span className='font-[700] block mt-2 mb-5'>Скидки</span>
                <MySwiperDis />
            </div>
        </div>
    )
}

export default Categories
