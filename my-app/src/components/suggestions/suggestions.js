// import React, { setState } from 'react';
// import './suggestions.css';
// import weatherSearch from './weather-api.js';
// import Weather from './weather.js';

// export default function Suggestions() {
//   const [weather, setWeather] = setState(null);

//   let search = weatherSearch().then((weather) => {setWeather(weather.weather[0].temp); });

//   return (
//     <div id="suggestions">
//       <div className="weatherBox">
        
//         <Weather weather={search}/>
//       </div>
//     </div>
//   )
// }

import React, {useState} from 'react'
import axios from 'axios'
import {randomInt} from 'mathjs'
import './suggestions.css'

export default function Suggestions() {
  //const url = `https://api.openweathermap.org/data/2.5/weather`
  const [data,setData] = useState({})
  const [location, setLocation] = useState("")
  const [image,setImage] = useState('../../../public/dots.png')
  const [rec, setRec] = useState("")

  const apikey = '298c9ea6dc6adb4d367666ac31bdb12f'

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`
  //const iconURL = `http://openweathermap.org/img/wn/10d@2x.png`

  const recsList = {
    1: "It's a nice day outside. You should go on a hike or enjoy the sunset later!",
    2: "Grab a couple friends and hit the slopes or have a snowball fight!",
    3: "Maybe you can try breaking open a book today!",
    4: "It may be fun to break out a puzzle",
    5: "It might be a great day to binge your favorite Netflix show"
  }

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        setImage(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
        console.log(response.data)
        let id = response.data.weather[0].id
        let temp = ((response.data.main.feels_like-273) * (9/5) + 32).toFixed(2)
        if ((id === 800 || id === 801) && temp >= 50) {
          setRec(recsList[1])
        }
        else if (response.data.weather[0].id >= 600 && response.data.weather[0].id <= 631) {
          setRec(recsList[2])
        }
        else {
          let num = randomInt(3,5)
          setRec(recsList[num])
        }
      })
      setLocation('')
    }
  }
  

  return(
    <div className="suggestions">
      <div className="search">
        <input 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Search Location &#128270;'
          type="text"/>
      </div>
      <div className="container">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div id="temp-icon">
            <div className="icon">
              <img src= {image} alt=""/>
            </div>
            <div className="temp">
              {data.main ? <h2>{((data.main.temp-273) * (9/5) + 32).toFixed(2)}°F</h2> : null}
            </div>
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
          <div className="recommendation">
            <p>{rec}</p>
          </div>
      </div>
    </div>
  );
}

