import { Box, Button, Skeleton, Title } from "@mantine/core";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetDeviceNameQuery, useGetSearchQuery } from "../store/api/device";
import { RootState } from "../store/store";
import { MyCard } from "./Card";
import Categories from "./Categories";

function HomeCards() {
    const navigate = useNavigate()
    const { categoryId, isCategor, priceValue, searchValue } = useSelector((state: RootState) => state.shop)

    const objSearch = {
        title: '',
        price_min: priceValue[0],
        price_max: priceValue[1],
        categoryId: categoryId
    }

    const { data: searchName } = useGetDeviceNameQuery(searchValue);
    const { data, isLoading } = useGetSearchQuery(objSearch);

    const renData = searchValue ? searchName : data

    return (
        <Box className="flex w-full gap-6" pb={70}>
            {isCategor ? <Categories /> : null}
            {renData?.length === 0 ?
                <Box className="flex items-center flex-col w-full gap-5">
                    <Title size={30}>Таких товаров нет</Title>
                    <Button onClick={() => navigate('/')} color="#3a539d">Перейти на главную</Button>
                </Box> :
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
                        : renData?.slice(0, isCategor ? 9 : 12).map(card =>
                            <MyCard card={card} key={card.id} />
                        )
                    }
                </Box>}
        </Box>
    )
}

export default HomeCards
