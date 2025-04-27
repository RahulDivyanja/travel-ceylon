import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./guide-two.css";
import Progressbar from "../../../../components/progressbar";

function guideStepTwo() {
  const navigate = useNavigate();
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [email, setEmail] = useState("");
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
    <div className="guide-two-wrapper">
      <div className="guide-two-entry-container">
        <Progressbar currentStep={2} totalSteps={4} />
        <div className="guide-two-container">
        <div className="guide-two-phone-number">
            <p className="guide-two-tag-line">Add your contact numbers</p>
            <div className="guide-two-phone-row">
              <div className="guide-two-entryarea">
                <label className="guide-two-labelline">Number 1</label>
                <input
                  type="text"
                  required
                  value={number1}
                  maxLength={10}
                  onChange={(e) => setNumber1(e.target.value)}
                />
              </div>
              <div className="guide-two-entryarea">
                <label className="guide-two-labelline">Number 2</label>
                <input
                  type="text"
                  required
                  value={number2}
                  maxLength={10}
                  onChange={(e) => setNumber2(e.target.value)}
                />
              </div>
            </div>
          </div>
          
           <div className="guide-two-email-section">
            <p className="guide-two-tag-line">Add your email</p>
            <div className="guide-two-entryarea">
              <label className="guide-two-labelline">Email</label>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <p className="guide-two-tag-line">
            Upload your clear portrait image
          </p>
          <div className="guide-two-upload-box">
            <label htmlFor="file-upload" className="guide-two-upload-label">
              <img
                src="/assets/add-photo.svg"
                alt="upload"
                className="guide-two-upload-icon"
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
            <div className="guide-two-preview-list">
              {files.map((file, index) => (
                <div key={index} className="guide-two-preview-item">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`preview-${index}`}
                    className="guide-two-preview-image"
                  />
                  <button 
                    className="guide-two-remove-btn" 
                    onClick={() => removeImage(index)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="guide-two-button-container">
            <button className="guide-two-back-btn" onClick={() => navigate("/registration/guide-step-one")}>
              Back
            </button>
            <button className="guide-two-next-btn" onClick={() => navigate("/registration/guide-step-three")}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default guideStepTwo;
