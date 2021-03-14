// Mock Async Storage
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

import 'react-native-gesture-handler/jestSetup';
import '_mocks/react-native-config';
import '@testing-library/jest-native/extend-expect';

// Mock for react-native reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
// TODO: mock this animated, it fails after upgrade to react native 0.64, react 17
// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// mock service worker
import { server } from '_mocks/server.js';
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Mock persist reducer, see https://github.com/rt2zz/redux-persist/issues/1243
jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});
// see https://github.com/rt2zz/redux-persist/issues/822
jest.mock('redux-persist/integration/react', () => ({
  PersistGate: props => props.children,
}));

// reset react-query
import { queryClient } from '_utils/queryClient';
afterAll(() => {
  queryClient.removeQueries();
  queryClient.unmount();
});
