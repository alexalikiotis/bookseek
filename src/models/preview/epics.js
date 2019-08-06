import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, switchMap, catchError, takeUntil } from 'rxjs/operators';

import {
  previewRequest,
  previewSuccess,
  previewFailed,
  previewCanceled,
} from './actions';

import * as bookService from '@/services/book';

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
