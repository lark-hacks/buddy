import axios from 'axios';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '298c9ea6dc6adb4d367666ac31bdb12f';


const weatherSearch = () => {
  const params = {
    lat: '43.7022928',
    lon: '-72.2895353',
    appid: API_KEY,
  };

  return new Promise((resolve, reject) => {
    axios.get(API_URL, { params })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(`weather api error: ${error}`);
        reject(error);
      });
  })
};

export default weatherSearch;