import { Box, Button } from '@mantine/core'

interface IHandleQuantity {
    quantity: number,
    increment: () => void,
    decrement: () => void
}
function HandleQuantity({ quantity, increment, decrement }: IHandleQuantity) {
    return (
        <Box className='flex items-center gap-4'>
            <Button disabled={quantity <= 1} className={`btnDis cursor-pointer w-[33px] px-0 h-[38px] bg-colLight text-white font-bold rounded-full flex items-center justify-center text-[20px] pb-1`} onClick={() => decrement()}>-</Button>
            <Box className="text-[20px] font-[500]">{quantity}</Box>
            <Button disabled={quantity >= 9} className={`btnDis cursor-pointer w-[33px] px-0 h-[38px] bg-colLight text-white font-bold rounded-full flex items-center justify-center text-[20px] pb-1`} onClick={() => increment()}>+</Button>
        </Box>
    )
}

export default HandleQuantity
