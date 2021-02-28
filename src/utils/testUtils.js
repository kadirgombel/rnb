import React from 'react';
import '_translations';
import getTheme from '_themes/components';
import platform from '_themes/variables/platform';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from '_store';
import { SafeAreaView, ScrollView } from 'react-native';
import { StyleProvider } from 'native-base';

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyleProvider style={getTheme(platform)}>
          <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
              {children}
            </ScrollView>
          </SafeAreaView>
        </StyleProvider>
      </PersistGate>
    </Provider>
  );
};

const wait = async (ms) =>
  await new Promise((resolve) => setTimeout(resolve, ms));

const customRender = async (ui, options) => {
  const result = render(ui, { wrapper: AllTheProviders, ...options });
  // To wait redux-persist gate
  await wait(1);
  return result;
};

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
