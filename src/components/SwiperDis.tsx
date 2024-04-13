// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function MySwiperDis() {
    return (
        <div className='h-[400px]'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{    
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='bg-transparent'><img className='h-[90%] object-center' src="https://promogorod.kz/uploads/post/fb97b4a7fd30d65f61bdffbcb9b82910.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className='bg-transparent'><img className='h-[90%] object-center' src="https://img.freepik.com/premium-photo/clothes-rail-sale-sign-final-sale-discounts_441923-12382.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className='bg-transparent'><img className='h-[90%] object-center' src="https://europa-ts.ru/sites/default/files/field/image/lime_finalnaia_rasprodazha.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className='bg-transparent'><img className='h-[90%] object-center' src="https://sottovento.ru/images/stories/virtuemart/category/resized/rasprodaza-genskoy-odezdi_253x338.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
}
