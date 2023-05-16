import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/css";

export default function Slideshow() {

  SwiperCore.use([Autoplay])

  return (
    <>
      <Swiper 
      spaceBetween={0}
      slidesPerView={3}
      loop={true}
      className="mySwiper swiper-slide--2 slider--kids">
        <SwiperSlide><img src="images/pricing-plans/slide-1.jpeg/" alt="image" width="800" height="600"/> </SwiperSlide>
        <SwiperSlide><img src="images/pricing-plans/slide-2.jpeg/" alt="image"/></SwiperSlide>
        <SwiperSlide><img src="images/pricing-plans/slide-3.jpeg/" alt="image"/></SwiperSlide>
        <SwiperSlide><img src="images/pricing-plans/slide-4.jpeg/" alt="image"/></SwiperSlide>
        <SwiperSlide><img src="images/pricing-plans/slide-5.jpeg/" alt="image"/></SwiperSlide>
        <SwiperSlide><img src="images/pricing-plans/slide-6.jpeg/" alt="image"/></SwiperSlide>
      </Swiper>
    </>
  );
}