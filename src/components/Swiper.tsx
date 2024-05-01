import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation } from 'swiper/modules';


export default function MySwiper() {

    const navigate = useNavigate();

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
                <SwiperSlide onClick={() => navigate('/shop')} className='bg-transparent cursor-pointer'><img className='h-[90%] object-center' src="image/home/обув.png" alt="" /></SwiperSlide>
                <SwiperSlide onClick={() => navigate('/shop')} className='bg-transparent cursor-pointer'><img className='h-[90%] object-center' src="image/home/одежда.png" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
}
