import React from 'react'

function Breakpoint(props) {

    return (
        <div className="breakpoint">
            <div className="breakpoint-content">
            <span className="type">{props.breakpoint.type}</span>
            <span className="topic">{props.breakpoint.title}</span>
            <span className="description">{props.breakpoint.description}</span>
            <span className="timeperiod">{props.breakpoint.timePeriod}</span>
            <span className="circle"></span>
            </div>
        </div>
    )
}

export default Breakpoint
