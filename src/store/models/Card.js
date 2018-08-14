import { types, getParent } from 'mobx-state-tree';

import { getRandomString } from '../../utils/index';

export const Card = types.model(
  'Card',
  {
    id: types.identifier,
    isEditing: types.optional(types.boolean, false),
    fields: types.frozen(),
  },
).preProcessSnapshot((snapshot) => {
  const change = {};
  if (snapshot.id === undefined) {
    change.id = getRandomString();
  }
  return Object.assign({}, snapshot, change);
})
  .views(self => ({
    get app() {
      return getParent(self, 2);
    },
  }))
  .actions(self => ({
    toggleIsEditing(newValue) {
      if (newValue === undefined) {
        self.isEditing = !self.isEditing;
      } else {
        self.isEditing = newValue;
      }
    },
    delete() {
      self.app.deleteCard(self);
    },
    update(fieldsChange) {
      self.fields = Object.assign({}, self.fields, fieldsChange);
    },
  }));

export default Card;
