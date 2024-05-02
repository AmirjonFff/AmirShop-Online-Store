import { Box, Image, Title } from "@mantine/core"
import { ICategory } from "../store/type"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { handleCategoryId } from "../store/slice/slice"

function CategorBlock({ data, type }: { data: ICategory[] | undefined, type: string | undefined }) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <Box className="grid grid-cols-3 md:grid-cols-5 gap-1 md:gap-3">
            {
                data?.slice(0, 10).map((cat, i) =>
                    <Box onClick={() => { type === 'category' && (navigate('/shop'), dispatch(handleCategoryId(cat.id))) }} className="shadow-lg p-3 cursor-pointer" key={i}>
                        <Box className="md:h-[70px] h-[50px]">
                            <Image className="object-contain" h={'100%'} src={cat.image} />
                        </Box>
                        <Title className="text-center md:text-[16px] text-[13px]" mt={10}>{cat.name} ➞ </Title>
                    </Box>
                )
            }
        </Box>
    )
}

export default CategorBlock
