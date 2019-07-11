import Realm from 'realm';

import { databaseOptions } from '@/realm/schema';

export const save = book =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          const savedBook = realm.create('Book', book);
          console.log(savedBook);
          resolve(savedBook);
        });
      })
      .catch(err => reject(err));
  });

export const load = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          const allBooks = realm.objects('Book');
          resolve(allBooks);
        });
      })
      .catch(err => reject(err));
  });

export const remove = bookId =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          const allBooks = realm.objects('Book');
          const book = allBooks.filtered(`id = "${bookId}"`);
          realm.delete(book);
          resolve();
        });
      })
      .catch(err => reject(err));
  });
