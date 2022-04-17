import React, {useState} from 'react'
import axios from 'axios'
import {randomInt} from 'mathjs'
import './suggestions.css'
import Suggestions from './Suggestions.js'

function Recommendation(props) {

    return (
        <div className="recommendation">
            <p>{props.rec}</p>
        </div>
    )
}

export default Recommendation;