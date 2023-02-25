import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"



const Slider = () => {
    return <div>
    <h1>How to get your website up and running</h1>
        <Carousel infiniteloop >
        
        <div className="image">
            <img src="./images/1.png" alt="mobile"/>
        </div>
        <div className="image">
            <img src="./images/2.png" alt="mobile"/>
        </div>
        <div className="image">
            <img src="./images/3.png" alt="mobile"/>
        </div>
        <div className="image">
            <img src="./images/4.png" alt="mobile"/>
        </div>
        <div className="image">
            <img src="./images/5.png" alt="mobile"/>
        </div>
        <div className="image">
            <img src="./images/6.png" alt="mobile"/>
        </div>
        <div className="image">
            <img src="./images/7.png" alt="mobile"/>
        </div>

        </Carousel>
    </div>
}

export default Slider;