/* eslint no-param-reassign: "off" */
import { types, onSnapshot, applySnapshot, getEnv } from 'mobx-state-tree';
import ViewStore from './ViewStore';

const STORAGE_KEY_NAME = 'store';

export const AppStore = types.model(
  'AppStore',
  {
    isLoading: types.optional(types.boolean, true),
    view: types.optional(ViewStore, {}),
    cities: types.optional(types.array(types.string), []),
    weather: types.optional(types.map(types.frozen()), {}),
  },
)
  .views(self => ({
    get storage() {
      return getEnv(self).storage;
    },
    get weatherProvider() {
      return getEnv(self).weather;
    },
  }))
  .actions(self => ({
    afterCreate() {
      // self.dashboard.loadDomains();
      // save menu state
      if (typeof window.localStorage !== 'undefined') {
        self.readFromLocalStorage();
        onSnapshot(self, (snapshot) => {
          self.storage.setItem(STORAGE_KEY_NAME, JSON.stringify(snapshot));
        });
      }
      self.toggleLoading(false);
      self.updateData();
    },
    readFromLocalStorage() {
      if (self.storage) {
        const snapshotString = self.storage.getItem(STORAGE_KEY_NAME);
        if (snapshotString) {
          applySnapshot(self, JSON.parse(snapshotString));
        }
      }
    },
    toggleLoading(newValue = false) {
      self.isLoading = newValue;
    },
    updateWeather(city, data) {
      self.weather.set(city, data);
    },
    addCity(newCityName) {
      if (self.cities.indexOf(newCityName) === -1) {
        self.cities.push(newCityName);
        self.weatherProvider.getForCity(newCityName).then((weatherData) => {
          // can not modify observable property through callback functions,
          // only in the action function body
          self.updateWeather(weatherData.name, weatherData);
        });
      }
    },
    updateData() {
      self.cities.forEach((cityName) => {
        self.weatherProvider.getForCity(cityName).then((weatherData) => {
          self.updateWeather(weatherData.name, weatherData);
        });
      });
    },
  }));

export default AppStore;
