import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import { CardStyled, CardHeader, CardBody } from '../../../components/Card';
import { CardEdit } from './CardEdit';

@inject('appStore')
@observer
export class Card extends React.Component {
  onEditClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.card.toggleIsEditing();
  };

  onDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.card.delete();
  };

  render() {
    const { fields, isEditing } = this.props.card;
    if (isEditing) {
      return <CardEdit card={this.props.card} />;
    }
    const { title, description } = fields;
    return (
      <CardStyled>
        <CardHeader>
          {title}
          <span style={{ float: 'right' }}>
            <button type="button" className="fas fa-pencil-alt" onClick={this.onEditClick} />
            <button type="button" className="fas fa-times" onClick={this.onDeleteClick} />
          </span>
        </CardHeader>
        <CardBody>
          {description}
        </CardBody>
      </CardStyled>
    );
  }
}

Card.propTypes = {
  card: PropTypes.shape({
    isEditing: PropTypes.bool,
    fields: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  }).isRequired,
};

export default Card;
