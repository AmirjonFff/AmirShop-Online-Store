import CategoriesName from "./CategoriesName"
import CategoriesPrice from "./CategoriesPrace"
import CategoriesSize from "./CategoriesSize"

function Categories() {
    return (
        <div className='w-[310px]'>
            <div className='bg-colDull p-[14px_18px] text-[18px]'>
                <span className='font-[700]'>Categories</span>
                <CategoriesName />
                <span className='font-[700]'>Price Range</span>
                <CategoriesPrice />
                <span className='font-[700]'>Size</span>
                <CategoriesSize />
            </div>
        </div>
    )
}

export default Categories
