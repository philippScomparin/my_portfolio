import React, { useState, useEffect } from 'react'
import laptop from '../images/laptop.jpg'
import mac from '../images/mac.jpg'
import pepper from '../images/pepper.jpg'

function Carousel() {

    const [x, setx] = useState(0)
    const [styleLaptopIdx, setstyleLaptopIdx] = useState({backgroundColor: null})
    const [styleMacIdx, setstyleMacIdx] = useState({backgroundColor: null})
    const [stylePeppercIdx, setstylePepperIdx] = useState({backgroundColor: null})
    
    function changeImg(event) {
        const name = event.target.getAttribute("name")
        if(name === "laptop"){
            setx(0)
           
        }
        if(name === "mac"){
            setx(-100)
            
            }
        if(name === "pepper") {
            setx(-200)
            
        }
    }

    useEffect(() => {
        
        if(x===0){
            setstyleLaptopIdx({backgroundColor: "#fff"})
            setstyleMacIdx({backgroundColor: null})
            setstylePepperIdx({backgroundColor: null})
            
        }
        if(x===-100){
            setstyleLaptopIdx({backgroundColor: null})
            setstyleMacIdx({backgroundColor: "#fff"})
            setstylePepperIdx({backgroundColor: null})
        }
        if(x===-200){
            setstyleLaptopIdx({backgroundColor: null})
            setstyleMacIdx({backgroundColor: null})
            setstylePepperIdx({backgroundColor: "#fff"})
        }
        
    }, [x]);

    return (
        <div className="carousel">
           <div className="carouselImgs" style={{transform: `translateX(${x}%)`}}>
               <div className="carouselPrinciples">
                   <h3>Never Stop Learning</h3>
                   <p>Technology changes every day. Keeping up to date with the newest technologies is what makes it so interesting and fun.</p>
               </div>
           <img src={laptop} alt="laptop"/>
           <div className="carouselPrinciples">
           <h3>Focus On Developing Skills</h3>
                   <p>With hundreds of programming languages and tools out there it is easy to get lost. It is important to focus on developing
                    skills and to not follow every trend.
                   </p>
               </div>
           <img src={mac} alt="mac"/>
           <div className="carouselPrinciples">
           <h3>Accept Challenges</h3>
                   <p>To get out of the comfort zone is key to push yourself forwards.</p>
               </div>
           <img src={pepper} alt="pepper"/>
           </div>
            <div className="imgNavigation" >
                <div className="imgIndex" name="laptop" onClick={changeImg} style={styleLaptopIdx}></div>
                <div className="imgIndex" name="mac" onClick={changeImg} style={styleMacIdx}></div>
                <div className="imgIndex" name="pepper" onClick={changeImg} style={stylePeppercIdx}></div>
                </div>
        </div>
    )
}

export default Carousel
