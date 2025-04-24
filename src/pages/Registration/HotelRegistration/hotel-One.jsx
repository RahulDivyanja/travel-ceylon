import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./hotel-one.css";
import Progressbar from '../../../../components/progressbar';

function HotelStepOne() {
  const navigate = useNavigate();
  const [hotelname, sethotelName] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="hotel-one-wrapper">
      <div className="hotel-one-entry-container">
        <div className="hotel-one-top-spacer"></div>
        <Progressbar className="hotel-one-progressbar" currentStep={1} totalSteps={6} />
        <div className="hotel-one-container">
          <p className="hotel-one-tag-line">What is your hotel Name?</p>
          <div className="hotel-one-entryarea">
            <label className="hotel-one-labelline">Add hotel name</label>
            <input
              type="text"
              required
              value={hotelname}
              onChange={(e) => sethotelName(e.target.value)}
            />
          </div>

          <p className="hotel-one-note">People will see this name when searching hotels</p>

          <p className="hotel-one-tag-line">Set your location</p>
          <div className="hotel-one-entryarea">
            <label className="hotel-one-labelline">Add location</label>
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="hotel-one-button-container">
            <button className="hotel-one-back-btn" onClick={() => navigate("../Registration")}>
              Back
            </button>
            <button className="hotel-one-next-btn" onClick={() => navigate("/registration/hotel-step-two")}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelStepOne;
