import { Carousel, Embla } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { useCallback, useEffect, useState } from 'react';
import { Progress } from '@mantine/core';
import { IMyCard } from '../store/type';

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
                height={200}
                getEmblaApi={setEmbla}
                initialSlide={2}
            >
                {
                    data?.map(el =>
                        <Carousel.Slide>
                            {el.title}
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