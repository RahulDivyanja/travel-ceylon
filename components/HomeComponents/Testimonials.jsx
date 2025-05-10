import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import "./Testimonials.css";
import ReviewCard from "./ReviewCard";
import Button from "./Button";

// Dummy reviews for now (later can fetch from backend)
const testimonials = [
    {
    name: "reviewUser",
    country: "Germany",
    review: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed....",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
    name: "reviewUser",
    country: "United Kingdom",
    review: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed....",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
    name: "reviewUser",
    country: "Germany",
    review: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed....",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        name: "reviewUser",
        country: "United Kingdom",
        review: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed....",
        rating: 4,
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        name: "reviewUser",
        country: "United Kingdom",
        review: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed....",
        rating: 4,
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        name: "reviewUser",
        country: "United Kingdom",
        review: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed....",
        rating: 4,
        image: "https://randomuser.me/api/portraits/men/1.jpg"
        },
    {
        name: "reviewUser",
        country: "United Kingdom",
        review: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed....",
        rating: 4,
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    }
];

function Testimonials() {

      return ( <div className="testimonial-section">
        <div>
            <p className="title">What People say about us</p>
            <p className="text">What people says about our facilities and services</p>
        </div>

        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: false,
        }}

        autoplay={{
        delay: 500,
        disableOnInteraction: false,
        }}

        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}

        modules={[Pagination]}
        className="mySwiper">

        {testimonials.map((item, index) => (
            <SwiperSlide key={index}> <ReviewCard review={item} /> </SwiperSlide>
        ))}

        </Swiper>
        

        <div className="btn-container">
            <Button text="Add review" className="add-review-btn" />
        </div>
        
      </div>
      );
};



export default Testimonials;