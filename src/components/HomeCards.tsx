import { Box, Skeleton } from "@mantine/core";
import { useSelector } from "react-redux";
import { useGetSearchQuery } from "../store/api/device";
import { MyCard } from "./Card";
import Categories from "./Categories";

function HomeCards() {

    const categoryId = useSelector(({ shop }: any) => shop.categoryId)
    const isCategor = useSelector(({ shop }: any) => shop.isCategor)
    const priceValue = useSelector(({ shop }: any) => shop.priceValue)

    const { data: searchData, isLoading } = useGetSearchQuery({ title: '', price_min: priceValue[0], price_max: priceValue[1], categoryId: categoryId });
    console.log(searchData);


    return (
        <Box className="flex w-full gap-6">
            {isCategor ? <Categories /> : null}
            <Box className={`w-full grid mt-10 ${isCategor ? 'grid-cols-3 gap-x-9 grid-rows-3' : 'grid-cols-4 gap-x-9'} gap-y-12`}>
                {isLoading ?
                    [...new Array(8)].map((_, i) =>
                        <Box key={i} className="w-full">
                            <Skeleton className="h-[250px]">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, amet.
                            </Skeleton>
                            <Skeleton className="mt-5 w-[90%] mx-auto h-[80px]">
                            </Skeleton>
                        </Box>
                    )
                    :
                    searchData?.slice(0, isCategor ? 9 : 12).map(card =>
                        <MyCard card={card} key={card.id} />
                    )
                }

            </Box>
        </Box>
    )
}

export default HomeCards
