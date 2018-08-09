import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as MobxProvider } from 'mobx-react';

import App from './App';

const renderApp = (appStore) => {
  ReactDOM.render(
    <MobxProvider appStore={appStore}>
      <App />
    </MobxProvider>,
    document.getElementById('app'));
};

export default renderApp;
