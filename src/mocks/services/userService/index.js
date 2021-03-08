import { rest } from 'msw';
import Config from 'react-native-config';

export const successOneUser = rest.get(
  `${Config.API_URL}/users/2`,
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: 'Kadir',
        email: 'kadirgombel@gmail.com',
        phone: '111 111 11 11',
      }),
    );
  },
);
