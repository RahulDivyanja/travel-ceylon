// hotel-Four.jsx
import React, { useState } from "react";
import { FaBed } from "react-icons/fa";
import "./Hotel-css/hotel.css"
import Progressbar from "../../../../components/progressbar";

const HotelStepFour = () => {
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
    { name: "Twin bed(s)", size: "35–51 inches wide" },
    { name: "Full bed(s)", size: "52–59 inches wide" },
    { name: "Queen bed(s)", size: "60–70 inches wide" },
    { name: "King bed(s)", size: "71–81 inches wide" },
  ];

  const handleBedChange = (type, change) => {
    setBedCounts((prev) => ({
      ...prev,
      [type]: Math.max(prev[type] + change, 0),
    }));
  };

  return (
    <div className="entry-container">
        
      <div className="hotel-step">
        <h2 className="tag-line">What type of Room?</h2>
        <select
          className="select-input"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
        >
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
          <option value="Deluxe">Deluxe</option>
        </select>

        <h2 className="tag-line">How many rooms of this type do you have?</h2>
        <input
          type="number"
          className="number-input"
          min="1"
          value={roomCount}
          onChange={(e) => setRoomCount(Number(e.target.value))}
        />

        <h2 className="tag-line">What are the available Beds in this room?</h2>
        <div className="bed-list">
          {bedTypes.map((bed) => (
            <div className="bed-row" key={bed.name}>
              <div className="bed-info">
                <FaBed size={28} />
                <div className="bed-text">
                  <span className="bed-name">{bed.name}</span>
                  <span className="bed-size">{bed.size}</span>
                </div>
              </div>
              <div className="bed-controls">
                <button onClick={() => handleBedChange(bed.name, -1)}>-</button>
                <span>{bedCounts[bed.name]}</span>
                <button onClick={() => handleBedChange(bed.name, 1)}>+</button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="tag-line">How many guests can stay in this room?</h2>
        <input
          type="number"
          className="number-input"
          min="1"
          value={guestCount}
          onChange={(e) => setGuestCount(Number(e.target.value))}
        />
      </div>
      <div>
        <button onClick={() => navigate("/registration/hotel-step-five")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default HotelStepFour;
