import { combineEpics } from 'redux-observable';
import { values, mergeAll } from 'ramda';

import * as booksEpics from './books/epics';

const rootEpics = combineEpics(...values(mergeAll([booksEpics])));

export default rootEpics;
