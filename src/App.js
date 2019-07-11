import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import AppContainer from '@/navigation/AppContainer';
import store from '@/store/configureStore';

// Redux actions
import { loadBooksRequest } from '@/models/library/actions';

const App = () => {
  useEffect(() => {
    store.dispatch(loadBooksRequest());
  }, []);

  return (
    <Provider store={store}>
      <ActionSheetProvider>
        <AppContainer />
      </ActionSheetProvider>
    </Provider>
  );
};

export default App;
