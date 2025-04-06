import React from "react";
import LoginBtn from "./LoginBtn";
import SignupBtn from "./SignupBtn";
import { Link } from "react-router-dom";

const NavbarHome = () => {
    return ( <div className="navbar">
              <ul className="navList">
                <li className="navItem">
                  <Link to="/stays" className="navLink"><img src="src/assets/Vector.svg" alt="S" className="navIcon" />  Stays</Link>
                </li>
                <li className="navItem"> 
                  <Link to="/taxi" className="navLink"><img src="src/assets/taxi_alert.svg" alt="T" className="navIcon" />  Taxi</Link>
                </li>
                <li className="navItem">
                  <Link to="/tour-guides" className="navLink"><img src="src/assets/share_location.svg" alt="T" className="navIcon" />   Tour Guides</Link>
                </li>
              </ul>

              <div className="home-buttons">
                <LoginBtn />
                <SignupBtn />
              </div>
                
            </div>
            );
  };

export default NavbarHome;