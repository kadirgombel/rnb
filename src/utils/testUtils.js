import React from 'react';
import '_translations';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from '_store';
import { SafeAreaView, ScrollView } from 'react-native';

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            {children}
          </ScrollView>
        </SafeAreaView>
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
