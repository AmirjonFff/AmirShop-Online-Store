import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation } from 'swiper/modules';

export default function MySwiper() {
    return (
        <div className='h-[500px]'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}

                navigation={false}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='bg-transparent'><img className='h-[90%] object-center' src="image/home/обув.png" alt="" /></SwiperSlide>
                <SwiperSlide className='bg-transparent'><img className='h-[90%] object-center' src="image/home/одежда.png" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
}
