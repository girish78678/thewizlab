import Image from "next/image"
import Link from "next/link"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function section1() {

    SwiperCore.use([Autoplay])

  return (
   

    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={60}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    breakpoints={{
        0:{
            slidesPerView: 1,
    
        },
        400:{
            slidesPerView: 1,
  
           
        },
        639:{
            slidesPerView: 1,
          
            
        },
        865:{
            slidesPerView: 1,
            
           
            
        },
        1024:{
            slidesPerView: 1,
           
        },

    }}
  >
                
                <SwiperSlide>{ Slide1() }</SwiperSlide>
                <SwiperSlide>{ Slide2() }</SwiperSlide>
                <SwiperSlide>{ Slide3() }</SwiperSlide>
                <SwiperSlide>{ Slide4() }</SwiperSlide>
            
            </Swiper>

            
 
  )
}

function Slide1(){
    return (
       <div className="container">
            <div className="image">
                <Link href={"/"}><Image src={"/images/slider/h1-revslider-img-1.jpg"} width={900} height={600} /></Link>
            </div>
       </div>
       
    )
}
function Slide2(){
    return (
      <div className="container">
            <div className="image">
                <Link href={"/"}><Image src={"/images/slider/h1-revslider-img-2.jpg"} width={900} height={600} /></Link>
            </div>
      </div>
  
    )
}
function Slide3(){
    return (
        <div className="container">
            <div className="image">
                <Link href={"/"}><Image src={"/images/slider/h1-revslider-img-3.1.jpg"} width={900} height={600} /></Link>
            </div>
        </div>
        
    )
}
function Slide4(){
    return (
       <div className="container">
            <div className="image">
                <Link href={"/"}><Image src={"/images/slider/h1-revslider-img-3.jpg"} width={900} height={600} /></Link>
            </div>
       </div>
        
    )
}