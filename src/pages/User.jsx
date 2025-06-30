import React, { useState } from 'react';
import Footer from '../../components/Footer';
import styles from './User.module.css';
import girl from '../assets/girl.png';

const BookingCard = ({ img, title, date, location }) => {
  return (
    <div className={styles.bookingCardContainer}>
      <img src={girl} alt="img" />

      <div className={styles.bookingCardLeft}>
        <div className={styles.headerContainer}>
          <div>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.location}>{location}</span>
          </div>
          <span className={styles.date}>{date}</span>
        </div>

        <button className={styles.bookingBtn}>View Booking</button>
      </div>
    </div>
  );
};

function User() {
  const navList = ["Bookings", "Account"];
  const [selectTab, setSelectTab] = useState(navList[0]);

  return (
    <div className={styles.container}>
      <div className={styles.header}></div>

      <div className={styles.profileContainer}>
        <img src={girl} className={styles.profilePic} alt="Profile" />
        <div>
          <h3 className={styles.title}>Cinnamon wild Yala</h3>
          <span className={styles.location}>Thisamaharama</span>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.topNavigationContainer}>
          {navList.map((item) => (
            <span
              key={item}
              className={item === selectTab ? styles.active : ''}
              onClick={() => setSelectTab(item)}
            >
              {item}
            </span>
          ))}
        </div>

        <div className={styles.tabViewContainer}>
          {selectTab === 'Bookings' ? (
            <div className={styles.viewContainer}>
              <div className={styles.left}>
                <BookingCard title="Toyota" location="Thissamaharama" date="2025-04-05" />
                <BookingCard title="Toyota" location="Thissamaharama" date="2025-04-05" />
              </div>
              <div className={styles.right}></div>
            </div>
          ) : (
            <div style={{ backgroundColor: '#fff' }}>
              <form className={styles.accountForm}>
                <div className={styles.formRow}>
                  <label className={styles.formLabel}>Name</label>
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div className={styles.formRow}>
                  <label className={styles.formLabel}>Email</label>
                  <input type="email" placeholder="Enter your email" />
                </div>
                <div className={styles.formRow}>
                  <label className={styles.formLabel}>Password</label>
                  <input type="password" placeholder="Enter your password" />
                </div>
                <div className={styles.formRow}>
                  <label className={styles.formLabel}>Phone number</label>
                  <input type="tel" placeholder="Enter phone number" />
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default User;
