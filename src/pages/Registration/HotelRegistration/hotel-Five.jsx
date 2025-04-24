// hotel-One.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hotel-css/hotel.css"
import Progressbar from "../../../../components/progressbar";

function HotelStepFive() {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter(file =>
      (file.type === "image/jpeg" || file.type === "image/png") &&
      file.size <= 50 * 1024 * 1024
    );
    setFiles(prev => [...prev, ...validFiles].slice(0, 10)); // limit max 10 for safety
  };

  return (
    <div className="hotel-one-wrapper">
      <div className="entry-container">
        <div className="logo">
          <img src="/assets/logo.svg" alt="logo" />
        </div>

        <p className="slogan">Basic Information</p>

        <div className="container">
          <p className="tag-line">Upload at least 5 Photos of your Hotel & Rooms</p>
          
          <div className="upload-box">
            <label htmlFor="file-upload" className="upload-label">
              <img src="/assets/add-photo.svg" alt="upload" className="upload-icon" />
              <p>Drag and Drop or upload</p>
              <span>JPG/JPEG or PNG maximum size 50MB each.</span>
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
            <div className="preview-list">
              {files.map((file, index) => (
                <div key={index} className="preview-item">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`preview-${index}`}
                    className="preview-image"
                  />
                </div>
              ))}
            </div>
          )}

          <button
            className="next-button"
            disabled={files.length < 5}
            onClick={() => navigate("/registration/hotel-step-6")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelStepFive;
