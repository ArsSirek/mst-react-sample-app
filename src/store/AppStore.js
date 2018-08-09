/* eslint no-param-reassign: "off" */
import { types, onSnapshot, applySnapshot } from 'mobx-state-tree';
import ViewStore from './ViewStore';

const STORAGE_KEY_NAME = 'store';

export const AppStore = types.model(
  'AppStore',
  {
    isLoading: true,
    view: types.optional(ViewStore, {}),
    cities: types.optional(types.array(types.string), []),
    whether: types.optional(types.map(types.frozen()), {}),
  },
)
  .actions(self => ({
    afterCreate() {
      // self.dashboard.loadDomains();
      // save menu state
      if (typeof window.localStorage !== 'undefined') {
        self.readFromLocalStorage();
        onSnapshot(self, (snapshot) => {
          window.localStorage.setItem(STORAGE_KEY_NAME, snapshot);
        });
      }
      self.toggleLoading(false);
    },
    toggleLoading(newValue = false) {
      self.isLoading = newValue;
    },
    readFromLocalStorage() {
      const snapshot = window.localStorage.geItem(STORAGE_KEY_NAME);
      applySnapshot(self,snapshot);
    },
  }));

export default AppStore;
