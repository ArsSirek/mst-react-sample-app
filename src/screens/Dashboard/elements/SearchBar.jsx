import React from 'react';
import { inject } from 'mobx-react';

@inject('appStore')
export class SearchBar extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return <input />;
  }
}

export default SearchBar;
