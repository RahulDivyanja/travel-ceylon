import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./guide-three.css";
import Progressbar from "../../../../components/progressbar";

function GuideStepThree() {
  const navigate = useNavigate();

  const [language, setLanguage] = useState({
    english: false,
    french: false,
    german: false,
    hindi: false,
  });

  const [specialization, setSpecialization] = useState({
    history: false,
    wildlife: false,
    eco: true,
  });

  const [province, setProvince] = useState("Southern Province");
  const [district, setDistrict] = useState("Hambantota");
  const [city, setCity] = useState("Tissamaharama");

  const sriLankaData = {
    "Central Province": ["Kandy", "Matale", "Nuwara Eliya"],
    "Eastern Province": ["Ampara", "Batticaloa", "Trincomalee"],
    "Northern Province": [
      "Jaffna",
      "Kilinochchi",
      "Mannar",
      "Mullaitivu",
      "Vavuniya",
    ],
    "North Central Province": ["Anuradhapura", "Polonnaruwa"],
    "North Western Province": ["Kurunegala", "Puttalam"],
    "Sabaragamuwa Province": ["Kegalle", "Ratnapura"],
    "Southern Province": ["Galle", "Hambantota", "Matara"],
    "Uva Province": ["Badulla", "Monaragala"],
    "Western Province": ["Colombo", "Gampaha", "Kalutara"],
  };

  const handleLanguageChange = (key) => {
    setLanguage((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSpecializationChange = (key) => {
    setSpecialization((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleProvinceChange = (e) => {
    setProvince(e.target.value);
    setDistrict("");
  };

  return (
    <div className="guide-two-wrapper">
      <div className="guide-two-entry-container">
        <Progressbar currentStep={3} totalSteps={4} />
        <div className="guide-two-container">
          <h3 className="guide-three-tag-line">
            What Are the languages do you prefer?
          </h3>
          <div className="guide-step-three-checkbox-group">
            <label className="guide-step-three-checkbox-label">
              <input
                type="checkbox"
                className="guide-step-three-checkbox"
                checked={language.english}
                onChange={() => handleLanguageChange("english")}
              />
              <span className="guide-step-three-custom-checkbox"></span>
              <span className="guide-step-three-label-text">English</span>
            </label>
            <label className="guide-step-three-checkbox-label">
              <input
                type="checkbox"
                className="guide-step-three-checkbox"
                checked={language.french}
                onChange={() => handleLanguageChange("french")}
              />
              <span className="guide-step-three-custom-checkbox"></span>
              <span className="guide-step-three-label-text">French</span>
            </label>
            <label className="guide-step-three-checkbox-label">
              <input
                type="checkbox"
                className="guide-step-three-checkbox"
                checked={language.german}
                onChange={() => handleLanguageChange("german")}
              />
              <span className="guide-step-three-custom-checkbox"></span>
              <span className="guide-step-three-label-text">German</span>
            </label>
            <label className="guide-step-three-checkbox-label">
              <input
                type="checkbox"
                className="guide-step-three-checkbox"
                checked={language.hindi}
                onChange={() => handleLanguageChange("hindi")}
              />
              <span className="guide-step-three-custom-checkbox"></span>
              <span className="guide-step-three-label-text">Hindi</span>
            </label>
          </div>


          <h3 className="guide-three-tag-line">
            What is your Specializations?
          </h3>
          <div className="guide-step-three-checkbox-group">
            <label className="guide-step-three-checkbox-label">
              <input
                type="checkbox"
                className="guide-step-three-checkbox"
                checked={specialization.history}
                onChange={() => handleSpecializationChange("history")}
              />
              <span className="guide-step-three-custom-checkbox"></span>
              <span className="guide-step-three-label-text">
                History and Ancient things
              </span>
            </label>
            <label className="guide-step-three-checkbox-label">
              <input
                type="checkbox"
                className="guide-step-three-checkbox"
                checked={specialization.wildlife}
                onChange={() => handleSpecializationChange("wildlife")}
              />
              <span className="guide-step-three-custom-checkbox"></span>
              <span className="guide-step-three-label-text">
                Wildlife safaris
              </span>
            </label>
            <label className="guide-step-three-checkbox-label">
              <input
                type="checkbox"
                className="guide-step-three-checkbox"
                checked={specialization.eco}
                onChange={() => handleSpecializationChange("eco")}
              />
              <span className="guide-step-three-custom-checkbox"></span>
              <span className="guide-step-three-label-text guide-step-three-highlight">
                Eco-Adventure Guide
              </span>
            </label>
          </div>

          <h3 className="guide-three-tag-line">What is your Area</h3>
          <div className="guide-step-three-area-row">

            <div className="guide-step-three-field-container">
              <div className="guide-step-three-floating-label">Province</div>
              <div className="guide-step-three-select-wrapper">
                <select
                  className="guide-step-three-select"
                  value={province}
                  onChange={handleProvinceChange}
                >
                  {Object.keys(sriLankaData).map((prov) => (
                    <option key={prov} value={prov}>
                      {prov}
                    </option>
                  ))}
                </select>
                <div className="guide-step-three-select-arrow"></div>
              </div>
            </div>


            <div className="guide-step-three-field-container">
              <div className="guide-step-three-floating-label">District</div>
              <div className="guide-step-three-select-wrapper">
                <select
                  className="guide-step-three-select"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  disabled={!province}
                >
                  <option value="">Select District</option>
                  {province &&
                    sriLankaData[province].map((dist) => (
                      <option key={dist} value={dist}>
                        {dist}
                      </option>
                    ))}
                </select>
                <div className="guide-step-three-select-arrow"></div>
              </div>
            </div>

          
            <div className="guide-step-three-field-container">
              <div className="guide-step-three-floating-label">City</div>
              <input
                type="text"
                className="guide-step-three-input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div className="guide-two-button-container">
            <button
              className="guide-two-back-btn"
              onClick={() => navigate("/registration/guide-step-two")}
            >
              Back
            </button>
            <button
              className="guide-two-next-btn"
              onClick={() => navigate("/registration/guide-step-four")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideStepThree;
