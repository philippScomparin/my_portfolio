import React, { useState } from 'react'
import ImgComp from './ImgComp'
import Programming from '../images/programming.jpg'
import Pepper from '../images/pepper.jpg'
import Laptop from '../images/laptop.jpg'






function Carousel() {


    const images_index = [<ImgComp src={Programming} />, <ImgComp src={Pepper} />, <ImgComp src={Laptop} />]
    const [x, setx] = useState(0)
    const [firstSelected, setfirstSelected] = useState({backgroundColor: "#fff"})
    const [secondSelected, setsecondSelected] = useState({backgroundColor: null})
    const [thirdSelected, setthirdSelected] = useState({backgroundColor: null})
    
   


    function changeImage(event) {
        const selectedImage = event.target.getAttribute("name")
        if(selectedImage === "pepper"){
            setx(-100)
        }
        else if(selectedImage === "laptop"){
            setx(-200)
        }
        else {
            setx(0)
        }

        setLabelBackground(selectedImage)
    }

    function setLabelBackground(selectedImage){
        if(selectedImage === "pepper"){
            setsecondSelected({backgroundColor: "#fff"})
            setfirstSelected({backgroundColor: null})
            setthirdSelected({backgroundColor: null})
        }
        else if(selectedImage === "laptop"){
            setsecondSelected({backgroundColor: null})
            setfirstSelected({backgroundColor: null})
            setthirdSelected({backgroundColor: "#fff"})
        }
        else {
            setsecondSelected({backgroundColor: null})
            setfirstSelected({backgroundColor: "#fff"})
            setthirdSelected({backgroundColor: null})
            
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
                    <label className="imageIndex" name="programming" onClick={changeImage} style={firstSelected}></label>
                    <label className="imageIndex" name="pepper" onClick={changeImage} style={secondSelected}></label>
                    <label className="imageIndex" name="laptop" onClick={changeImage} style={thirdSelected}></label>
                </div>
            </div>

        </>
    )

}

export default Carousel
