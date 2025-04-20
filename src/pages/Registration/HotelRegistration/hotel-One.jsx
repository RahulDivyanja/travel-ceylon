
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hotel-css/hotel-one.css";
import Progressbar from '../../../../components/progressbar';
import Registration from "../Registration";

function HotelStepOne() {
  const navigate = useNavigate();
  const [hotelname, sethotelName] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="hotel-one-wrapper">
      <div className="entry-container">
      <Progressbar currentStep={1} totalSteps={6} />
        <div className="container">
          <p className="tag-line">What is your hotel Name?</p>
            <div className="entryarea">
              <label className="labelline"> Add hotel name</label>
              <input
                type="text"
                required
                value={hotelname}
                onChange={(e) => sethotelName(e.target.value)}
              />
            </div>

            <p className="note">People will see this name when searching hotels</p>

            <p className="tag-line">Set you location</p>
            <div className="entryarea">
              <label className="labelline">Add location</label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>


            <div>
            <button className="back-btn" onClick={() => navigate("../Registration")}>
            Back
          </button>
          <button className="next-btn" onClick={() => navigate("/registration/hotel-step-two")}>
            Next
          </button>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default HotelStepOne;
