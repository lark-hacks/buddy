import React from 'react'
import './suggestions.css'
import triangle from '../../img/triangle.svg'

function Recommendation(props) {

    if(!props.rec || !props.weather) {
        return(
            <div></div>
        )
    }

    return (
        <div className="recommendation-wrapper">
            <div className='rec-chat'>
                <p>{props.rec}</p>
            </div>
            <div className='arrow-left'>
                <img id="triangle" src={triangle} alt="triangle" />
            </div>
        </div>
        
    )
}

export default Recommendation;