import React from "react";
import './Dealcard.css'

function Dealcard(props){
    return (
        <div className="Dealcard">
            <img src={props.image} alt="" />
            <div className="text">
                <div className="offer"><button>{props.offer} off</button>  Republic Day Sale</div>
                <div className="price"><sup>&#8377;</sup>{props.price}<sup>00</sup><span className="crosspricemrp"> M.R.P.:<span className="crossprice">&#8377;{props.crossprice}</span></span></div>
            </div>
        </div>
    )
}
export default Dealcard