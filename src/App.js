import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import store from './store/configureStore';
import CameraScreen from './screens/Camera';
import BookScreen from './screens/Book';

const stackNavigatorConfig = {
  headerMode: 'none',
};

const AppStack = createStackNavigator(
  {
    Camera: CameraScreen,
    Book: BookScreen,
  },
  stackNavigatorConfig
);

const Navigation = createAppContainer(AppStack);

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
