import { combineEpics } from 'redux-observable';
import { values, mergeAll } from 'ramda';

import * as bookEpics from './book/epics';

const rootEpics = combineEpics(...values(mergeAll([bookEpics])));

export default rootEpics;
