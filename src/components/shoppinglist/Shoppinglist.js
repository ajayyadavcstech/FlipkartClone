import React  from "react";
import './Shoppinglist.css'
import mobile from './images/mobile.webp'
import grocery from './images/grocery.webp'
import fashion from './images/fashion.webp'
import Electronics from './images/Electronics.webp'
import Home from './images/Home.webp'
import Appliance from './images/Appliance.webp'
import Travel from './images/Travel.webp'
import TopOffers from './images/TopOffers.webp'
import Card from './Card'

var data = [[mobile,"mobile"],[grocery,"grocery"],[fashion,"fashion"],[Electronics,"Electronics"],[Home,"Home"],[Appliance,"Appliance"],[Travel,"Travel"],[TopOffers,"TopOffers"],[Card,"Card"]]


function shoppinglist(){
    
    return (
        <div className="list">
            {
                data.map((element)=>{
                  return (  <Card
                    image = {element[0]}
                    text = {element[1]}
                    /> )
                })
            }
        </div>
    )
}

// function shoppinglist(){

//     return (
//         <div className="list">
//             <Card image={grocery}
//              text="grocery"/>

//              <Card image={mobile}
//              text="Mobile" />

//             <Card image={fashion}
//             text="Fashion" />

//              <Card image={Electronics}
//              text="Electronics" />

//              <Card image={Home}
//              text="Home" />

//              <Card image={Appliance}
//              text="Appliance" />

//             <Card image={Travel}
//              text="Travel" />

//             <Card image={TopOffers}
//              text="Top Offers" />
            
//         </div>
//     )
// }

export default shoppinglist;