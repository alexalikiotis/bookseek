import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import * as bookService from '../../services/book';
import { searchRequest, searchSuccess, searchFailed } from './actions';

export const searchRequestEpic = action$ =>
  action$.pipe(
    ofType(searchRequest.type),
    map(action => action.payload),
    switchMap(picture =>
      from(bookService.recognizePicture(picture)).pipe(
        tap(res => console.log(res)),
        map(() => searchSuccess())
      )
    )
  );
