import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSigninRedirect = () => {
    navigate("/signin");
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Sign up successful!");
        console.log("Signup Response:", data);
        navigate("/"); // Redirect to home page after signup
      } else {
        alert(data.message || "Signup failed.");
      }
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="main-container">
      <div className="signup-left">
        <div className="left-container">
          <p>Sign up to</p>
          <img src="/src/assets/mainlogo.svg" className="main-logo" />
        </div>

        <div className="sign-in-container">
          <div className="signup-entryarea">
            <label className="signup-labelline">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="signup-entryarea">
            <label className="signup-labelline">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="signup-entryarea">
            <label className="signup-labelline">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="up-separator">
            <span>Or sign up with</span>
          </div>

          <div className="social-login">
            <button className="social-button" type="button">
              <img src="/src/assets/googleicon.svg" alt="Google" />
            </button>
            <button className="social-button" type="button">
              <img src="/src/assets/facebookicon.svg" alt="Facebook" />
            </button>
          </div>
        </div>

        <button className="signup-button" type="button" onClick={handleSignup}>
          Sign up
        </button>
      </div>

      <div className="signup-right">
        <div className="right-text-container">
          <h3>Welcome Back!</h3>
          <p>
            Already have an account? Click below to sign in and start your journey with us!
          </p>
        </div>

        <div className="s-button" onClick={handleSigninRedirect}>
          Sign in
        </div>
      </div>
    </div>
  );
};

export default Signup;
