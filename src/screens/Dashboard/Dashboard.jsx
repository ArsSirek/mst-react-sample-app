import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        Dashboard
      </div>
    );
  }
}