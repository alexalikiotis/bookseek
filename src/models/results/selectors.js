import { createSelector } from 'reselect';

const keysSelector = state => state.results.keys;
const entitiesSelector = state => state.results.entities;

export const sortedBooksSelector = createSelector(
  keysSelector,
  entitiesSelector,
  (keys, entities) =>
    keys.reduce(
      (bookList, key) => [...bookList, { id: key, ...entities[key] }],
      []
    )
);

export const bookPreviewSelector = state => {
  const key = keysSelector(state)[0];
  const entity = entitiesSelector(state)[key];

  return {
    id: key,
    ...entity,
  };
};
