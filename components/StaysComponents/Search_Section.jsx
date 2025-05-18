import React from 'react';
import styles from "./Search_Section.module.css";


const Search_Section = () => {
  return (
    <div className={styles.CustomSection}>
      <div className={styles.ManImg}>
       <img src="../src/assets/Stays/Search_Man.png" alt="Image" />
      </div>
      <div className={styles.SSectionContent}>
        <h1 className={styles.sTitle}>
          Looking for the Best Hotels for Your Dream Vacation?
        </h1>
        <p className={styles.sPar}>
          At travelCeylon, we bring you Sri Lanka’s most unforgettable stays from sun-kissed beach villas 
          in Bentota to charming colonial-era boutiques in Colombo. Every property is handpicked for comfort, character, 
          and convenience, so your getaway feels just right from the moment you check in.
        </p>
        <div>
          <button className={styles.sBtn}>Search Hotel</button>
        </div>
      </div>
    </div>
  );
};

export default Search_Section;
