import Image from "next/image"
import Link from "next/link"
import { Pagination} from 'swiper';
import "swiper/css";
import "swiper/css/pagination";


import { Swiper, SwiperSlide } from "swiper/react"; 

export default function UpcomingEvents() {
    return (
      
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>{(Parent1)}</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>

    );
  }

  function Parent1(){
    return (
       <div className="upcoming-container">
            <div className="date-holder">
                <h3>30th</h3>
                Octuber
            </div>
            <div className="event-slider-content">
              <h4>Hallowen Party</h4>
              <div className="info-bottom">
                <div className="info-category"><p>Party</p>
                </div>
                <div className="event-list-time">
                  <p>12:00 Am to 11:59 Pm</p>
                </div>
              </div>
            </div>
        </div>
       
    )

function Parent2(){
    return (
      <div className="upcoming-container">
      <div className="date-holder">
          <h3>30th</h3>
          Octuber
      </div>
      <div className="event-slider-content">
        <h4>Hallowen Party</h4>
        <div className="info-bottom">
          <div className="info-category"><p>Party</p>
          </div>
          <div className="event-list-time">
            <p>12:00 Am to 11:59 Pm</p>
          </div>
        </div>
      </div>
  </div>
  
    )
}
function Parent3(){
    return (
      <div className="upcoming-container">
      <div className="date-holder">
          <h3>30th</h3>
          Octuber
      </div>
      <div className="event-slider-content">
        <h4>Hallowen Party</h4>
        <div className="info-bottom">
          <div className="info-category"><p>Party</p>
          </div>
          <div className="event-list-time">
            <p>12:00 Am to 11:59 Pm</p>
          </div>
        </div>
      </div>
  </div>
    )
}
function Parent3(){
  return (
    <div className="upcoming-container">
    <div className="date-holder">
        <h3>30th</h3>
        Octuber
    </div>
    <div className="event-slider-content">
      <h4>Hallowen Party</h4>
      <div className="info-bottom">
        <div className="info-category"><p>Party</p>
        </div>
        <div className="event-list-time">
          <p>12:00 Am to 11:59 Pm</p>
        </div>
      </div>
    </div>
</div>
  )
}
function Parent3(){
  return (
    <div className="upcoming-container">
    <div className="date-holder">
        <h3>30.</h3>
        Octuber
    </div>
    <div className="event-slider-content">
      <h4>Hallowen Party</h4>
      <div className="info-bottom">
        <div className="info-category"><p>Party</p>
        </div>
        <div className="event-list-time">
          <p>12:00 Am to 11:59 Pm</p>
        </div>
      </div>
    </div>
</div>
  )
}
  }
