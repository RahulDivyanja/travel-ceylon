import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./forgotpw.css";

const ForgotPwone = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleForgotRedirect = () => {
    if (password.trim() === "" || confirmpassword.trim() === "") {
      alert("Please fill in both password fields");
    } else if (password !== confirmpassword) {
      alert("Passwords do not match");
    } else {
      navigate("/signin");
    }
  };

  return (
    <div className="forgot-container">
      <img src="/src/assets/mainlogo.svg" className="main-logo" />
      <div className="content-container">
        <p className="para">Enter your new password</p>

        <div className="signup-entryarea">
          <label className="signup-labelline">New Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="signup-entryarea">
          <label className="signup-labelline">Confirm Password</label>
          <input
            type="password"
            required
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
        </div>
      </div>

      <button className="send-code" onClick={handleForgotRedirect}>
        Continue
      </button>
    </div>
  );
};

export default ForgotPwone;
