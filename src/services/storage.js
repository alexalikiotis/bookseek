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
          const realmBooks = realm.objects('Book');
          // const allBooks = JSON.parse(JSON.stringify(realmBooks));
          // console.log('DEBUG ==> ', allBooks);
          resolve(realmBooks);
        });
      })
      .catch(err => reject(err));
  });
