import React from "react";

function Button({ text, className }) {
  return (
    <button className={className} >{text}</button>
  );
}

export default Button;
// This Button component is a reusable button that can be used in different parts of the application.