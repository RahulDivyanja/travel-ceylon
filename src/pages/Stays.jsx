import React from "react";
import "../StaysUser.css";
import { Link } from "react-router-dom";
import VectorIcon from "../assets/Vector.svg"
import TaxiIcon from "../assets/taxi_alert.svg"
import ShareLocation from "../assets/share_location.svg"
import Logo from "../assets/travelCeylon.svg"
import Profile from "../assets/profile.png"

const Stays = () => {
  return (
    <>
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
                <img src={ShareLocation} alt="T" className="nav-icon" /> Tour Guides
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-center">
          <img src={Logo} alt="travelCeylon" />
        </div>
        <div className="nav-right">
          <img src={Profile} alt="Profile" className="profile-pic" />
        </div>
      </nav>
    </>
  );
};

export default Stays;