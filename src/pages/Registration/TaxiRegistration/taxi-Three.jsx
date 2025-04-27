import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./taxi-three.css";
import Progressbar from "../../../../components/progressbar";

function TaxiStepThree() {
  const navigate = useNavigate();
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [model, setModel] = useState("");
  const [vehicleType, setVehicleType] = useState("Car");
  const [province, setProvinceType] = useState("Southern");


  return (
    <div className="taxi-three-wrapper">
      <div className="taxi-three-entry-container">
        <Progressbar currentStep={3} totalSteps={6} />
        <div className="taxi-three-container">
        <p className="taxi-three-tag-line">What type of vehicle?</p>
        <select
          className="taxi-three-select"
          value={vehicleType}
          onChange={(e) => setRoomType(e.target.value)}
        >
          <option value="Bike">Bike</option>
          <option value="TukTuk">TukTUk</option>
          <option value="Car">Car</option>
          <option value="Van">Van</option>
        </select>
        <div className="taxi-three-vehivle-section">
            <p className="taxi-three-tag-line">Add your vehicle model</p>
            <div className="taxi-three-entryarea">
              <label className="taxi-three-labelline">vehicle model</label>
              <input
                type="text"
                required
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </div>
          </div>
          <div className="taxi-three-reg-number">
            <p className="taxi-three-tag-line">Vehilce registration numbers</p>
            <div className="taxi-three-reg-row">
              <div className="taxi-three-entryarea">
                <label className="taxi-three-labelline">vehicle number</label>
                <input
                  type="text"
                  required
                  value={number1}
                  onChange={(e) => setNumber1(e.target.value)}
                />
              </div>
              <div className="taxi-three-entryarea">
                <label className="taxi-three-labelline">chasey number</label>
                <input
                  type="text"
                  required
                  value={number2}
                  onChange={(e) => setNumber2(e.target.value)}
                />
              </div>
            </div>
          </div>
          <p className="taxi-three-tag-line">What type of vehicle?</p>
        <select
          className="taxi-three-select"
          value={province}
          onChange={(e) => setProvinceType(e.target.value)}
        >
          <option value="Southern">Southern Province</option>
          <option value="Western">Western Province</option>
          <option value="Central">Central Province</option>
          <option value="Eastern">Eastern Province</option>
          <option value="Northen">Norhthen Province</option>
          <option value="North-Western">North-Western Province</option>
          <option value="North-Central">North-Central Province</option>
          <option value="Sabaragamuwa">Sabaragamuwa Province</option>
          <option value="Uva">Uva</option>
        </select>


          <div className="taxi-three-button-container">
            <button className="taxi-three-back-btn" onClick={() => navigate("/registration/taxi-step-two")}>
              Back
            </button>
            <button className="taxi-three-next-btn" onClick={() => navigate("/registration/taxi-step-four")}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaxiStepThree;
