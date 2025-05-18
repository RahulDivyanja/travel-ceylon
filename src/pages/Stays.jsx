import React from "react";
import styles from "../StaysUser.module.css";
import { Link } from "react-router-dom";
import VectorIcon from "../assets/Vector.svg";
import TaxiIcon from "../assets/taxi_alert.svg";
import ShareLocation from "../assets/share_location.svg";
import Logo from "../assets/travelCeylon.svg";
import Profile from "../assets/Ellipse 3.png";
import DestinationFilter from "../../components/DestinationFilter";
import TopHotel_cards from "../../components/StaysComponents/TopHotel_cards";
import Search_Section from "../../components/StaysComponents/Search_Section";
import Offer_cards from "../../components/StaysComponents/Offer_cards";
import Stays_review from "../../components/StaysComponents/Stays_review";
import Footer from "../../components/Footer";
import PartnerComponent from "../../components/StaysComponents/PartnerComponent";

const Stays = () => {
  return (
    <div className={styles["stays-body"]}>
      <div className={styles["stays-header"]}>
        <nav className={styles["stays-nav"]}>
          <div className={styles["nav-left"]}>
            <ul className={styles["nav-list"]}>
              <li className={styles["nav-item"]}>
                <Link to="/stays" className={styles["nav-link"]}>
                  <img src={VectorIcon} alt="S" className={styles["nav-icon"]} /> Stays
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link to="/taxi" className={styles["nav-link"]}>
                  <img src={TaxiIcon} alt="T" className={styles["nav-icon"]} /> Taxi
                </Link>
              </li>
              <li className={styles["nav-item"]}>
                <Link to="/tour-guides" className={styles["nav-link"]}>
                  <img src={ShareLocation} alt="T" className={styles["nav-icon"]} /> Tour Guides
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles["nav-center"]}>
            <img src={Logo} alt="travelCeylon" />
          </div>
          <div className={styles["nav-right"]}>
            <img src={Profile} alt="Profile" className={styles["profile-pic"]} />
            <div className={styles["profile-name"]}>SampleUser</div>
          </div>
        </nav>

        <div className={styles["text-overlay-container"]}>
          <div className={styles["text-content"]}>
            <h1 className={styles["main-heading"]}>
              Make your travel wishlist, we'll do the rest
            </h1>
            <p className={styles["sub-heading"]}>Special offers to suit your plan</p>
          </div>
        </div>

        <DestinationFilter />

        <div className={styles["stays-card"]}>
          <div className={styles["section-header"]}>
            <div className={styles["section-title"]}>Top Hotels & Stays</div>
            <div className={styles["section-subtitle"]}>
              Celebrate in style. Sleep somewhere unforgettable. Browse
              top-rated stays for every getaway—whether it’s a reunion, a
              retreat, or a little adventure.
            </div>
          </div>
          <TopHotel_cards />
        </div>

        <Search_Section />

        <div className={styles["offer-section"]}>
          <div className={styles["offer-title1"]}>What we Offer</div>
          <div className={styles["offer-subtitle1"]}>
            Enjoy unforgettable stays across Sri Lanka with handpicked hotels
            for every traveler. From beachfront villas to hilltop hideaways,
            each stay promises comfort, charm, and convenience. Verified
            properties, transparent rates, and flexible check-in options—book
            instantly and stay your way!
          </div>
          <div className={styles["offer-cards"]}>
            <Offer_cards />
          </div>
        </div>

        <div className={styles["review-section"]}>
          <Stays_review />
        </div>

        <PartnerComponent />

        <div className={styles["footer-section"]}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Stays;
