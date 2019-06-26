import React from 'react';
import { Provider } from 'react-redux';

import RootSwiper from './screens/RootSwiper';
import store from './store/configureStore';

const App = () => (
  <Provider store={store}>
    <RootSwiper />
  </Provider>
);

export default App;
