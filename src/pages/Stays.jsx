import React from "react";
import "../StaysUser.css";
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
const Stays = () => {
  return (
    <>
      <div className="stays-body">
        <div className="stays-header">
          <nav className="stays-nav">
            <div className="nav-left">
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/stays" className="nav-link">
                    <img src={VectorIcon} alt="S" className="nav-icon" /> Stays
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/taxi" className="nav-link">
                    <img src={TaxiIcon} alt="T" className="nav-icon" /> Taxi
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/tour-guides" className="nav-link">
                    <img src={ShareLocation} alt="T" className="nav-icon" />{" "}
                    Tour Guides
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-center">
              <img src={Logo} alt="travelCeylon" />
            </div>
            <div className="nav-right">
              <img src={Profile} alt="Profile" className="profile-pic" />
              <div className="profile-name">SampleUser</div>
            </div>
          </nav>
          <div className="text-overlay-container">
            <div className="text-content">
              <h1 className="main-heading">
                Make your travel wishlist, we'll do the rest
              </h1>
              <p className="sub-heading">Special offers to suit your plan</p>
            </div>
          </div>
          <DestinationFilter />
          <div className="stays-card">
            <div className="section-header">
              <div className="section-title">Top Hotels & Stays</div>
              <div className="section-subtitle">
                Celebrate in style. Sleep somewhere unforgettable. Browse
                top-rated stays for every getaway—whether it’s a reunion, a
                retreat, or a little adventure.
              </div>
            </div>
            <TopHotel_cards />
          </div>
          <Search_Section />
          <div className="offer-section">
            <div className="offer-title1">What we Offer</div>
            <div className="offer-subtitle1">
              Enjoy unforgettable stays across Sri Lanka with handpicked hotels
              for every traveler. From beachfront villas to hilltop hideaways,
              each stay promises comfort, charm, and convenience. Verified
              properties, transparent rates, and flexible check-in options—book
              instantly and stay your way!
            </div>
            <div className="offer-cards">
              <Offer_cards />
            </div>
          </div>
          <div className="review-section">
            <Stays_review />
          </div>
        </div>
      </div>
    </>
  );
};

export default Stays;
