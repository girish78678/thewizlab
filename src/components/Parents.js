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

export default function Parents() {

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
                
                <SwiperSlide>{ Parent1() }</SwiperSlide>
                <SwiperSlide>{ Parent2() }</SwiperSlide>
                <SwiperSlide>{ Parent3() }</SwiperSlide>
            
            </Swiper>

            
 
  )
}

function Parent1(){
    return (
       <div className="review-container">
            <div className="review">
                <p> 
Eos audire molestie ex, nam argumentum referrentur an, cuclita offendit voluptatum pri. Assum facilisis definie.	</p>
                <div className="reviews">
                    <div className="rev-img">
                    <Link href={"/"}><Image src={"/images/reviews/sunny's.png"} width={40} height={40} /></Link>
                            </div>
                    <div className="rev-name"><h2>Sunny's Mom</h2></div>
                </div>
             </div>
       </div>
       
    )
}
function Parent2(){
    return (
        <div className="review-container">
        <div className="review">
            <p> 
Cum habeo facilis postulantne. Meliore recteque adpri, mei debet urbanitas. Exchoro complectitur et disputationi ius. </p>
            <div className="reviews">
                <div className="rev-img">
                <Link href={"/"}><Image src={"/images/reviews/jacobs.png"} width={40} height={40} /></Link>
                </div>
                <div className="rev-name"><h2>Jacodb's Dad</h2></div>
            </div>
         </div>
   </div>
  
    )
}
function Parent3(){
    return (
         <div className="review-container">
            <div className="review">
            <p>Meliore recteque ad pri, mei debet urbanitas necessitatibus in. Exemusite comple disputatius, dicit maiestatis ex.	</p>
            <div className="reviews">
                  <div className="rev-img"> 
                  <Link href={"/"}><Image src={"/images/reviews/kelly.png"} width={40} height={40} /></Link>
                  </div>
                <div className="rev-name"><h2>Kelly's Mom</h2></div>
        </div>
        </div>
        </div>
    )
}
