import React, {useState} from 'react'
import axios from 'axios'
import {randomInt} from 'mathjs'
import './suggestions.css'
import Suggestions from './Suggestions'

function Recommendation() {
    const location = props.location;
    const [rec, setRec] = useState("");

    const recsList = {
        1: "It's a nice day outside. You should go on a hike or enjoy the sunset later!",
        2: "Grab a couple friends and hit the slopes or have a snowball fight!",
        3: "Maybe you can try breaking open a book today!",
        4: "It may be fun to break out a puzzle",
        5: "It might be a great day to binge your favorite Netflix show"
      }

    return (
        <div className="recommendation">
            <p>{rec}</p>
        </div>
    )
}

export default Recommendation;