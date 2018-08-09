import React from 'react';
import { inject, observer } from 'mobx-react';

import Dashboard from '../screens/Dashboard';

@inject('appStore')
@observer
export class App extends React.Component {

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

export default App;
