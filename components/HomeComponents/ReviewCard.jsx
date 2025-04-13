import React from "react";
import { FaStar } from "react-icons/fa";
import "./Testimonials.css";


function ReviewCard(props) {
    // Destructure the review object to get the required properties
    const { name, country, review: reviewText, rating, image } = props.review;
  
    return (
      <div className="testimonial-card">
        <div className="testimonial-header">
          <img src={image} alt="user" />
          <div>
            <p className="name">{name}</p>
            <small className="country">{country}</small>
          </div>
        </div>
  
        <p className="review-text">{reviewText}</p>
  
        {/* Star Rating Section */}
        <div className="stars">
          {
            Array(rating).fill().map((_, i) => (
              <FaStar key={i} color="#f5c518" className="star"/>
            ))
          }
        </div>
      </div>
    );
  };   

export default ReviewCard;