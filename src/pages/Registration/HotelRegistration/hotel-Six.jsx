import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Progressbar from "../../../../components/progressbar";
import "./hotel-six.css";

function HotelStepSix() {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="hotel-six-wrapper">
      <div className="hotel-six-entry-container">
      <Progressbar currentStep={6} totalSteps={6} />
        <div className="hotel-six-container">
          <p className="hotel-six-tag-line">Add a brief description about your hotel</p>
          <textarea
            rows="5"
            cols="50"
            className="hotel-six-description-box"
            placeholder="Enter your description here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="hotel-six-terms">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="hotel-six-checkbox"
            />
            <label htmlFor="agree" className="hotel-six-checkbox-label">
              I agree to the terms and conditions
            </label>
          </div>

          <div className="hotel-six-button-container">
            <button className="hotel-six-back-btn" onClick={() => navigate("/registration/hotel-step-five")}>
              Back
            </button>
            <button 
              className="hotel-six-next-btn" 
              onClick={() => navigate("/dashboard")}
              disabled={!agreed || description.trim().length === 0}
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelStepSix;