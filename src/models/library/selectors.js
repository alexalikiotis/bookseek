import { createSelector } from 'reselect';

const keysSelector = state => state.library.keys;
const entitiesSelector = state => state.library.entities;

export const libraryBooksSelector = createSelector(
  keysSelector,
  entitiesSelector,
  (keys, entities) =>
    keys.reduce((bookList, key) => {
      const { title, authors } = entities[key];
      return [
        ...bookList,
        {
          id: key,
          title,
          authors,
          thumbnail: `http://books.google.com/books/content?id=${key}&printsec=frontcover&img=1&zoom=`,
        },
      ];
    }, [])
);
