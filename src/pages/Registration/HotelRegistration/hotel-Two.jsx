import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./hotel-two.css";
import Progressbar from "../../../../components/progressbar";

function HotelStepTwo() {
  const navigate = useNavigate();
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="hotel-two-wrapper">
      <div className="hotel-two-entry-container">
        <Progressbar currentStep={2} totalSteps={6} />
        <div className="hotel-two-container">
          <div className="hotel-two-phone-number">
            <p className="hotel-two-tag-line">Add your contact numbers</p>
            <div className="hotel-two-phone-row">
              <div className="hotel-two-entryarea">
                <label className="hotel-two-labelline">Number 1</label>
                <input
                  type="text"
                  required
                  value={number1}
                  onChange={(e) => setNumber1(e.target.value)}
                />
              </div>
              <div className="hotel-two-entryarea">
                <label className="hotel-two-labelline">Number 2</label>
                <input
                  type="text"
                  required
                  value={number2}
                  onChange={(e) => setNumber2(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="hotel-two-email-section">
            <p className="hotel-two-tag-line">Add your email</p>
            <div className="hotel-two-entryarea">
              <label className="hotel-two-labelline">Email</label>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="hotel-two-location-section">
            <p className="hotel-two-tag-line">Add your Website link</p>
            <div className="hotel-two-entryarea">
              <label className="hotel-two-labelline">Website-link</label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <div className="hotel-two-button-container">
            <button className="hotel-two-back-btn" onClick={() => navigate("/registration/hotel-step-one")}>
              Back
            </button>
            <button className="hotel-two-next-btn" onClick={() => navigate("/registration/hotel-step-three")}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelStepTwo;
