import React from 'react'

function ImgComp(props) {

    var principle = ""

    if (props.name === "laptop"){
        principle = "Never Stop Learning New Things"
    }
    else if (props.name === "programming"){
         principle = "Focus on your skills"
    }
    else {
        principle = "Accept Challenges"
    }

    return (
            
            <>
            <img src={props.src} alt="slideImage"/>
            <p className="principle">{principle}</p>
            </>
        
    )
}

export default ImgComp
