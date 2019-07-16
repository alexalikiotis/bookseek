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
