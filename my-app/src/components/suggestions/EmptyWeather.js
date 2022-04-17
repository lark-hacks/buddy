import React, {useState} from 'react'
import emptyweather from "../../img/emptyweather.svg"

export default function EmptyWeather() {

    return (
        <div id="empty-weather">
        <img src={emptyweather} alt="empty weather"/>
        <p className='empty-state'>Enter location to see weather</p>
      </div>
    )
}