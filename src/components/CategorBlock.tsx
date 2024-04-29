import { Box, Image, Title } from "@mantine/core"
import { ICategory } from "../store/type"

function CategorBlock({ data }: { data: ICategory[] | undefined }) {

    return (
        <Box className="grid grid-cols-5 gap-3">
            {
                data?.map((cat, i) =>
                    <Box className="shadow-lg p-3 cursor-pointer" key={i}>
                        <Box h={70}>
                            <Image className="object-contain" h={'100%'} src={cat.image} />
                        </Box>
                        <Title className="text-center" mt={10} size={16}>{cat.name} ➞ </Title>
                    </Box>
                )
            }
        </Box>
    )
}

export default CategorBlock
