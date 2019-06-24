import { createStackNavigator, createAppContainer } from 'react-navigation';

import CameraScreen from './screens/Camera';

const stackNavigatorConfig = {
  headerMode: 'none',
};

const AppStack = createStackNavigator(
  {
    Camera: CameraScreen,
  },
  stackNavigatorConfig
);

export default createAppContainer(AppStack);
