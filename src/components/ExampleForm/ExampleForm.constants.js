import * as yup from 'yup';

export const SCHEMA = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});
