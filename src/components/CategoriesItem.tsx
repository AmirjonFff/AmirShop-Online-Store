"use client"
import { useDispatch } from 'react-redux';
import { handleCategoryId } from '../store/slice/slice';
import { ICategory } from '../store/type';
import { useGetSearchQuery } from '../store/api/device';

interface ICategoriesItem {
    data: ICategory
    active: boolean
}



function CategoriesItem({ data, active }: ICategoriesItem) {

    const cntProduct = (id: number) => {
        const { data } = useGetSearchQuery({ title: '', price_min: 0, price_max: 0, categoryId: id });
        return data?.length
    }
    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(handleCategoryId(data?.id))} className={`flex justify-between text-[15px] font-[400] ${active && "text-colLight font-[700]"} leading-[20px] p-3 cursor-pointer`}>
            <span>{data?.name}</span>
            <span>({cntProduct(data?.id)})</span>
        </div>
    )
}

export default CategoriesItem
