
export class Weather {
  static getForCity(cityName) {
    throw new Error(`getForCity is not implemented, called with ${cityName}`);
  }

  static getForCoords({ latitude, longitude }) {
    throw new Error('getForCoords is not implemented');
  }
}

export default Weather;
