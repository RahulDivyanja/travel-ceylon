import React from "react";

function IconBox(props) {
    return (
        <div className="icon-box">
            <img src={props.imgage} className="icon"></img>
            <p className="register-text">{props.text}</p>
        </div>  
    );
  }

export default IconBox;