import { useSelector } from "react-redux";
import { useGetDeviceQuery } from "../store/api/device"
import { MyCard } from "./Card";
import Categories from "./Categories";
import { Skeleton } from "@mantine/core";

function HomeCards() {
    const { data = [], isLoading } = useGetDeviceQuery();
    const isCategor = useSelector(({ shop }: any) => shop.isCategor)
    console.log(data);

    return (
        <div className="flex w-full gap-6">
            {isCategor ? <Categories /> : null}
            <div className={`grid mt-10 ${isCategor ? 'grid-cols-3 gap-x-9' : 'grid-cols-4 gap-x-9'} gap-y-12`}>
                {isLoading ?
                    [...new Array(8)].map(() =>
                        <div className="w-full">
                            <Skeleton className="h-[250px]">
                                salom asjdcfjhasdvcjhasdvcjasvcjhasvcjhsavcjasvcajsvcasjhvc
                            </Skeleton>
                            <Skeleton className="mt-5 w-[90%] mx-auto h-[80px]">
                            </Skeleton>
                        </div>
                    )
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
