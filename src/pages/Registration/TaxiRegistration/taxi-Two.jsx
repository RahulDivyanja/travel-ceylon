import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./taxi-two.css";
import Progressbar from "../../../../components/progressbar";

function TaxiStepTwo() {
  const navigate = useNavigate();
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="taxi-two-wrapper">
      <div className="taxi-two-entry-container">
        <Progressbar currentStep={2} totalSteps={6} />
        <div className="taxi-two-container">
          <div className="taxi-two-phone-number">
            <p className="taxi-two-tag-line">Add your contact numbers</p>
            <div className="taxi-two-phone-row">
              <div className="taxi-two-entryarea">
                <label className="taxi-two-labelline">Number 1</label>
                <input
                  type="text"
                  required
                  value={number1}
                  onChange={(e) => setNumber1(e.target.value)}
                />
              </div>
              <div className="taxi-two-entryarea">
                <label className="taxi-two-labelline">Number 2</label>
                <input
                  type="text"
                  required
                  value={number2}
                  onChange={(e) => setNumber2(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="taxi-two-email-section">
            <p className="taxi-two-tag-line">Add your email</p>
            <div className="taxi-two-entryarea">
              <label className="taxi-two-labelline">Email</label>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="taxi-two-location-section">
            <p className="taxi-two-tag-line">Add your Website link (optional)</p>
            <div className="taxi-two-entryarea">
              <label className="taxi-two-labelline">Website-link</label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <div className="taxi-two-button-container">
            <button className="taxi-two-back-btn" onClick={() => navigate("/registration/taxi-step-one")}>
              Back
            </button>
            <button className="taxi-two-next-btn" onClick={() => navigate("/registration/taxi-step-three")}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaxiStepTwo;
