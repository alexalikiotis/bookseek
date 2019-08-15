import { combineEpics } from 'redux-observable';
import { values, mergeAll } from 'ramda';

import * as resultsEpics from './results/epics';
import * as libraryEpics from './library/epics';
import * as previewEpics from './preview/epics';
import * as reviewsEpics from './reviews/epics';
import * as settingsEpics from './settings/epics';

const rootEpics = combineEpics(
  ...values(
    mergeAll([
      resultsEpics,
      libraryEpics,
      previewEpics,
      reviewsEpics,
      settingsEpics,
    ])
  )
);

export default rootEpics;
