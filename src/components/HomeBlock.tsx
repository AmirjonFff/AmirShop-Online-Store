import { Box, Skeleton, Title } from "@mantine/core";
import { ICategory, IMyCard } from "../store/type";
import { CalouserHome } from "./CalouserHome";
import CategorBlock from "./CategorBlock";

interface IHomeBlock {
    title: string
    data: (IMyCard[] | undefined) | (ICategory[] | undefined)
    type?: string
    isLoading: boolean
}

function HomeBlock({ title, data, type, isLoading }: IHomeBlock) {
    return (
        <Box>
            <Title mb={20} className="text-[20px] md:text-[25px]">{title}</Title>
            {isLoading &&
                <Box className="grid grid-cols-5 gap-6">
                    {[...new Array(5)].map((_, i) =>
                        <Skeleton key={i} h={130}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, amet.
                        </Skeleton>
                    )}
                </Box>
            }
            {type !== 'product' ? <CategorBlock type={type} data={data as ICategory[]} /> : <CalouserHome data={data as IMyCard[]} />}
        </Box>
    )
}

export default HomeBlock
