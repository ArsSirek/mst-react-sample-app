import React from 'react';
import {inject, observer} from 'mobx-react';

import { SearchBarStyled } from '../../../components/SearchBar';

@inject('appStore')
@observer
export class SearchBar extends React.Component {

  onChange = (e) => {
    this.props.appStore.setFilter(e.target.value);
  };

  render() {
    return (
      <SearchBarStyled
        type="search"
        onChange={this.onChange}
        value={this.props.appStore.filter}
        placeholder="type to search"
      />
    );
  }
}

export default SearchBar;
