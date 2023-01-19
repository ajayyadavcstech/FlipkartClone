import React from "react";
import Dealcard from "./DealCard/Dealcard";
import './Deals.css'

const data = [
    {
        image : "https://m.media-amazon.com/images/I/41QOPmPnEkL._AC_SY200_.jpg",
        offer : "32%",
        price : "12,999",
        crossprice : "18,999.00"
    },
    {
        image : "https://m.media-amazon.com/images/I/41kg-+XWoxL._AC_SY200_.jpg",
        offer : "32%",
        price : "12,999",
        crossprice : "18,999.00"
        
    },
    {
        image : "https://m.media-amazon.com/images/I/315vs3rLEZL._AC_SY200_.jpg",
        offer : "26%",
        price : "12,999",
        crossprice : "18,999.00"
    },
    {
        image : "https://m.media-amazon.com/images/I/413u56t+CiL._AC_SY200_.jpg",
        offer : "26%",
        price : "12,999",
        crossprice : "18,999.00"
    },
    {
        image : "https://m.media-amazon.com/images/I/41WpD4fqT4L._AC_SY200_.jpg",
        offer : "26%",
        price : "12,999",
        crossprice : "18,999.00"
    },
    {
        image : "https://m.media-amazon.com/images/I/41WpD4fqT4L._AC_SY200_.jpg",
        offer : "26%",
        price : "12,999",
        crossprice : "18,999.00"
    },
    {
        image : "https://m.media-amazon.com/images/I/41WpD4fqT4L._AC_SY200_.jpg",
        offer : "26%",
        price : "12,999",
        crossprice : "18,999.00"
    },
    
]
function Deals(){

    return (
        <div className="Deals">
            <p>🔥Blockbuster Deals🔥</p>
            <div className="container">
                {
                    data.map((value)=>(
                        <Dealcard image={value.image} offer={value.offer} price={value.price} crossprice={value.crossprice}/>
                    ))
                    
                }
            </div>
        </div>
    )
}
export default Deals