import { Box, Image } from "@mantine/core";
import { useState } from "react";

function HoverSlider({ image }: { image: string[] }) {
    const [st, setSt] = useState(0)
    const wb = 100 / (image.length - 1)

    return (
        <Box>
            <Box className="w-full relative bg-red-700">
                <Box className="w-full h-[100%]">
                    <Image src={image[st]} />
                </Box>
                <Box onMouseOut={() => setSt(0)} className="absolute top-0 flex w-full h-[100%] z-50">
                    {
                        image.slice(1, image.length).map((_, i) =>
                            <Box onMouseOver={() => setSt(i + 1)
                            } key={i} w={wb + '%'} h={'100%'}>
                            </Box>
                        )
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default HoverSlider
