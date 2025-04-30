import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./guide-one.css";
import Progressbar from "../../../../components/progressbar";

function guideStepOne() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [nic, setNIC] = useState("");
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [linkdin, setLinkdin] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="guide-one-wrapper">
      <div className="guide-one-entry-container">
        <Progressbar currentStep={1} totalSteps={4} />
        <div className="guide-one-container">
        <div className="guide-one-email-section">
            <p className="guide-one-tag-line">Add your name</p>
            <div className="guide-one-entryarea">
              <label className="guide-one-labelline">Full name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <p className="guide-one-note" style={{fontSize:"10px",opacity:0.7}}>People will see this name when searching </p>
          </div>
          <div className="guide-one-email-section">
            <p className="guide-one-tag-line">Add your NIC Number</p>
            <div className="guide-one-entryarea">
              <label className="guide-one-labelline">NIC number</label>
              <input
                type="text"
                required
                value={nic}
                onChange={(e) => setNIC(e.target.value)}
              />
            </div>
          </div>

          <div className="guide-one-location-section">
            <p className="guide-one-tag-line">Add your Linkdin profile (optional)</p>
            <div className="guide-one-entryarea">
              <label className="guide-one-labelline">linkdin-link</label>
              <input
                type="text"
                required
                value={linkdin}
                onChange={(e) => setLinkdin(e.target.value)}
              />
            </div>
          </div>

          <div className="guide-one-button-container">
            <button className="guide-one-back-btn" onClick={() => navigate("/Registration")}>
              Back
            </button>
            <button className="guide-one-next-btn" onClick={() => navigate("/registration/guide-step-two")}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default guideStepOne;
