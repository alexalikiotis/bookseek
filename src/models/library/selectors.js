import { createSelector } from 'reselect';

export const libraryKeysSelector = state => state.library.keys;
export const libraryEntitiesSelector = state => state.library.entities;

export const libraryBooksSelector = createSelector(
  libraryKeysSelector,
  libraryEntitiesSelector,
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
