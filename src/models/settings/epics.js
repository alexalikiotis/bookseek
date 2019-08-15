import { ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { switchMap, ignoreElements, map, catchError } from 'rxjs/operators';

import {
  settingsUpdate,
  settingsLoadRequest,
  settingsLoadSuccess,
  settingsLoadFailed,
} from './actions';
import * as storageService from '@/services/storage';

export const saveEpic = (action$, state$) =>
  action$.pipe(
    ofType(settingsUpdate.type),
    switchMap(action =>
      from(
        storageService.saveSettings({
          ...state$.value.settings,
          ...action.payload,
        })
      ).pipe(ignoreElements())
    )
  );

export const loadEpic = action$ =>
  action$.pipe(
    ofType(settingsLoadRequest.type),
    switchMap(() =>
      from(storageService.loadSettings()).pipe(
        map(settings => settingsLoadSuccess(settings)),
        catchError(err => of(settingsLoadFailed(err)))
      )
    )
  );
