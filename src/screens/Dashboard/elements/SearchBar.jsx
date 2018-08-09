import React from 'react';
import {inject} from 'mobx-react';

@inject('appStore')
export class SearchBar extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      value: '',
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.appStore.addCity(this.state.value);
    this.setState({
      value: '',
    });
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ margin: '2em'}}>
        <input value={this.state.value} onChange={this.onChange} />
        <input type="submit" />
      </form>
    );
  }
}

export default SearchBar;
