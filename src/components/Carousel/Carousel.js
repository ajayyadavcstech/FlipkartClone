import React,{useState} from 'react'
import './Carousel.css'
import CarouselCard from './CarouselCard'
import Carousellist from './Carousellist';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

var count = 0


var data =  [{
    id: 1,
    image: "https://m.media-amazon.com/images/I/81EZPF-FSdL._SX3000_.jpg",
    name: "Plants",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/81OCE7mUqhL._SX3000_.jpg",
    name: "Headphones",
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/81KqtuapUzL._SX3000_.jpg",
    name: "Groceries",
  },
];
function Carousel(){
    var [currentImage,setImage] = useState(data[0].image)
    var [index,setIndex] = useState(0);

    function previousimg(){
        if(index===0) {
            setImage(data[data.length-1].image);
            setIndex(data.length-1);
            return ;
        }
        setImage(data[index-1].image)
        setIndex(index-1)
    }

    function nextimg(){
        if(index===(data.length-1)) {
            setImage(data[0].image)
            setIndex(0);
            return ;
        }
        setImage(data[index+1].image)
        setIndex(index+1);
    }

    // setInterval(()=>{
    //     nextimg()
    // },5000)

    // return (

    //     <div className="Carousel">
    //        <Carousellist props={data}  />
    //     </div>
    // )

    // return (
    //     <div className="Carousel">
    //         {
    //             data.map((value=>(
    //                 <CarouselCard id={value.id} image={value.image} /> 
    //             )))
    //         }
    //     </div>
    // )

    return (
        <div className="Carousel">
            <div className="scroll" onClick={previousimg}>
                 <ArrowBackIosIcon/>
            </div>
            <div className="div-img">
                <img src={currentImage} alt="" />
            </div>
            <div className="scroll" onClick={nextimg}>
                <ArrowForwardIosIcon />
            </div>
        </div>
    )
   
}

export default Carousel

