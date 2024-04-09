"use client"
import { useSelector } from 'react-redux';
import CategoriesItem from './CategoriesItem';

function CategoriesColor() {
    const sizeId = useSelector(({ shop }: any) => shop.sizeId);
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

    return (
        <div>
            {
                item.map((el, i) => <CategoriesItem key={i} i={i} active={i === sizeId} {...el} />)
            }
        </div>
    )
}

export default CategoriesColor
