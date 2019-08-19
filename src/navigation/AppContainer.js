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
import ReviewsScreen from '@/screens/Reviews';

const navigationOptions = {
  gesturesEnabled: false,
};

const ResultsNavigator = createStackNavigator(
  {
    ResultsLoading: ResultsLoadingScreen,
    ResultsError: {
      name: 'ResultsError',
      screen: ResultsErrorScreen,
      navigationOptions,
    },
    Results: {
      name: 'Results',
      screen: ResultsScreen,
      navigationOptions,
    },
  },
  {
    headerMode: 'none',
  }
);

const AppStack = createStackNavigator(
  {
    Camera: CameraSwiper,
    Results: {
      name: 'Results',
      screen: ResultsNavigator,
      navigationOptions,
    },
    Preview: {
      name: 'Preview',
      screen: PreviewScreen,
      navigationOptions,
    },
    Reviews: {
      name: 'Reviews',
      screen: ReviewsScreen,
      navigationOptions,
    },
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
