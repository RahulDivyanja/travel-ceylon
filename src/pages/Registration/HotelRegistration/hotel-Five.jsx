import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Progressbar from "../../../../components/progressbar";
import "./hotel-five.css";

function HotelStepFive() {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter(
      (file) =>
        (file.type === "image/jpeg" || file.type === "image/png") &&
        file.size <= 50 * 1024 * 1024
    );
    setFiles((prev) => [...prev, ...validFiles].slice(0, 10)); // limit max 10
  };

  const removeImage = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="hotel-five-wrapper">
      <div className="hotel-five-entry-container">
      <Progressbar currentStep={5} totalSteps={6} />
        <div className="hotel-five-container">
          <p className="hotel-five-tag-line">
            Upload at least 5 Photos of your Hotel & Rooms
          </p>
          <div className="hotel-five-upload-box">
            <label htmlFor="file-upload" className="hotel-five-upload-label">
              <img
                src="/assets/add-photo.svg"
                alt="upload"
                className="hotel-five-upload-icon"
              />
              <p className="main-line">Drag and Drop or upload</p>
              <p className="second-line">JPG/JPEG or PNG maximum size 50MB each.</p>
            </label>
            <input
              type="file"
              id="file-upload"
              accept="image/png, image/jpeg"
              multiple
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
          
          {files.length > 0 && (
            <div className="hotel-five-preview-list">
              {files.map((file, index) => (
                <div key={index} className="hotel-five-preview-item">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`preview-${index}`}
                    className="hotel-five-preview-image"
                  />
                  <button 
                    className="hotel-five-remove-btn" 
                    onClick={() => removeImage(index)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="hotel-five-button-container">
            <button
              className="hotel-five-back-btn"
              onClick={() => navigate("/registration/hotel-step-four")}
            >
              Back
            </button>
            <button
              className="hotel-five-next-btn"
              onClick={() => navigate("/registration/hotel-step-six")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelStepFive;