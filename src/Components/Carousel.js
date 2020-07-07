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
        else if(name === "mac"){
            setx(-100)
            
            }
        else {
            setx(-200)
            
        }
    }


    useEffect(() => {
        
        if(x===0){
            setstyleLaptopIdx({backgroundColor: "#fff"})
            setstyleMacIdx({backgroundColor: null})
            setstylePepperIdx({backgroundColor: null})
            
        }
        else if(x===-100){
            setstyleLaptopIdx({backgroundColor: null})
            setstyleMacIdx({backgroundColor: "#fff"})
            setstylePepperIdx({backgroundColor: null})
        }
        else {
            setstyleLaptopIdx({backgroundColor: null})
            setstyleMacIdx({backgroundColor: null})
            setstylePepperIdx({backgroundColor: "#fff"})
        }

        const timer = setTimeout(() => {
            if(x===0){
                setx(-100)
            }
            else if (x===-100){
                setx(-200)
            }
            else {
                setx(0)
            }

        }, 30000);

        return() => clearTimeout(timer)

        
    }, [x]);

    return (
        <div className="carousel">
           <div className="carouselImgs" style={{transform: `translateX(${x}%)`}}>
               <div className="carouselPrinciples">
                   <h3>Never Stop Learning</h3>
                   <p>Technology changes every day. Keeping up to date with the newest technologies
                       is what makes it so interesting and fun to me.</p>
               </div>
           <img src={laptop} alt="laptop"/>
           <div className="carouselPrinciples">
           <h3>Focus On Developing Skills</h3>
                   <p>With hundreds of programming languages and tools out there it is easy to get lost.
                       I try to not follow every trend and to rather work on my skills.
                   </p>
               </div>
           <img src={mac} alt="mac"/>
           <div className="carouselPrinciples">
           <h3>Accept Challenges</h3>
                   <p>I love to get out of my comfort zone to push myself forward.</p>
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
