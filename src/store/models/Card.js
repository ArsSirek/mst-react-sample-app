import { types, getParent } from 'mobx-state-tree';

/* should be replaced according to logic needs */
/* https://gist.github.com/6174/6062387 */
const getRandomString = () => Math.random().toString(36).substring(2, 15)
    + Math.random().toString(36).substring(2, 15);

export const Card = types.model(
  'Card',
  {
    id: types.identifier,
    isEditing: types.optional(types.boolean, false),
    fields: types.frozen(),
    // cards:
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
      console.log(self.toJSON());
    },
  }));

export default Card;
