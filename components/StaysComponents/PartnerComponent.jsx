import React from 'react';
import styles from './PartnerComponent.module.css';

const PartnerComponent = () => {
  return (
    <div className={styles.partnerContainer}>
      <div className={styles.partnerContent}>
        <div className={styles.partnerText}>
          <h1>Partner with Sri Lanka's Largest hotel booking Platform</h1>
          <p>
            Partner with us to showcase your property to thousands of travelers. 
            Benefit from our marketing tools, real-time booking management, and 
            dedicated support to grow your business.Your journey starts here – 
            where Sri Lanka's hospitality meets hassle-free planning
          </p>
          <button className={styles.partnerButton}>List your Hotel</button>
        </div>
        
        <div className={styles.partnerImage}>
          <img 
            src="../src/assets/Stays/businessman-house.png" 
            alt="image"
            className={styles.partnerBusinessmanImage}
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerComponent;