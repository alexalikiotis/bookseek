import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, switchMap, catchError, takeUntil } from 'rxjs/operators';

import {
  searchRequest,
  searchSuccess,
  searchFailed,
  searchCanceled,
  previewRequest,
  previewSuccess,
  previewFailed,
  previewCanceled,
} from './actions';

import * as recognizeService from '@/services/recognize';
import * as bookService from '@/services/book';

export const searchEpic = action$ =>
  action$.pipe(
    ofType(searchRequest.type),
    map(action => action.payload),
    switchMap(picture =>
      from(recognizeService.recognizePicture(picture)).pipe(
        map(items => searchSuccess(items)),
        takeUntil(action$.pipe(ofType(searchCanceled.type))),
        catchError(error => of(searchFailed(error.message)))
      )
    )
  );

export const previewEpic = action$ =>
  action$.pipe(
    ofType(previewRequest.type),
    map(action => action.payload),
    switchMap(id =>
      from(bookService.getBookById(id)).pipe(
        map(item => previewSuccess(item)),
        takeUntil(action$.pipe(ofType(previewCanceled.type))),
        catchError(error => of(previewFailed(error.message)))
      )
    )
  );
