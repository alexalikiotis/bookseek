import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, switchMap, catchError, takeUntil } from 'rxjs/operators';

import {
  searchRequest,
  searchSuccess,
  searchFailed,
  searchCanceled,
} from './actions';

import * as recognizeService from '@/services/recognize';

export const searchEpic = (action$, state$) =>
  action$.pipe(
    ofType(searchRequest.type),
    map(action => action.payload),
    switchMap(picture =>
      from(
        recognizeService.recognizePicture(
          picture,
          state$.value.settings.bookSuggestions
        )
      ).pipe(
        map(items => searchSuccess(items)),
        takeUntil(action$.pipe(ofType(searchCanceled.type))),
        catchError(error => of(searchFailed(error.message)))
      )
    )
  );
