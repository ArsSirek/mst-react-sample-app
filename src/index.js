import { reaction, when } from 'mobx';
import queryString from 'qs';
import createRouter from './utils/router';

import { AppStore } from './store/AppStore';
import { getTitle } from './app/pageTitles';
import renderApp from './app/AppWrapper';
import { isProduction } from './utils/constants';

import { OpenWeatherMap } from './gateways/Weather';

const initialState = {};

const appStore = AppStore.create(
  initialState,
  {
    storage: window.localStorage,
    weather: OpenWeatherMap,
  },
);

when(
  () => !appStore.isLoading,
  () => {
    try {
      renderApp(appStore);
    } catch (e) {
      // console.error(e);
    }
  },
);

/**
 * Routing
 */
const routerProps = {};
// routing is based on the Mobx author blog post

reaction(
  () => ({
    url: appStore.view.currentUrl,
    path: appStore.view.currentPath,
    query: appStore.view.currentQuery,
  }),
  ({ url, path, query }) => {
    // console.log('url changed to ', path);
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', url);
      document.title = getTitle(appStore);
    } else if (window.location.search !== `?${query}`) {
      // only query part of the string has changed
      window.history.replaceState(null, '', url);
    }
  },
);

const { location } = window;

const queryParams = queryString.parse(location.search.slice(1));
const hash = location.hash ? location.hash.slice(1) : null;

const router = createRouter({
  /* first match go ? */
  '/dashboard': () => appStore.view.openDashboard({ query: queryParams, hash }),
  '/': () => appStore.view.openDashboard({ query: queryParams, hash }),
}, routerProps);

window.onpopstate = function historyChange(ev) {
  if (ev.type === 'popstate') router(window.location.pathname);
};

// first load page initiation
router(window.location.pathname);
document.title = getTitle(appStore);


// Load the favicon, the manifest.json file and the .htaccess file
/* @todo add favicon and manifest */
// import '!file-loader?name=[name].[ext]!./favicon.ico';
// import '!file-loader?name=[name].[ext]!./manifest.json';

if (!isProduction) {
  window.appStore = appStore;
}
