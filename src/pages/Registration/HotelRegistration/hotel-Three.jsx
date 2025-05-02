import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './hotel-three.css';
import Progressbar from "../../../../components/progressbar";

function HotelStepThree() {
  const navigate = useNavigate();
  const [facilities, setFacilities] = useState({
    breakfast: false,
    roomService: false,
    bar: false,
    frontDesk24h: false,
    airportShuttle: false,
    airportShuttleAlt: false,
    fitnessCenter: false,
    garden: false,
    parking: false,
    nonSmokingRooms: false,
    familyRooms: false,
    freeWifi: false,
    airConditioning: false,
    spa: false,
    swimmingPool: false,
    waterPark: false,
    beach: false
  });

  const handleCheckboxChange = (name) => {
    setFacilities(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const facilityList = [
    { key: "breakfast", label: "Breakfast" },
    { key: "roomService", label: "Room service" },
    { key: "bar", label: "Bar" },
    { key: "frontDesk24h", label: "24-hour front desk" },
    { key: "airportShuttle", label: "Airport Shuttle (Standard)" },
    { key: "airportShuttleAlt", label: "Airport Shuttle (Premium)" },
    { key: "fitnessCenter", label: "Fitness Center" },
    { key: "garden", label: "Garden" },
    { key: "parking", label: "Parking" },
    { key: "nonSmokingRooms", label: "Non-Smoking Rooms" },
    { key: "familyRooms", label: "Family Rooms" },
    { key: "freeWifi", label: "Free WiFi" },
    { key: "airConditioning", label: "Air Conditioning" },
    { key: "spa", label: "Spa" },
    { key: "swimmingPool", label: "Swimming Pool" },
    { key: "waterPark", label: "Water Park" },
    { key: "beach", label: "Beach" }
  ];

  const leftFacilities = facilityList.slice(0, 9);
  const rightFacilities = facilityList.slice(9);

  return (
    <div className="step-three-entry-container">
      <Progressbar currentStep={3} totalSteps={6} />
      <div className="step-three-container">
        <div className="step-three-facilities-header">
          <p className="step-three-tag-line">What are the Facilities?</p>
        </div>
        <div className="step-three-checkbox-container">
          <div className="step-three-left-column">
            {leftFacilities.map(facility => (
              <label key={facility.key} className="step-three-checkbox-label">
                <input
                  type="checkbox"
                  className="step-three-checkbox"
                  checked={facilities[facility.key]}
                  onChange={() => handleCheckboxChange(facility.key)}
                />
                <span className="custom-checkbox"></span>
                <span className="step-three-label-text">{facility.label}</span>
              </label>
            ))}
          </div>
          <div className="step-three-right-column">
            {rightFacilities.map(facility => (
              <label key={facility.key} className="step-three-checkbox-label">
                <input
                  type="checkbox"
                  className="step-three-checkbox"
                  checked={facilities[facility.key]}
                  onChange={() => handleCheckboxChange(facility.key)}
                />
                <span className="custom-checkbox"></span>
                <span className="step-three-label-text">{facility.label}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="step-three-nav-buttons">
          <button className="step-three-back-btn" onClick={() => navigate("/registration/hotel-step-two")}>
            Back
          </button>
          <button className="step-three-next-btn" onClick={() => navigate("/registration/hotel-step-four")}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelStepThree;
