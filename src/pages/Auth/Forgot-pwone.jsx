import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./forgotpw.css";

const ForgotPwone = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleForgotRedirect = () => {
    if (email.trim() !== "") {
      navigate("/forgotpw-two");
    } else {
      alert("Please enter your email");
    }
  };

  return (
    <div className="forgot-container">
      <img src="/src/assets/mainlogo.svg" className="main-logo" />
      <div className="content-container">
        <p className="para">
          Please enter your email to receive a verification code to reset your
          password.
        </p>
        <div className="signup-entryarea">
          <label className="signup-labelline">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="backto-login">
          <button type="button" onClick={() => navigate("/signin")}>
            Back to Signin
          </button>
        </div>
      </div>
      <button className="send-code" onClick={handleForgotRedirect}>
        Send code
      </button>
    </div>
  );
};
export default ForgotPwone;
