import React from 'react'
import Programming from '../images/programming.jpg'
import Pepper from '../images/pepper.jpg'
import Laptop from '../images/laptop.jpg'

function Carousel() {
    return (
        <div className="carousel">
        <div className="sliderhow middle">
            <div className="slides">

            <input type="radio" name="r" id="r1" checked/>
            <input type="radio" name="r" id="r2"/>
            <input type="radio" name="r" id="r3"/>
            <div className="slide s1">
                <img className="img" src={Programming} alt="Programming"/>
            </div>
            <div className="slide s2">
                <img className="img "src={Pepper} alt="Pepper"/>
            </div>
            <div className="slide s3">
                <img className="img" src={Laptop} alt=""/>
            </div>
                </div>
            
            <div className="navigation">
                <label for="r1" className="bar"></label>
                <label for="r2" className="bar"></label>
                <label for="r3" className="bar"></label>
            </div>
            
        </div>
        </div>
    )

}

export default Carousel
