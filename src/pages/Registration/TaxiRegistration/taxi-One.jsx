import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./taxi-one.css";
import Progressbar from "../../../../components/progressbar";

function TaxiStepOne() {
  const navigate = useNavigate();
  const [taxiname, settaxiName] = useState("");
  const [location, setLocation] = useState("");
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [files1, setFiles1] = useState([]);
  const [files2, setFiles2] = useState([]);

  const handleFileChange1 = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter(
      (file) =>
        (file.type === "image/jpeg" || file.type === "image/png") &&
        file.size <= 50 * 1024 * 1024
    );
    setFiles1((prev) => [...prev, ...validFiles].slice(0, 5)); // limit max 5 for this uploader
  };

  const handleFileChange2 = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter(
      (file) =>
        (file.type === "image/jpeg" || file.type === "image/png") &&
        file.size <= 50 * 1024 * 1024
    );
    setFiles2((prev) => [...prev, ...validFiles].slice(0, 5)); // limit max 5 for this uploader
  };

  const removeImage1 = (index) => {
    setFiles1((prev) => prev.filter((_, i) => i !== index));
  };

  const removeImage2 = (index) => {
    setFiles2((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="taxi-one-wrapper">
      <div className="taxi-one-entry-container">
        <div className="taxi-one-top-spacer"></div>
        <Progressbar
          className="taxi-one-progressbar"
          currentStep={1}
          totalSteps={6}
        />
        <div className="taxi-one-container">
          <p className="taxi-one-tag-line">What is Owner name </p>
          <div className="taxi-one-entryarea">
            <label className="taxi-one-labelline">Add name</label>
            <input
              type="text"
              required
              value={taxiname}
              onChange={(e) => settaxiName(e.target.value)}
            />
          </div>
          <p className="taxi-one-tag-line">Set your location</p>
          <div className="taxi-one-entryarea">
            <label className="taxi-one-labelline">Add location</label>
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="taxi-one-id-number">
            <p className="taxi-one-tag-line">identification Number</p>
            <div className="taxi-one-id-row">
              <div className="taxi-one-entryarea">
                <label className="taxi-one-labelline">NIC number</label>
                <input
                  type="text"
                  required
                  value={number1}
                  onChange={(e) => setNumber1(e.target.value)}
                />
              </div>
              <div className="taxi-one-entryarea">
                <label className="taxi-one-labelline">License number</label>
                <input
                  type="text"
                  required
                  value={number2}
                  onChange={(e) => setNumber2(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="taxi-one-img-upload">
            <div className="taxi-one-upload-column">
              <div className="taxi-one-upload-box">
                <label htmlFor="file-upload-1" className="taxi-one-upload-label1">
                  <img
                    src="/assets/add-photo.svg"
                    alt="upload"
                    className="taxi-one-upload-icon"
                  />
                  <p className="main-line">Drag and Drop or upload</p>
                  <p className="second-line">
                    JPG/JPEG or PNG maximum size 50MB each.
                  </p>
                </label>
                <input
                  type="file"
                  id="file-upload-1"
                  accept="image/png, image/jpeg"
                  multiple
                  onChange={handleFileChange1}
                  style={{ display: "none" }}
                />
              </div>
              {files1.length > 0 && (
                <div className="taxi-one-preview-list">
                  {files1.map((file, index) => (
                    <div key={index} className="taxi-one-preview-item">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`preview-${index}`}
                        className="taxi-one-preview-image"
                      />
                      <button
                        className="taxi-one-remove-btn"
                        onClick={() => removeImage1(index)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="taxi-one-upload-column">
              <div className="taxi-one-upload-box">
                <label htmlFor="file-upload-2" className="taxi-one-upload-label2">
                  <img
                    src="/assets/add-photo.svg"
                    alt="upload"
                    className="taxi-one-upload-icon"
                  />
                  <p className="main-line">Drag and Drop or upload</p>
                  <p className="second-line">
                    JPG/JPEG or PNG maximum size 50MB each.
                  </p>
                </label>
                <input
                  type="file"
                  id="file-upload-2"
                  accept="image/png, image/jpeg"
                  multiple
                  onChange={handleFileChange2}
                  style={{ display: "none" }}
                />
              </div>
              {files2.length > 0 && (
                <div className="taxi-one-preview-list">
                  {files2.map((file, index) => (
                    <div key={index} className="taxi-one-preview-item">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`preview-${index}`}
                        className="taxi-one-preview-image"
                      />
                      <button
                        className="taxi-one-remove-btn"
                        onClick={() => removeImage2(index)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="taxi-one-button-container">
            <button
              className="taxi-one-back-btn"
              onClick={() => navigate("../Registration")}
            >
              Back
            </button>
            <button
              className="taxi-one-next-btn"
              onClick={() => navigate("/registration/taxi-step-two")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaxiStepOne;