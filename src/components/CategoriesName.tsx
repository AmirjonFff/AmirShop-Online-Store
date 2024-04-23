import { useSelector } from 'react-redux';
import { useGetCategoriesQuery } from '../store/api/device';
import CategoriesItem from './CategoriesItem';

function CategoriesName() {
    const categoryId = useSelector(({ shop }: any) => shop.categoryId);
    const { data = [] } = useGetCategoriesQuery();

    console.log(data);

    return (
        <div>
            {
                data.map((el) => <CategoriesItem key={el.id} active={el.id === categoryId} data={el} />)
            }
        </div>
    )
}

export default CategoriesName
