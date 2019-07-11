import { combineEpics } from 'redux-observable';
import { values, mergeAll } from 'ramda';

import * as booksEpics from './books/epics';
import * as libraryEpics from './library/epics';

const rootEpics = combineEpics(...values(mergeAll([booksEpics, libraryEpics])));

export default rootEpics;
