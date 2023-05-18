import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/css";

export default function slidesshow() {

  SwiperCore.use([Autoplay])

  return (
    <>
      <Swiper 
      autoplay={{
        delay: 2500,
        pauseOnMouseEnter:true,
        reverseDirection: true,
        disableOnInteraction:true,
      }}
      spaceBetween={25}
      slidesPerView={4.5}
      loop={true}
      className="mySwiper swiper-slide--2 slider--kids slide--show-1">
        <SwiperSlide><img src="images/book--a-party/kid-10.jpeg/" alt="image"/></SwiperSlide>
        <SwiperSlide><img src="images/book--a-party/kid-11.jpeg/" alt="image"/></SwiperSlide>
        <SwiperSlide><img src="images/book--a-party/kid-12.jpeg/" alt="image"/></SwiperSlide>
        <SwiperSlide><img src="images/book--a-party/kid-13.jpeg/" alt="image"/></SwiperSlide>
        <SwiperSlide><img src="images/book--a-party/kid-14.jpeg/" alt="image"/></SwiperSlide>
        <SwiperSlide><img src="images/book--a-party/kid-15.jpeg/" alt="image"/></SwiperSlide>
        <SwiperSlide><img src="images/book--a-party/kid-16.jpeg/" alt="image"/></SwiperSlide>
        <SwiperSlide><img src="images/book--a-party/kid-17.jpeg/" alt="image"/></SwiperSlide>
        <SwiperSlide><img src="images/book--a-party/kid-18.jpeg/" alt="image"/></SwiperSlide>
      </Swiper>
    </>
  );
}