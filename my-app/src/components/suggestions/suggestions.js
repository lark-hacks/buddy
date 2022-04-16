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
import './suggestions.css'

export default function Suggestions() {
  //const url = `https://api.openweathermap.org/data/2.5/weather`
  const [data,setData] = useState({})
  const [location, setLocation] = useState("")
  const [image,setImage] = useState('../../../public/dots.png')

  const apikey = '298c9ea6dc6adb4d367666ac31bdb12f'

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`
  //const iconURL = `http://openweathermap.org/img/wn/10d@2x.png`

  const searchLocation = (event) => {

    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        setImage(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
        console.log(response.data)
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
          placeholder='Enter Location'
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
            <p></p>
          </div>
      </div>
    </div>
  );
}
