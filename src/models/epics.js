import { combineEpics } from 'redux-observable';
import { values, mergeAll } from 'ramda';

const rootEpics = combineEpics(...values(mergeAll([])));

export default rootEpics;
