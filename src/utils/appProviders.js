import '_translations';
import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from '_store';
import getTheme from '_themes/components';
import platform from '_themes/variables/platform';
import { StyleProvider } from 'native-base';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '_utils/queryClient';

export default function AppProviders({ children }) {
  return (
    <Provider store={store}>
      {/**
       * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
       * and saved to redux.
       * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
       * for example `loading={<SplashScreen />}`.
       * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
       */}
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <StyleProvider style={getTheme(platform)}>{children}</StyleProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
