import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Progressbar from "../../../../components/progressbar";
import "./guide-four.css";

function GuideStepFour() {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="guide-four-wrapper">
      <div className="guide-four-entry-container">
      <Progressbar currentStep={4} totalSteps={4} />
        <div className="guide-four-container">
          <p className="guide-four-tag-line">Add a brief description about you</p>
          <textarea
            rows="5"
            cols="50"
            className="guide-four-description-box"
            placeholder="Enter your description here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="guide-four-terms">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="guide-four-checkbox"
            />
            <label htmlFor="agree" className="guide-four-checkbox-label">
              I agree to the terms and conditions
            </label>
          </div>

          <div className="guide-four-button-container">
            <button className="guide-four-back-btn" onClick={() => navigate("/registration/guide-step-three")}>
              Back
            </button>
            <button 
              className="guide-four-next-btn" 
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

export default GuideStepFour;