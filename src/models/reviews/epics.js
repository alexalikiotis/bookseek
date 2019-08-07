import { ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { filter, propEq } from 'ramda';

import { reviewsRequest, reviewsSuccess, reviewsFailed } from './actions';

import * as reviewsService from '@/services/reviews';

export const reviewsEpic = action$ =>
  action$.pipe(
    ofType(reviewsRequest.type),
    map(
      action => filter(propEq('type', 'ISBN_13'), action.payload)[0].identifier
    ),
    switchMap(isbn =>
      from(reviewsService.findReviews(isbn)).pipe(
        map(data => reviewsSuccess(data)),
        catchError(() => of(reviewsFailed()))
      )
    )
  );
