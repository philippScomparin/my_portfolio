import React from 'react'
import timelineData from '../timelineData'
import Breakpoint from './Breakpoint'

function Timeline() {

    const breakpoints = timelineData

    return (
        <>
        <h1 className="sectionHeader">My Background</h1>
        <div className="timeline"> 
                {breakpoints.map((element, index) => {
                  return <Breakpoint breakpoint={element} /> 
                })}
        </div>
        </>
    )
}

export default Timeline
