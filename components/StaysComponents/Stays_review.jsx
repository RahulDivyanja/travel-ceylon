import { useState } from 'react';
import "./Stays_Review.css"; 
export default function StaysReview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: 'reviewUser',
      country: 'Germany',
      profileImage: '../src/assets/Stays/user1.svg',
      text: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed....',
      rating: 5
    },
    {
      id: 2,
      user: 'reviewUser',
      country: 'United Kingdom',
      profileImage: '../src/assets/Stays/user2.svg',
      text: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed....',
      rating: 4
    },
    {
      id: 3,
      user: 'reviewUser',
      country: 'Germany',
      profileImage: '../src/assets/Stays/user3.svg',
      text: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed....',
      rating: 4
    }
  ]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setRating(0);
    setReviewText('');
  };

  const handleSubmit = () => {
    if (rating === 0) return;
    
    const newReview = {
      id: reviews.length + 1,
      user: 'reviewUser',
      country: 'Germany',
      profileImage: '../src/assets/Stays/person.png',
      text: reviewText,
      rating: rating
    };
    
    setReviews([...reviews, newReview]);
    closeModal();
  };

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className="stays-review-container">
      <div className="review-header">
        <h2 className="review-title">What People say about us</h2>
        <p className="review-subtitle">What people says about our facilities and services</p>
      </div>
      
      <div className="review-cards-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-user">
              <img src={review.profileImage} alt="User profile" className="user-image" />
              <div className="user-info">
                <p className="user-name">{review.user}</p>
                <p className="user-country">{review.country}</p>
              </div>
            </div>
            <p className="review-text">{review.text}</p>
            <div className="review-rating">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`star ${i < review.rating ? 'filled' : ''}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="add-review-btn-container">
        <button className="add-review-btn" onClick={openModal}>
          Add Review
        </button>
      </div>
      
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="review-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">How is your</h3>
                <h2 className="modal-subtitle">Experience</h2>
              </div>
              
              <div className="rating-selector">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`rating-star ${i < rating ? 'filled' : ''}`}
                    onClick={() => handleRatingClick(i + 1)}
                  >
                    ★
                  </span>
                ))}
              </div>
              
              <p className="review-form-label">Write your review</p>
              <textarea
                className="review-input"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review here..."
                rows={5}
              />
              
              <div className="modal-actions">
                <button className="submit-btn" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}