import React from "react";
import './Carousel.css'

function Carousellist(props){
    return (
        <div className="Carousellist">
            {
                props.props.map((value=>(
                    <img src={value.image} id={value.id}/>
                )))
            }
        </div>
    )
}
export default Carousellist