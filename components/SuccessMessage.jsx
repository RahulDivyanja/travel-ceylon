import React from "react";
import { useNavigate } from "react-router-dom";

function SuccessMessage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };
  const isMobile = window.innerWidth <= 600;
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "500px",
        display: "flex",
        flexDirection: "Column",
        alignItems: "center",
        padding: isMobile ? "30px" : "50px",
        borderRadius: "15px",
        boxSizing: "border-box",
        margin: isMobile ? "20px auto" : "50px auto",

      }}
    >
      <div style={{
        
      }}>
        <div
          style={{
            backgroundColor: "rgba(141, 211, 187, 0.3)",
            width: "70px",
            height: "70px",
            borderRadius: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#8DD3BB",
              height: "40px",
              width: "40px",
              margin: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "100px",
            }}
          >
            <img style={{
                height:"25px"
            }}
            src="../src/assets/check.svg" alt="" />
          </div>
        </div>
      </div>
      <p
        style={{
          margin: 0,
          fontSize: "16px",
          opacity: "80%",
        }}
      >
        Your details are added
      </p>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "700",
          opacity: "80%",
        }}
      >
        Successfully
      </p>

      <button
        style={{
          padding: isMobile ? "8px 20px" : "10px 30px",
          backgroundColor: "#8DD3BB",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "50px",
          fontSize:"14px",
          width: isMobile ? "100%" : "auto",
        }}
      onClick={handleClick}>
        Go to your Dashboard
      </button>
    </div>
  );
}

export default SuccessMessage;
