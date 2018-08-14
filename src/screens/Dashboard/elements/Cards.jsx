import React from 'react';
import { inject, Observer } from 'mobx-react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { CardsBlock } from '../../../components/Card';
import { Card } from './Card';

@inject('appStore')
export class Cards extends React.Component {

  onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    this.props.appStore.reorderCards( result.source.index, result.destination.index);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {provided => (
            <CardsBlock
              innerRef={provided.innerRef}
              {...provided.droppableProps}
            >
              <Observer>
                { () => (
                  this.props.appStore.cards.map((card, i) => (
                    <Draggable key={card.id} draggableId={card.id} index={i}>
                      {providedDragable => (
                        <Card
                          innerRef={providedDragable.innerRef}
                          {...providedDragable.draggableProps}
                          {...providedDragable.dragHandleProps}
                          key={card.id}
                          card={card}
                        />
                      )}
                    </Draggable>
                  ))
                )}
              </Observer>
              {provided.placeholder}
            </CardsBlock>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default Cards;
