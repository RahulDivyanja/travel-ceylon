import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; 
import "./forgotpw.css";

const ForgotPwone = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.trim();
    if (!/^\d?$/.test(value)) return;

    e.target.value = value;

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    } else if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleForgotRedirect = () => {
    navigate("/forgotpw-three");
  };

  return (
    <div className="forgot-container">
      <img src="/src/assets/mainlogo.svg" className="main-logo" />
      <div className="content-container">
        <p className="para">Verification code has been sent to your email</p>

       
        <div className="otp-container">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength="1"
              autoFocus={i === 0}
              className="otp-input"
              onChange={(e) => handleChange(e, i)}
              ref={(el) => (inputRefs.current[i] = el)}
            />
          ))}
        </div>

        <div className="resend-code">
          Didn't receive code
          <button type="button">Resend</button>
        </div>
      </div>

      <button className="verify" onClick={handleForgotRedirect}>
        Verify
      </button>
    </div>
  );
};

export default ForgotPwone;
