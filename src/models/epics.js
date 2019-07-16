import { combineEpics } from 'redux-observable';
import { values, mergeAll } from 'ramda';

import * as resultsEpics from './results/epics';
import * as libraryEpics from './library/epics';

const rootEpics = combineEpics(
  ...values(mergeAll([resultsEpics, libraryEpics]))
);

export default rootEpics;
