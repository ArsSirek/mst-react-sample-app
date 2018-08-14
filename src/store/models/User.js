import { types, getParent } from 'mobx-state-tree';

import { getRandomString } from '../../utils/index';

export const User = types.model(
  'User',
  {
    id: types.identifier,
    name: types.string,
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
    delete() {
      self.app.deleteCard(self);
    },
  }));

export default User;
