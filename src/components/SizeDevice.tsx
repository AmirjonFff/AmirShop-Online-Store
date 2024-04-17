import { useState } from "react"

function SizeDevice() {
    const [size, setSize] = useState('S')
    return (
        <div className="flex gap-3 mt-2">
            <span className={`cursor-pointer border-colDull border-[1px] w-[30px] h-[30px] rounded-full flex items-center justify-center text-[14px] ${size === 'S' && 'border-colLight text-colLight font-bold'}`} onClick={() => setSize('S')}>S</span>
            <span className={`cursor-pointer border-colDull border-[1px] w-[30px] h-[30px] rounded-full flex items-center justify-center text-[14px] ${size === 'M' && 'border-colLight text-colLight font-bold'}`} onClick={() => setSize('M')}>M</span>
            <span className={`cursor-pointer border-colDull border-[1px] w-[30px] h-[30px] rounded-full flex items-center justify-center text-[14px] ${size === 'L' && 'border-colLight text-colLight font-bold'}`} onClick={() => setSize('L')}>L</span>
            <span className={`cursor-pointer border-colDull border-[1px] w-[30px] h-[30px] rounded-full flex items-center justify-center text-[14px] ${size === 'XL' && 'border-colLight text-colLight font-bold'}`} onClick={() => setSize('XL')}>XL</span>
        </div>
    )
}

export default SizeDevice
