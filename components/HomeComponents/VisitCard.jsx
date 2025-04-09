import React from "react";
import Button from "./Button";

function VisitCard({ img, title, text }) {
    return (
        <div className="visit-card">
            <img src={img} alt={title} className="visit-card-img" />
            <p className="card-title"> {title} </p>
            <p className="card-text"> {text} </p>
            <Button text="Visit now" className="visit-btn" />
        </div>
    );
}   

export default VisitCard;