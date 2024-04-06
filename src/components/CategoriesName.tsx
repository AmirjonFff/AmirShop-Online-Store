import { useSelector } from 'react-redux';
import CategoriesItem from './CategoriesItem';

function CategoriesName() {
    const itemId = useSelector(({ shop }: any) => shop.itemId);
    const item = [
        {
            title: "House Plants",
            quantity: 33
        },
        {
            title: "Potter Plants",
            quantity: 12
        },
        {
            title: "Seeds",
            quantity: 12
        },
        {
            title: "Small Plants",
            quantity: 65
        },
        {
            title: "Big Plants",
            quantity: 39
        },
        {
            title: "Succulents",
            quantity: 39
        },
        {
            title: "Succulents",
            quantity: 39
        },
        {
            title: "Trerrariums",
            quantity: 39
        },
        {
            title: "Gardening",
            quantity: 39
        },
        {
            title: "Accessories",
            quantity: 39
        },
    ]
    return (
        <div>
            {
                item.map((el, i) => <CategoriesItem key={i} active={i === itemId} i={i} {...el} />)
            }
        </div>
    )
}

export default CategoriesName
