import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        console.log("Login Response:", data);
        navigate("/dashboard");
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="main-container">
      <div className="signin-left">
        <div className="left-text-container">
          <h3>Hello there!</h3>
          <p>
            If you don’t have an account on Sri Lanka’s best travel website,
            sign up now and start your journey with us!
          </p>
        </div>

        <div className="s-button" onClick={handleSignupRedirect}>Sign up</div>
      </div>

      <div className="signin-right">
        <div className="right-container">
          <p>Sign in to</p>
          <img src="/src/assets/mainlogo.svg" className="main-logo" alt="Logo" />
        </div>

        <form className="sign-in-container" onSubmit={handleLogin}>
          <div className="signin-entryarea">
            <label className="signin-labelline">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="signin-entryarea">
            <label className="signin-labelline">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="forgot-password">
            <button type="button" onClick={handleForgotPassword}>
              Forgot Password?
            </button>
          </div>

          <div className="separator">
            <span>Or sign in with</span>
          </div>

          <div className="social-login">
            <button className="social-button" type="button">
              <img src="/src/assets/googleicon.svg" alt="Google" />
            </button>
            <button className="social-button" type="button">
              <img src="/src/assets/facebookicon.svg" alt="Facebook" />
            </button>
          </div>

          <button className="signin-button" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
