import React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';

import { CardStyled, CardHeader, CardBody } from '../../../components/Card';

@inject('appStore')
export class CardEdit extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: props.card.fields.title || '',
      description: props.card.fields.description || '',
    };
  }

  onDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.card.delete();
  };

  onTitleChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      title: e.target.value,
    });
  };

  onDescriptionChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      description: e.target.value,
    });
  };

  saveChanges = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.card.update({
      title: this.state.title,
      description: this.state.description,
    });
    this.props.card.toggleIsEditing(false);
  };

  render() {
    return (
      <CardStyled {...this.props}>
        <form onSubmit={this.saveChanges}>
          <CardHeader>
            <span style={{ float: 'right' }}>
              <button type="button" className="fas fa-times" onClick={this.onDeleteClick} />
            </span>
          </CardHeader>
          <CardBody>
            <input type="text" placeholder="title" value={this.state.title} onChange={this.onTitleChange} />
            <textarea value={this.state.description} onChange={this.onDescriptionChange} />
            <button type="submit">
              Save
            </button>
          </CardBody>
        </form>
      </CardStyled>
    );
  }
}

CardEdit.propTypes = {
  card: PropTypes.shape({
    isEditing: PropTypes.bool,
    fields: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  }).isRequired,
};

export default CardEdit;
