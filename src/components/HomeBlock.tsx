import { Box, Title } from "@mantine/core";
import { ICategory, IMyCard } from "../store/type";
import { CalouserHome } from "./CalouserHome";
import CategorBlock from "./CategorBlock";

interface IHomeBlock {
    title: string
    data: (IMyCard[] | undefined) | (ICategory[] | undefined)
    iscat?: boolean
}

function HomeBlock({ title, data, iscat }: IHomeBlock) {
    return (
        <Box>
            <Title mb={20} size={25}>{title}</Title>
            {iscat ? <CategorBlock data={data as ICategory[]} /> : <CalouserHome data={data as IMyCard[]} />}
        </Box>
    )
}

export default HomeBlock
