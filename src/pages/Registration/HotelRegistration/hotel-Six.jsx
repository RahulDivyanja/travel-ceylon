// hotel-One.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hotel-css/hotel.css"
import Progressbar from "../../../../components/progressbar";

function HotelStepSix() {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="hotel-one-wrapper">
      <div className="entry-container">
        <div className="logo">
          <img src="/assets/logo.svg" alt="logo" />
        </div>
        <p className="slogan">Basic Information</p>

        <div className="container">
          <p className="title">Add brief description about your hotel</p>
          <textarea
            rows="5"
            cols="50"
            className="description-box"
            placeholder="Enter your description here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="terms">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <label htmlFor="agree">I agreed to terms and conditions</label>
          </div>

          <button
            className="next-button"
            disabled={!agreed || description.trim() === ""}
            onClick={() => navigate("/registration/hotel-summary")}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelStepSix;
