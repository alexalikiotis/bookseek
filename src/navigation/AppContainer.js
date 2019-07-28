import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import CameraSwiper from './CameraSwiper';

import ResultsLoadingScreen from '@/screens/ResultsLoading';
import ResultsErrorScreen from '@/screens/ResultsError';
import ResultsScreen from '@/screens/Results';
import PermissionsPendingScreen from '@/screens/PermissionsPending';
import PermissionsDeniedScreen from '@/screens/PermissionsDenied';
import PreviewScreen from '@/screens/Preview';

const ResultsNavigator = createStackNavigator(
  {
    ResultsLoading: ResultsLoadingScreen,
    ResultsError: ResultsErrorScreen,
    Results: ResultsScreen,
  },
  { headerMode: 'none' }
);

const AppStack = createStackNavigator(
  {
    Camera: CameraSwiper,
    Results: ResultsNavigator,
    Preview: PreviewScreen,
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
