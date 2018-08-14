/* eslint no-param-reassign: "off" */
import {
  types,
  onSnapshot,
  applySnapshot,
  getEnv,
} from 'mobx-state-tree';

import ViewStore from './ViewStore';

const STORAGE_KEY_NAME = 'task_app';

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
  }));

export default AppStore;
