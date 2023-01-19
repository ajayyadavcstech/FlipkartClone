import React from "react";
import './Carousel.css'

function CarouselCard(props){
    return (
        <div className="carouselcard">
            <img src={props.image} id={props.id} alt="" />
        </div>
    )
}

export default CarouselCard;