import { Box } from "@mantine/core"
import HomeBlock from "./HomeBlock"
import { useGetCategoriesQuery, useGetDeviceQuery } from "../store/api/device"

function HomeDevice() {

    const { data } = useGetDeviceQuery()
    const { data: dataCat } = useGetCategoriesQuery()

    const dataBrend = [
        {
            id: 1,
            name: 'Samsung',
            image: 'https://bsmedia.business-standard.com/_media/bs/img/about-page/1562575696.png'
        },
        {
            id: 2,
            name: 'Nike',
            image: 'https://sneakertown.kz/upload/iblock/11b/11b6091e46bdf1a239b576aa695eb6a9.png'
        },
        {
            id: 3,
            name: 'Adidas',
            image: 'https://www.kicksonfire.com/wp-content/uploads/2015/10/adidas_retro.jpg'
        },
        {
            id: 4,
            name: 'Zara',
            image: 'https://fashionunited.com/r/fit=contain,format=jpeg,gravity=center,height=630,quality=70,width=1200/https://static.fashionunited.com/201901/4zara-logo-inditex-1.jpg'
        },
        {
            id: 5,
            name: 'Gucci',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gucci_logo.svg/640px-Gucci_logo.svg.png'
        },

    ]

    const titleData = [
        {
            title: 'Популярные категории',
            data: dataCat,
            iscat: true
        },
        {
            title: 'Лучшие новинки',
            data,
            iscat: false
        },
        {
            title: 'Полезные статьи',
            data,
            iscat: false
        },
        {
            title: 'Популярные бренды',
            data: dataBrend,
            iscat: true
        },
    ]
    return (
        <Box mt={60} className="flex flex-col gap-[35px] pb-16">
            {
                titleData.map((title, i) =>
                    <HomeBlock key={i} {...title} />
                )
            }
        </Box>
    )
}

export default HomeDevice
