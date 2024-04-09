import { useGetDeviceQuery } from "../store/api/device"
import { MyCard } from "./Card";
import { CardsTab } from "./SexTab"

function HomeCards() {
    const { data = [], isLoading } = useGetDeviceQuery();
    console.log(data);

    return (
        <div className="w-full">
            <CardsTab />
            <div className='grid mt-10 grid-cols-3 gap-y-16 gap-x-10'>
                {isLoading ? "Loading..."
                    :
                    data.slice(1, 10).map(card =>
                        <MyCard {...card} key={card.id} />
                    )
                }
            </div>
        </div>
    )
}

export default HomeCards
