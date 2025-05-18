import React from "react";
import { Link } from "react-router-dom";
import "../StaysUser.module.css"; // Updated CSS file for unique styles
import VectorIcon from "../assets/VectorBlack.png";
import TaxiIcon from "../assets/taxi_alertBlack.svg";
import ShareLocation from "../assets/share_locationBlack.svg";
import Logo from "../assets/travelCeylonBlack.svg";
import Profile from "../assets/Ellipse 3.png";
import Stays from "./Stays";
import StaysCard from "../../components/StaysCard";

const StaysFilter = () => {
  return (
    <div className="stays-filter-body">
      <div className="stays-filter-header">
        <nav className="stays-filter-nav">
          <div className="stays-filter-nav-left">
            <ul className="stays-filter-nav-list">
              <li className="stays-filter-nav-item">
                <Link to="/stays" className="stays-filter-nav-link">
                  <img src={VectorIcon} alt="S" className="stays-filter-nav-icon" /> Stays
                </Link>
              </li>
              <li className="stays-filter-nav-item">
                <Link to="/taxi" className="stays-filter-nav-link">
                  <img src={TaxiIcon} alt="T" className="stays-filter-nav-icon" /> Taxi
                </Link>
              </li>
              <li className="stays-filter-nav-item">
                <Link to="/tour-guides" className="stays-filter-nav-link">
                  <img src={ShareLocation} alt="T" className="stays-filter-nav-icon" /> Tour Guides
                </Link>
              </li>
            </ul>
          </div>
          <div className="stays-filter-nav-center">
            <img src={Logo} alt="travelCeylon" className="stays-filter-logo" />
          </div>
          <div className="stays-filter-nav-right">
            <img src={Profile} alt="Profile" className="stays-filter-profile-pic" />
            <div className="stays-filter-profile-name">SampleUser</div>
          </div>
        </nav>
      </div>
      <section>
        <StaysCard />
      </section>
    </div>
  );
};

export default StaysFilter;