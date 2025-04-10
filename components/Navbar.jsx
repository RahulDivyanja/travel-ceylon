import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navcontainer">
        <div className="upperSection">
          <div className="logo">
            <img src="src/assets/travelCeylon.svg" alt="travelCeylon" />
          </div>
        </div>
        <div className="middleSection">
          <h1 id="firstRow">
            Dream it. Plan it <br /> We’ll make it happen{" "}
          </h1>
          <span className="secondRow">
            Your travel dreams, our responsibility
          </span>
        </div>
        <div className="navbar">
          <ul className="navList">
            <li className="navItem">
              <Link to="/stays" className="navLink">
                <img src="src/assets/Vector.svg" alt="S" className="navIcon" /> Stays
              </Link>
            </li>
            <li className="navItem">
              <Link to="/taxi" className="navLink">
                <img src="src/assets/taxi_alert.svg" alt="T" className="navIcon" /> Taxi
              </Link>
            </li>
            <li className="navItem">
              <Link to="/tour-guides" className="navLink">
                <img src="src/assets/share_location.svg" alt="T" className="navIcon" /> Tour Guides
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;