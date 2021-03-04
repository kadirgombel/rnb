import '_translations';
import { render } from '@testing-library/react-native';

import AppProviders from './appProviders';

const wait = async (ms) =>
  await new Promise((resolve) => setTimeout(resolve, ms));

const customRender = (ui, options) => {
  const result = render(ui, { wrapper: AppProviders, ...options });
  // To wait redux-persist gate
  // await wait(1);
  return result;
};

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
