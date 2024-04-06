"use client"
import { useSelector } from 'react-redux';
import CategoriesItem from './CategoriesItem';

function CategoriesSize() {
    const sizeId = useSelector(({ shop }: any) => shop.sizeId);
    const item = [
        {
            title: "Small",
            quantity: 119
        },
        {
            title: "Medium",
            quantity: 86
        },
        {
            title: "Large",
            quantity: 78
        },
    ]

    return (
        <div>
            {
                item.map((el, i) => <CategoriesItem key={i} i={i} active={i === sizeId} {...el} />)
            }
        </div>
    )
}

export default CategoriesSize
