import { ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { map, mergeMap, switchMap, catchError } from 'rxjs/operators';

import {
  saveBookRequest,
  saveBookSuccess,
  saveBookFailed,
  loadBooksRequest,
  loadBooksSuccess,
  loadBooksFailed,
} from './actions';
import * as storageService from '@/services/storage';

export const saveBookEpic = action$ =>
  action$.pipe(
    ofType(saveBookRequest.type),
    map(action => action.payload),
    mergeMap(book =>
      from(storageService.save(book)).pipe(
        map(savedBook => saveBookSuccess(savedBook)),
        catchError(err => {
          console.log(err);
          return of(saveBookFailed(err));
        })
      )
    )
  );

export const loadBooksEpic = action$ =>
  action$.pipe(
    ofType(loadBooksRequest.type),
    switchMap(() =>
      from(storageService.load()).pipe(
        map(allBooks => loadBooksSuccess(allBooks)),
        catchError(err => {
          console.log(err);
          return of(loadBooksFailed(err));
        })
      )
    )
  );
