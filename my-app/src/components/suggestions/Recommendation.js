import React, {useState} from 'react'
import axios from 'axios'
import {randomInt} from 'mathjs'
import './suggestions.css'

function Recommendation(props) {

    return (
        <div className="recommendation-wrapper">
            <div className='rec-chat'>
            <p>{props.rec}</p>
            </div>
            <div className='arrow-left'>helo
            </div>
        </div>
        
    )
}

export default Recommendation;