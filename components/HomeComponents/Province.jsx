import React from "react";

function Province(props) {
    return (
        <div className="province-card">
            <img src={props.image}></img>
            <div className="province-card-text">
                <p className="title">{props.title}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )               
}

export default Province;