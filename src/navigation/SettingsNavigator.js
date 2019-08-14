import { createAppContainer, createStackNavigator } from 'react-navigation';

import SettingsScreen from '@/screens/Settings';
import SettingsPictureQualityScreen from '@/screens/SettingsPictureQuality';
import SettingsBookSuggestionsScreen from '@/screens/SettingsBookSuggestions';

const SettingsNavigator = createStackNavigator(
  {
    Settings: SettingsScreen,
    SettingsPictureQuality: SettingsPictureQualityScreen,
    SettingsBookSuggestions: SettingsBookSuggestionsScreen,
  },
  {
    headerMode: 'none',
  }
);

export default createAppContainer(SettingsNavigator);
