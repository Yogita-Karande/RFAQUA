import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Ourclients() {
  return (
    <>
    <h2 className='text-center'> Our Clients</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/clients/client_1.png"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/clients/client_2.png"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/clients/client_3.png"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/clients/client_4.png"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/clients/client_5.png"/>
        </SwiperSlide>
      
      </Swiper>
    </>
  );
}
