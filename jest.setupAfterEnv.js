import '@testing-library/jest-native/extend-expect';

import { queryClient } from '_utils/queryClient';
// mock service worker
import { server } from '_mocks/server.js';
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => {
  // reset react-query
  queryClient.removeQueries();
  queryClient.unmount();
  server.close();
});
