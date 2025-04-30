import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Progressbar from "../../../../components/progressbar";
import "./hotel-four.css";

const HotelStepFour = () => {
  const navigate = useNavigate();
  const [roomType, setRoomType] = useState("Double");
  const [roomCount, setRoomCount] = useState(1);
  const [guestCount, setGuestCount] = useState(1);

  const [bedCounts, setBedCounts] = useState({
    "Twin bed(s)": 1,
    "Full bed(s)": 1,
    "Queen bed(s)": 1,
    "King bed(s)": 1,
  });

  const bedTypes = [
    {
      name: "Twin bed(s)",
      size: "35–51 inches wide",
      icon: "/assets/king_bed.svg",
    },
    {
      name: "Full bed(s)",
      size: "52–59 inches wide",
      icon: "/assets/king_bed.svg",
    },
    {
      name: "Queen bed(s)",
      size: "60–70 inches wide",
      icon: "/assets/king_bed.svg",
    },
    {
      name: "King bed(s)",
      size: "71–81 inches wide",
      icon: "/assets/king_bed.svg",
    },
  ];

  const handleBedChange = (type, change) => {
    setBedCounts((prev) => ({
      ...prev,
      [type]: Math.max(prev[type] + change, 0),
    }));
  };

  return (
    <div className="hotel-four-entry-container">
      <Progressbar currentStep={4} totalSteps={6} />

      <div className="hotel-four-container">
        <p className="hotel-four-tag-line">What type of Room?</p>
        <select
          className="hotel-four-select"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
        >
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
          <option value="Deluxe">Deluxe</option>
        </select>

        <p className="hotel-four-tag-line">
          How many rooms of this type do you have?
        </p>
        <div className="hotel-four-number-container2">
            <input
              type="number"
              className="hotel-four-number-input2"
              min="1"
              value={roomCount}
              onChange={(e) => setRoomCount(Number(e.target.value))}
            />
          </div>
        <p className="hotel-four-tag-line">
          What are the available Beds in this room?
        </p>
        <div className="hotel-four-bed-list">
          {bedTypes.map((bed) => (
            <div className="hotel-four-bed-row" key={bed.name}>
              <div className="hotel-four-bed-info">
                <img
                  src={bed.icon}
                  alt="Bed icon"
                  className="hotel-four-bed-icon"
                />
                <div className="hotel-four-bed-text">
                  <span className="hotel-four-bed-name">{bed.name}</span>
                  <span className="hotel-four-bed-size">{bed.size}</span>
                </div>
              </div>
              <div className="hotel-four-bed-controls">
                <button
                  className="hotel-four-control-btn"
                  onClick={() => handleBedChange(bed.name, -1)}
                >
                  <img className="reduce" src="/assets/minus.svg" />
                </button>
                <p className="hotel-four-bed-count">{bedCounts[bed.name]}</p>
                <button
                  className="hotel-four-control-btn"
                  onClick={() => handleBedChange(bed.name, 1)}
                >
                  <img className="reduce" src="/assets/add.svg" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="hotel-four-tag-line">
          How many guests can stay in this room?
        </p>
        <div className="hotel-four-number-container2">
          <input
            type="number"
            className="hotel-four-number-input2"
            min="1"
            value={guestCount}
            onChange={(e) => setGuestCount(Number(e.target.value))}
          />
        </div>

        <div className="hotel-four-button-container">
          <button
            className="hotel-four-back-btn"
            onClick={() => navigate("/registration/hotel-step-four")}
          >
            Back
          </button>
          <button
            className="hotel-four-next-btn"
            onClick={() => navigate("/registration/hotel-step-six")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelStepFour;
