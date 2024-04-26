import { Box, Skeleton } from "@mantine/core";
import { useSelector } from "react-redux";
import { useGetSearchQuery } from "../store/api/device";
import { RootState } from "../store/store";
import { MyCard } from "./Card";
import Categories from "./Categories";

function HomeCards() {

    const { categoryId, isCategor, priceValue } = useSelector((state: RootState) => state.shop)

    const objSearch = {
        title: '',
        price_min: priceValue[0],
        price_max: priceValue[1],
        categoryId: categoryId
    }

    const { data, isLoading } = useGetSearchQuery(objSearch);

    return (
        <Box className="flex w-full gap-6">
            {isCategor ? <Categories /> : null}
            <Box className={`w-full grid mt-10 ${isCategor ? 'grid-cols-3 gap-x-9 grid-rows-3' : 'grid-cols-4 gap-x-9'} gap-y-12`}>
                {isLoading ?
                    [...new Array(8)].map((_, i) =>
                        <Box key={i} className="w-full">
                            <Skeleton h={270}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, amet.
                            </Skeleton>
                            <Skeleton mt={10} w={'90%'} mx={'auto'} h={80}>
                            </Skeleton>
                        </Box>
                    )
                    :
                    data?.slice(0, isCategor ? 9 : 12).map(card =>
                        <MyCard card={card} key={card.id} />
                    )
                }
            </Box>
        </Box>
    )
}

export default HomeCards
