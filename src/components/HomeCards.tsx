import { useSelector } from "react-redux";
import { useGetDeviceQuery } from "../store/api/device"
import { MyCard } from "./Card";
import Categories from "./Categories";

function HomeCards() {
    const { data = [], isLoading } = useGetDeviceQuery();
    const isCategor = useSelector(({ shop }:any) => shop.isCategor)
    console.log(data);

    return (
        <div className="flex w-full gap-6">
            {isCategor ? <Categories /> : null}
            <div className={`grid mt-10 ${isCategor ? 'grid-cols-3 gap-x-9' : 'grid-cols-4 gap-x-9'} gap-y-12`}>
                {isLoading ? "Loading..."
                    :
                    data.slice(1, isCategor ? 10 : 13).map(card =>
                        <MyCard {...card} key={card.id} />
                    )
                }
            </div>
        </div>
    )
}

export default HomeCards
