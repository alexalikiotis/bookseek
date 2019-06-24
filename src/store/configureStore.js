import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../models/reducers';

// eslint-disable-next-line
const store = __DEV__
  ? createStore(rootReducer, composeWithDevTools())
  : createStore(rootReducer);

export default store;
