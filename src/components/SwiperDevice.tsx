import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { useState, useEffect } from 'react';

interface ImySwiperDevice {
    images: string[];
}

export default function MySwiperDevice({ images }: ImySwiperDevice) {

    const [tab, setTab] = useState(0);
    const [swiper, setSwiper] = useState<any>(null);

    useEffect(() => {
        if (swiper) {
            swiper.on('slideChange', () => {
                setTab(swiper.realIndex);
            });
        }
    }, [swiper]);

    const handleTabClick = (index: number) => {
        setTab(index);
        if (swiper) {
            swiper.slideTo(index);
        }
    };

    return (
        <div className='w-[570px] flex gap-5 items-start'>
            <div className='w-[100px] flex flex-col gap-4'>
                {
                    images.map((img, i) =>
                        <div key={i} className={`${i === tab && "outline-colLight outline outline-2"} w-[100px] h-[100px] bg-colDull`} onClick={() => handleTabClick(i)} >
                            <img className='w-full h-[100%]' src={img} alt="" />
                        </div>
                    )
                }
            </div>
            <div className='h-[450px] w-[450px] bg-colDull'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Navigation]}
                    initialSlide={tab}
                    className="mySwiper"
                    onSwiper={setSwiper}
                >
                    {
                        images.map(image =>
                            <SwiperSlide key={image} className='bg-transparent flex'><img className='h-[90%] object-center' src={image} alt="" /></SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
}
