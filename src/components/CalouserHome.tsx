import { Carousel, Embla } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Box, Progress } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { IMyCard } from '../store/type';
import { MyCard } from './Card';

interface ICalouserHome {
    data: IMyCard[] | undefined
}

export function CalouserHome({ data }: ICalouserHome) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [embla, setEmbla] = useState<Embla | null>(null);

    const handleScroll = useCallback(() => {
        if (!embla) return;
        const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
        setScrollProgress(progress * 100);
    }, [embla, setScrollProgress]);

    useEffect(() => {
        if (embla) {
            embla.on('scroll', handleScroll);
            handleScroll();
        }
    }, [embla]);

    return (
        <>
            <Carousel
                dragFree
                slideSize="25%"
                slideGap="md"
                align="start"
                getEmblaApi={setEmbla}
                initialSlide={2}
            >
                {
                    data?.map(el =>
                        <Carousel.Slide key={el.id}>
                            <Box my={10} h={380} w={250}>
                                <MyCard card={el} />
                            </Box>
                        </Carousel.Slide>
                    )
                }
            </Carousel>
            <Progress
                value={scrollProgress}
                maw={320}
                size="sm"
                mt="xl"
                mx="auto"
            />
        </>
    );
}