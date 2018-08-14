import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import Autosuggest from 'react-autosuggest';

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

@inject('appStore')
export class UserSelect extends React.Component {
  constructor(props) {
    super(props);

    let user = {
      id: null,
      name: '',
    };
    if (this.props.userId) {
      user = this.props.appStore.getUser(this.props.userId);
    }
    this.id = user.id;
    this.state = {
      value: user.name,
      suggestions: [],
    };
  }

  onChange = (e, { newValue }) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onSuggestionSelected = (event, { suggestion }) => {
    this.id = suggestion.id;
  };

  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const users = this.props.appStore.users.toJSON();

    return inputLength === 0 ? [] : users.filter(user => (
      user.name.toLowerCase().slice(0, inputLength) === inputValue
    ));
  };

  render() {
    const inputProps = {
      placeholder: 'username',
      value: this.state.value,
      onChange: this.onChange,
    };

    return (
      <Autosuggest
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={this.onSuggestionSelected}
      />
    );
  }
}

UserSelect.propTypes = {
  userId: PropTypes.string,
};

UserSelect.defaultProps = {
  userId: '',
};

export default UserSelect;
