import React from 'react';
import { inject, observer } from 'mobx-react';

import { CardsBlock } from '../../../components/Card';
import { Card } from './Card';

@inject('appStore')
@observer
export class Cards extends React.Component {
  render() {
    return (
      <CardsBlock>
        {
          this.props.appStore.cards.map(card => (
            <Card key={card.id} card={card} />
          ))
        }
      </CardsBlock>
    );
  }
}

export default Cards;
