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
  removeBookRequest,
  removeBookSuccess,
  removeBookFailed,
} from './actions';
import * as storageService from '@/services/storage';

export const saveBookEpic = action$ =>
  action$.pipe(
    ofType(saveBookRequest.type),
    map(action => action.payload),
    mergeMap(book =>
      from(storageService.save(book)).pipe(
        map(savedBook => saveBookSuccess(savedBook)),
        catchError(err => of(saveBookFailed(err)))
      )
    )
  );

export const loadBooksEpic = action$ =>
  action$.pipe(
    ofType(loadBooksRequest.type),
    switchMap(() =>
      from(storageService.load()).pipe(
        map(allBooks => loadBooksSuccess(allBooks)),
        catchError(err => of(loadBooksFailed(err)))
      )
    )
  );

export const removeBookEpic = action$ =>
  action$.pipe(
    ofType(removeBookRequest.type),
    map(action => action.payload),
    mergeMap(bookId =>
      from(storageService.remove(bookId)).pipe(
        map(book => removeBookSuccess(book.id)),
        catchError(err => of(removeBookFailed(err)))
      )
    )
  );
