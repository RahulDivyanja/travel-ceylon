import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hotel-css/hotel-one.css";
import Progressbar from "../../../../components/progressbar";
// Using existing hotel.css

function HotelStepThree() {
  const navigate = useNavigate();

  const [facilities, setFacilities] = useState({
    breakfast: false,
    roomService: false,
    bar: false,
    frontDesk24h: false,
    airportShuttle: false,
    fitnessCenter: false,
    garden: false,
    parking: false,
    nonSmokingRooms: false,
    familyRooms: false,
    airportShuttleAlt: false,
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

  return (
    <div className="entry-container">
      <Progressbar currentStep={2} totalSteps={6} />
      <div className="container">
        <div className="facilities-checklist">
          <h2 className="tag-line">What are the Facilities?</h2>
        </div>
        
        <div className="checkbox-group">
          <div className="left-checkbox-group">
            <label>
              <input 
                type="checkbox" 
                checked={facilities.breakfast}
                onChange={() => handleCheckboxChange("breakfast")}
              />
              Breakfast
            </label>
            
            <label>
              <input 
                type="checkbox" 
                checked={facilities.roomService}
                onChange={() => handleCheckboxChange("roomService")}
              />
              Room service
            </label>
            
            <label>
              <input 
                type="checkbox" 
                checked={facilities.bar}
                onChange={() => handleCheckboxChange("bar")}
              />
              Bar
            </label>
            
            <label>
              <input 
                type="checkbox" 
                checked={facilities.frontDesk24h}
                onChange={() => handleCheckboxChange("frontDesk24h")}
              />
              24-hour front desk
            </label>
            
            <label>
              <input 
                type="checkbox" 
                checked={facilities.airportShuttle}
                onChange={() => handleCheckboxChange("airportShuttle")}
              />
              Airport shuttle
            </label>
            
            <label>
              <input 
                type="checkbox" 
                checked={facilities.fitnessCenter}
                onChange={() => handleCheckboxChange("fitnessCenter")}
              />
              Fitness Center
            </label>
            
            <label>
              <input 
                type="checkbox" 
                checked={facilities.garden}
                onChange={() => handleCheckboxChange("garden")}
              />
              Garden
            </label>
            
            <label>
              <input 
                type="checkbox" 
                checked={facilities.parking}
                onChange={() => handleCheckboxChange("parking")}
              />
              Parking
            </label>
            
            <label>
              <input 
                type="checkbox" 
                checked={facilities.nonSmokingRooms}
                onChange={() => handleCheckboxChange("nonSmokingRooms")}
              />
              Non-Smoking rooms
            </label>
          </div>
          
          <div className="right-checkbox-group">
            <label>
              <input 
                type="checkbox" 
                checked={facilities.familyRooms}
                onChange={() => handleCheckboxChange("familyRooms")}
              />
              Family Rooms
            </label>
            
            <label>
              <input 
                type="checkbox" 
                checked={facilities.airportShuttleAlt}
                onChange={() => handleCheckboxChange("airportShuttleAlt")}
              />
              Airport Shuttle
            </label>
            
            <label>
              <input 
                type="checkbox" 
                checked={facilities.freeWifi}
                onChange={() => handleCheckboxChange("freeWifi")}
              />
              Free WiFi
            </label>
            
            <label>
              <input 
                type="checkbox" 
                checked={facilities.airConditioning}
                onChange={() => handleCheckboxChange("airConditioning")}
              />
              Air conditioning
            </label>
            
            <label>
              <input 
                type="checkbox" 
                checked={facilities.spa}
                onChange={() => handleCheckboxChange("spa")}
              />
              Spa
            </label>
            
            <label>
              <input 
                type="checkbox" 
                checked={facilities.swimmingPool}
                onChange={() => handleCheckboxChange("swimmingPool")}
              />
              Swimming Pool
            </label>
            
            <label>
              <input 
                type="checkbox" 
                checked={facilities.waterPark}
                onChange={() => handleCheckboxChange("waterPark")}
              />
              Water Park
            </label>
            
            <label>
              <input 
                type="checkbox" 
                checked={facilities.beach}
                onChange={() => handleCheckboxChange("beach")}
              />
              Beach
            </label>
          </div>
        </div>

        <div className="navigation-buttons">
          <button className="back-btn" onClick={() => navigate("/registration/hotel-step-two")}>
            Back
          </button>
          <button className="next-btn" onClick={() => navigate("/registration/hotel-step-four")}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelStepThree;