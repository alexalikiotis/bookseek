import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import CameraSwiper from './CameraSwiper';

import BooksLoadingScreen from '@/screens/BooksLoading';
import BooksErrorScreen from '@/screens/BooksError';
import BooksScreen from '@/screens/Books';
import PermissionsPendingScreen from '@/screens/PermissionsPending';
import PermissionsDeniedScreen from '@/screens/PermissionsDenied';

const BooksNavigator = createStackNavigator(
  {
    BooksLoading: BooksLoadingScreen,
    BooksError: BooksErrorScreen,
    Books: BooksScreen,
  },
  { headerMode: 'none' }
);

const AppStack = createStackNavigator(
  {
    Camera: BooksScreen,
    Books: BooksNavigator,
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
