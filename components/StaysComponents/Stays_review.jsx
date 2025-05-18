import { useState } from 'react';
import styles from "./Stays_Review.module.css"; 

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
    <div className={styles.staysReviewContainer}>
      <div className={styles.reviewHeader}>
        <h2 className={styles.reviewTitle}>What People say about us</h2>
        <p className={styles.reviewSubtitle}>What people says about our facilities and services</p>
      </div>
      
      <div className={styles.reviewCardsContainer}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.reviewUser}>
              <img src={review.profileImage} alt="User profile" className={styles.userImage} />
              <div className={styles.userInfo}>
                <p className={styles.userName}>{review.user}</p>
                <p className={styles.userCountry}>{review.country}</p>
              </div>
            </div>
            <p className={styles.reviewText}>{review.text}</p>
            <div className={styles.reviewRating}>
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`${styles.star} ${i < review.rating ? styles.filled : ""}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.addReviewBtnContainer}>
        <button className={styles.addReviewBtn} onClick={openModal}>
          Add Review
        </button>
      </div>
      
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.reviewModal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>How is your</h3>
                <h2 className={styles.modalSubtitle}>Experience</h2>
              </div>
              
              <div className={styles.ratingSelector}>
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`${styles.ratingStar} ${i < rating ? styles.filled : ""}`}
                    onClick={() => handleRatingClick(i + 1)}
                  >
                    ★
                  </span>
                ))}
              </div>
              
              <p className={styles.reviewFormLabel}>Write your review</p>
              <textarea
                className={styles.reviewInput}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review here..."
                rows={5}
              />
              
              <div className={styles.modalActions}>
                <button className={styles.submitBtn} onClick={handleSubmit}>
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