import { Box, Title } from "@mantine/core";
import { ICategory, IMyCard } from "../store/type";
import { CalouserHome } from "./CalouserHome";
import CategorBlock from "./CategorBlock";

interface IHomeBlock {
    title: string
    data: (IMyCard[] | undefined) | (ICategory[] | undefined)
    type?: string
}

function HomeBlock({ title, data, type }: IHomeBlock) {
    return (
        <Box>
            <Title mb={20} size={25}>{title}</Title>
            {type !== 'product' ? <CategorBlock type={type} data={data as ICategory[]} /> : <CalouserHome data={data as IMyCard[]} />}
        </Box>
    )
}

export default HomeBlock
