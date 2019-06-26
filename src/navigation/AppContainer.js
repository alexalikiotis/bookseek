import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import CameraSwiper from './CameraSwiper';
import ResultsLoadingScreen from '../screens/ResultsLoading';

import PermissionsPendingScreen from '../screens/PermissionsPending';
import PermissionsDeniedScreen from '../screens/PermissionsDenied';

const ResultsNavigator = createStackNavigator(
  {
    ResultsLoading: ResultsLoadingScreen,
  },
  { headerMode: 'none' }
);

const AppStack = createStackNavigator(
  {
    Camera: CameraSwiper,
    Results: ResultsNavigator,
  },
  {
    initialRouteName: 'Camera',
    mode: 'modal',
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
