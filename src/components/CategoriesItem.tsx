"use client"
import { useDispatch } from 'react-redux';
import { handleItemId } from '../store/slice/slice';

interface ICategoriesItem {
    title: string;
    quantity: number;
    active?: boolean;
    i: number;
}

function CategoriesItem({ title, quantity, active, i }: ICategoriesItem) {

    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(handleItemId(i))} className={`flex justify-between text-[15px] font-[400] ${active && "text-colLight font-[700]"} leading-[20px] p-3 cursor-pointer`}>
            <span>{title}</span>
            <span>({quantity})</span>
        </div>
    )
}

export default CategoriesItem
