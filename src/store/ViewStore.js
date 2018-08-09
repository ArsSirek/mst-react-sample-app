/* eslint no-param-reassign: "off" */

import { types, getParent } from 'mobx-state-tree';
import queryString from 'qs';

const ViewStore = types.model('ViewStore',
  {
    page: types.optional(types.string, 'dashboard'),
    hash: types.frozen(),
    query: types.optional(types.frozen(), {}),
    selectedCity: types.optional(types.string, ''),
  })
  .views(self => ({
    get app() {
      return getParent(self);
    },
    get currentUrl() {
      const hash = self.hasHash ? `#${self.hash}` : '';
      const query = self.hasQuery ? `?${self.currentQuery}` : '';
      return `${self.currentPath}${hash}${query}`;
    },
    get hasHash() {
      return !!self.hash;
    },
    get hasQuery() {
      return Object.keys(self.query).length !== 0;
    },
    get currentQuery() {
      return queryString.stringify(self.query);
    },
    get currentPath() {
      return self.getUrlByName(self.page);
    },
    getUrlByName(pageName) {
      switch (pageName) {
        case 'dashboard':
          return '/dashboard';
        case 'city':
          return `/city/${self.selectedCity}`;
        default:
          return `/${pageName}`;
      }
    },
  }))
  .actions(self => ({
    openPageByName(pageName, params = null) {
      switch (pageName) {
        case 'dashboard':
          self.openDashboard({ query: params });
          break;
        default:
          self.openErrorPage();
          break;
      }
    },
    openDashboard() {
      self.page = 'dashboard';
      // any business logic on page load can be initiated from here
    },
    openCity({ name }) {
      self.page = 'city';
      self.selectedCity = name;
      // any business logic on page load can be initiated from here
    },
    openErrorPage() {
      self.page = '404';
    },
    setQuery(query) {
      if (!query) {
        query = {};
      }
      self.query = query;
    },
  }));

export default ViewStore;
