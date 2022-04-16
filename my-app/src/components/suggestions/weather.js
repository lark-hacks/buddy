import React from 'react';
import weatherSearch from 'weather-api.js';



function Weather({ weatherData }) {
  if (!weatherData) {
    return <div>Loading...</div>;
  } else {
    return (
      <div id="weather">
        Current weather in Hanover, NH: {weatherData}
      </div>
    );
  }
}

export default Weather;

