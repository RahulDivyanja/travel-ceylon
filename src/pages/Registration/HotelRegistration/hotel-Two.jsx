import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hotel-css/hotel.css"
import Progressbar from "../../../../components/progressbar";

function HotelStepOne() {
  const navigate = useNavigate();
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="entry-container">
      <Progressbar currentStep={2} totalSteps={6} />
      <div className="container">
        <div className="phone-number">
          <p className="tag-line">Add your contact numbers</p>

          <div className="phone-row">
            <div className="entryarea">
              <label className="labelline">Number 1</label>
              <input
                type="text"
                required
                value={number1}
                onChange={(e) => setNumber1(e.target.value)}
              />
            </div>

            <div className="entryarea">
              <label className="labelline">Number 2</label>
              <input
                type="text"
                required
                value={number2}
                onChange={(e) => setNumber2(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="email-section">
          <p className="tag-line">Add your email</p>
          <div className="entryarea">
            <label className="labelline">Email</label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="location-section">
          <p className="tag-line">Add your location</p>
          <div className="entryarea">
            <label className="labelline">Location</label>
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div>
        <button className="back-btn" onClick={() => navigate("/registration/hotel-step-one")}>
            Back
          </button>
          <button className="next-btn" onClick={() => navigate("/registration/hotel-step-three")}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelStepOne;
