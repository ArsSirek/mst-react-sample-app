import axios from 'axios';

import { Weather } from '../Weather';
import { OPENWEATHERMAP_KEY } from '../../../utils/constants';

export class OpenWeatherMap extends Weather {
  static getForCity(cityName) {
    return axios({
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${OPENWEATHERMAP_KEY}`,
    }).then((response) => {
      if (response.status === 200) {
        const { data } = response;
        return {
          name: data.name,
          weather: data.weather[0].main,
          temp: data.main.temp,
        };
      }
      throw new Error('no response');
    });
  }

  static getForCoords({ latitude, longitude }) {
    return axios({
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHERMAP_KEY}`,
    }).then((response) => {
      if (response.status === 200) {
        const { data } = response;
        return {
          name: data.name,
          weather: data.weather[0].main,
          temp: data.main.temp,
        };
      }
      throw new Error('no response');
    });
  }
}

export default OpenWeatherMap;

/*
openweathermap response example:
{
  "coord": {
    "lon": -0.13,
    "lat": 51.51
  },
  "weather": [
    {
      "id": 300,
      "main": "Drizzle",
      "description": "light intensity drizzle",
      "icon": "09d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 280.32,
    "pressure": 1012,
    "humidity": 81,
    "temp_min": 279.15,
    "temp_max": 281.15
  },
  "visibility": 10000,
  "wind": {
    "speed": 4.1,
    "deg": 80
  },
  "clouds": {
    "all": 90
  },
  "dt": 1485789600,
  "sys": {
    "type": 1,
    "id": 5091,
    "message": 0.0103,
    "country": "GB",
    "sunrise": 1485762037,
    "sunset": 1485794875
  },
  "id": 2643743,
  "name": "London",
  "cod": 200
}
*/
