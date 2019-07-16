import { createSelector } from 'reselect';

const keysSelector = state => state.books.keys;
const entitiesSelector = state => state.books.entities;

export const sortedBooksSelector = createSelector(
  keysSelector,
  entitiesSelector,
  (keys, entities) =>
    keys.reduce(
      (bookList, key) => [...bookList, { id: key, ...entities[key] }],
      []
    )
);
