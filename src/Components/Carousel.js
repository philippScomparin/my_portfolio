import React, { useState } from 'react'
import ImgComp from './ImgComp'
import Programming from '../images/programming.jpg'
import Pepper from '../images/pepper.jpg'
import Laptop from '../images/laptop.jpg'






function Carousel() {


    const images_index = [<ImgComp src={Laptop} name="laptop" />, <ImgComp src={Programming} name="programming"/>, <ImgComp src={Pepper} name="pepper" />]
    const [x, setx] = useState(0)
    const [laptopSelected, setlaptopSelected] = useState({backgroundColor: "#fff"})
    const [programmingSelected, setprogrammingSelected] = useState({backgroundColor: null})
    const [pepperSelected, setpepperSelected] = useState({backgroundColor: null})
    
   


    function changeImage(event) {
        const selectedImage = event.target.getAttribute("name")
        if(selectedImage === "programming"){
            setx(-100)
        }
        else if(selectedImage === "pepper"){
            setx(-200)
        }
        else {
            setx(0)
        }

        setLabelBackground(selectedImage)
    }

    function setLabelBackground(selectedImage){
        if(selectedImage === "pepper"){
            setlaptopSelected({backgroundColor: null})
            setprogrammingSelected({backgroundColor: null})
            setpepperSelected({backgroundColor: "#fff"})
        }
        else if(selectedImage === "programming"){
            setlaptopSelected({backgroundColor: null})
            setprogrammingSelected({backgroundColor: "#fff"})
            setpepperSelected({backgroundColor: null})
            
            
            
        }
        else {
            setlaptopSelected({backgroundColor: "#fff"})
            setprogrammingSelected({backgroundColor: null})
            setpepperSelected({backgroundColor: null})
            
        }

    }

    return (

        
        

        <>
            <div className="carousel">
                {images_index.map((element, index) => {
                    return (
                        <div className="slide"
                            key={index}
                            style={{ transform: `translateX(${x}%)` }}>
                            {element}
                        </div>)
                })}
                <div className="navigation">
                    <label className="imageIndex" name="laptop" onClick={changeImage} style={laptopSelected}></label>
                    <label className="imageIndex" name="programming" onClick={changeImage} style={programmingSelected}></label>
                    <label className="imageIndex" name="pepper" onClick={changeImage} style={pepperSelected}></label>
                    
                </div>
            </div>

        </>
    )

}

export default Carousel
