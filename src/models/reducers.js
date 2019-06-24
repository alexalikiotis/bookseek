import { combineReducers } from 'redux';

import bookReducer from './book/reducer';

const rootReducer = combineReducers({
  book: bookReducer,
});

export default rootReducer;
