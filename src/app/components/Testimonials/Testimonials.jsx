"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swipper.css";

// import required modules
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper";

import { testimonials } from "../data";

import classes from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <div id="testimonials" className={classes.container}>
      <h3>WHAT THEY SAY ABOUT ME</h3>
      <div className={classes.testimonial_mobile}>
        <Swiper
          spaceBetween={100}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className={classes.slide}>
                <h1>"{testimonial.testimonial}"</h1>
                <h2>{testimonial.name}</h2>
                <h4>{testimonial.position}</h4>
                <h4>{testimonial.company}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={classes.testimonial_desk}>
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className={classes.slide}>
                <h1>"{testimonial.testimonial}"</h1>
                <h2>{testimonial.name}</h2>
                <h4>{testimonial.position}</h4>
                <h4>{testimonial.company}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
