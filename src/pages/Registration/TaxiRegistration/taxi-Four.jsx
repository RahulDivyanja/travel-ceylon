import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './taxi-four.css';
import Progressbar from "../../../../components/progressbar";

function TaxiStepFour() {
  const navigate = useNavigate();
  const [facilities, setFacilities] = useState({
    helmets: false,
    rainJackets:false,
    gps: false,
    usbCharging: false,
    airConditioning: false,
    luggageSpace: false,
    childSeat: false,
    musicSystem: false,
    reverseCamera: false,
    firstAidKit: false,
    wifi: false,
    tintedWindows: false,
    spareTire: false,
    mobileHolder: false,
    trackingSystem: false,
    phoneSupport: false,
    acAdjustableSeats: false,
    bluetooth: false
  });

  const handleCheckboxChange = (name) => {
    setFacilities(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const facilityList = [
    { key: "helmets", label: "Helmets" },
    { key: "rainJackets",label:"Rain Jackets"},
    { key: "gps", label: "GPS Navigation" },
    { key: "usbCharging", label: "USB Charging Port" },
    { key: "airConditioning", label: "Air Conditioning" },
    { key: "luggageSpace", label: "Luggage Space" },
    { key: "childSeat", label: "Child Seat" },
    { key: "musicSystem", label: "Music System" },
    { key: "reverseCamera", label: "Reverse Camera" },
    { key: "firstAidKit", label: "First Aid Kit" },
    { key: "wifi", label: "WiFi Available" },
    { key: "tintedWindows", label: "Tinted Windows" },
    { key: "spareTire", label: "Spare Tire" },
    { key: "mobileHolder", label: "Mobile Holder" },
    { key: "trackingSystem", label: "Tracking System" },
    { key: "phoneSupport", label: "Phone Holder" },
    { key: "acAdjustableSeats", label: "A/C Adjustable Seats" },
    { key: "bluetooth", label: "Bluetooth Connectivity" }
  ];

  const leftFacilities = facilityList.slice(0, 9);
  const rightFacilities = facilityList.slice(9);

  return (
    <div className="step-four-entry-container">
      <Progressbar currentStep={4} totalSteps={6} />
      <div className="step-four-container">
        <div className="step-four-facilities-header">
          <p className="step-four-tag-line">What are the Vehicle Facilities?</p>
        </div>
        <div className="step-four-checkbox-container">
          <div className="step-four-left-column">
            {leftFacilities.map(facility => (
              <label key={facility.key} className="step-four-checkbox-label">
                <input
                  type="checkbox"
                  className="step-four-checkbox"
                  checked={facilities[facility.key]}
                  onChange={() => handleCheckboxChange(facility.key)}
                />
                <span className="custom-checkbox"></span>
                <span className="step-four-label-text">{facility.label}</span>
              </label>
            ))}
          </div>
          <div className="step-four-right-column">
            {rightFacilities.map(facility => (
              <label key={facility.key} className="step-four-checkbox-label">
                <input
                  type="checkbox"
                  className="step-four-checkbox"
                  checked={facilities[facility.key]}
                  onChange={() => handleCheckboxChange(facility.key)}
                />
                <span className="custom-checkbox"></span>
                <span className="step-four-label-text">{facility.label}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="step-four-nav-buttons">
          <button className="step-four-back-btn" onClick={() => navigate("/registration/taxi-step-three")}>
            Back
          </button>
          <button className="step-four-next-btn" onClick={() => navigate("/registration/taxi-step-five")}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaxiStepFour;
