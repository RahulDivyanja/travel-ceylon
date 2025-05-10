import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Progressbar from "../../../../components/progressbar";
import "./taxi-six.css";

function TaxiStepSix() {
  const navigate = useNavigate();
  const [serviceDescription, setServiceDescription] = useState("");
  const [driverDescription, setDriverDescription] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="taxi-six-wrapper">
      <div className="taxi-six-entry-container">
        <Progressbar currentStep={6} totalSteps={6} />
        <div className="taxi-six-container">
          <p className="taxi-six-tag-line">Add a brief description about your service</p>
          <textarea
            rows="5"
            cols="50"
            className="taxi-six-description-box"
            placeholder="Enter your service description here..."
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
          />

          <p className="taxi-six-tag-line-d">Add a brief description about Driver (optional)</p>
          <textarea
            rows="5"
            cols="50"
            className="taxi-six-description-box"
            placeholder="Enter driver description here..."
            value={driverDescription}
            onChange={(e) => setDriverDescription(e.target.value)}
          />

          <div className="taxi-six-terms">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="taxi-six-checkbox"
            />
            <label htmlFor="agree" className="taxi-six-checkbox-label">
              I agree to the terms and conditions
            </label>
          </div>

          <div className="taxi-six-button-container">
            <button
              className="taxi-six-back-btn"
              onClick={() => navigate("/registration/taxi-step-five")}
            >
              Back
            </button>
            <button
              className="taxi-six-next-btn"
              onClick={() => navigate("/dashboard")}
              disabled={!agreed || serviceDescription.trim().length === 0}
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaxiStepSix;
