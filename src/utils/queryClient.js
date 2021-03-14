import { QueryClient } from 'react-query';
import Config from 'react-native-config';

const options =
  Config.ENV === 'TEST'
    ? {
        queries: {
          cacheTime: 0,
        },
      }
    : undefined;

export const queryClient = new QueryClient({ defaultOptions: options });
