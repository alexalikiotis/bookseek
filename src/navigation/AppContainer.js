import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import CameraSwiper from './CameraSwiper';

import PermissionsPendingScreen from '../screens/PermissionsPending';
import PermissionsDeniedScreen from '../screens/PermissionsDenied';

const AppStack = createStackNavigator(
  {
    Camera: CameraSwiper,
  },
  {
    initialRouteName: 'Camera',
    headerMode: 'none',
  }
);

export default createAppContainer(
  createSwitchNavigator({
    PermissionsPending: PermissionsPendingScreen,
    PermissionsDenied: PermissionsDeniedScreen,
    App: AppStack,
  })
);
