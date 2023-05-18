import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/css";

export default function Reverseshow() {

  SwiperCore.use([Autoplay])

  return (
    <>
      <Swiper 
      autoplay={{
        delay: 2500,
        pauseOnMouseEnter:true,
        reverseDirection: false,
        disableOnInteraction:true,
      }}
      spaceBetween={42}
      slidesPerView={4}
      loop={true}
      className="mySwiper swiper-slide--2 slider--kids slide--show-2">
        <SwiperSlide><img src="images/book--a-party/kid-1.jpeg/" alt="image"/></SwiperSlide>
        <SwiperSlide><img src="images/book--a-party/kid-2.jpeg/" alt="image"/></SwiperSlide>
        <SwiperSlide><img src="images/book--a-party/kid-3.jpg/" alt="image"/></SwiperSlide>
        <SwiperSlide><img src="images/book--a-party/kid-4.jpeg/" alt="image"/></SwiperSlide>
        <SwiperSlide><img src="images/book--a-party/kid-5.jpeg/" alt="image"/></SwiperSlide>
        <SwiperSlide><img src="images/book--a-party/kid-6.jpeg/" alt="image"/></SwiperSlide>
        <SwiperSlide><img src="images/book--a-party/kid-7.jpeg/" alt="image"/></SwiperSlide>
        <SwiperSlide><img src="images/book--a-party/kid-8.jpeg/" alt="image"/></SwiperSlide>
        <SwiperSlide><img src="images/book--a-party/kid-9.jpeg/" alt="image"/></SwiperSlide>
      </Swiper>
    </>
  );
}