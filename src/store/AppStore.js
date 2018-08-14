/* eslint no-param-reassign: "off" */
import {
  types,
  onSnapshot,
  applySnapshot,
  getEnv,
} from 'mobx-state-tree';

import { Card } from './models/Card';

import ViewStore from './ViewStore';

const STORAGE_KEY_NAME = 'task_app';

export const AppStore = types.model(
  'AppStore',
  {
    isLoading: types.optional(types.boolean, true),
    view: types.optional(ViewStore, {}),
    cards: types.optional(types.array(Card), []),
  },
)
  .views(self => ({
    get storage() {
      return getEnv(self).storage;
    },
  }))
  .actions(self => ({
    afterCreate() {
      // save current app state
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
    addCard(cardFields) {
      self.cards.push({
        fields: cardFields,
      });
    },
    deleteCard(card) {
      self.cards.remove(card);
    },
    reorderCards(startIndex, endIndex) {
      const result = self.cards.slice();
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);

      self.cards = result;
    },
}));

export default AppStore;
