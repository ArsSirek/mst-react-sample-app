import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('appStore')
@observer
export default class App extends React.Component {

  render() {
    const view = {this.props.appStore}

    switch (view.page) {
      case 'dashboard':
        return <Dashboard />;
      default:
        return <div>404</div>; /*@todo implement 404 page*/
    }
  }
}

import Dashboard from '../screens/Dashboard';
