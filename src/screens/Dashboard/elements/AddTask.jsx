import React from 'react';
import { inject } from 'mobx-react';

import { AddButton } from '../../../components/AddButton';

@inject('appStore')
export class AddTask extends React.Component {

  onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.appStore.addCard({});
  };

  render() {
    return <AddButton onClick={this.onClick} />;
  }
}

export default AddTask;
