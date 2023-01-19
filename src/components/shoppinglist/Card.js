import React from "react";
import './card.css'

function Card(props){
    return (
        <div className="card">
            <img src={props.image} alt="" className="src" />
            <p>{props.text}</p>
        </div>
    )
}

export default Card;