import { Box, Title } from "@mantine/core";
import { IMyCard } from "../store/type";
import { CalouserHome } from "./CalouserHome";

interface IHomeBlock {
    title: string
    data: IMyCard[] | undefined
}

function HomeBlock({ title, data }: IHomeBlock) {
    return (
        <Box>
            <Title size={25}>{title}</Title>
            {data?.length}
            <CalouserHome data={data} />
        </Box>
    )
}

export default HomeBlock
