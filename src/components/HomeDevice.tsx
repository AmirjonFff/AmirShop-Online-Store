import { Box } from "@mantine/core"
import HomeBlock from "./HomeBlock"
import { useGetDeviceQuery } from "../store/api/device"

function HomeDevice() {

    const { data } = useGetDeviceQuery()

    const titleData = [
        {
            title: 'Популярные категории',
            data,
        },
        {
            title: 'Лучшие новинки',
            data,
        },
        {
            title: 'Полезные статьи',
            data,
        },
        {
            title: 'Популярные бренды',
            data,
        },
    ]
    return (
        <Box>
            {
                titleData.map((title, i) =>
                    <HomeBlock key={i} {...title} />
                )
            }
        </Box>
    )
}

export default HomeDevice
