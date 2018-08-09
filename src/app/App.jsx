/* eslint no-reserved-keys: "off" */
/* eslint react/prop-types: "off" */
/* eslint react/destructuring-assignment: "off" */
/* eslint prefer-destructuring: "off" */
/* @todo fix "this is a reserved word esLint error"
* */

import React from 'react';
import { inject, observer } from 'mobx-react';

import { Dashboard } from '../screens/Dashboard';
import { City } from '../screens/City';

@inject('appStore')
@observer
export class App extends React.Component {
  render() {
    const view = this.props.appStore.view;

    switch (view.page) {
      case 'dashboard':
        return <Dashboard />;
      case 'city':
        return <City name={view.selectedCity} />;
      default:
        return (
          <div>
            404
          </div>
        ); /* @todo implement 404 page */
    }
  }
}

export default App;
