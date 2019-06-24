import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../models/reducers';
import rootEpics from '../models/epics';

const epicMiddleware = createEpicMiddleware();

// eslint-disable-next-line
const store = __DEV__
  ? createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(epicMiddleware))
    )
  : createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpics);

export default store;
