import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    // Settings for the slider
    const settings = {
        dots: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipe: true, 
        draggable: true, 
        responsive: [
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 1
            }
          }
        ]
      };

      return ( <div className="testimonial-section">
        <div>
            <p className="title">What People say about us</p>
            <p className="text">What people says about our facilities and services</p>
        </div>

        <Slider {...settings}>
          {/* Loop through the reviews and pass each one to Review component */}
          {testimonials.map((item, index) => (
            <ReviewCard key={index} review={item} />
          ))}
        </Slider>

        <div className="btn-container">
            <Button text="Add review" className="add-review-btn" />
        </div>
        
      </div>
      )
};

export default Testimonials;