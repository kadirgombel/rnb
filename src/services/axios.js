import axios from 'axios';
import Config from 'react-native-config';

console.log(Config.API_URL);

const instance = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default instance;
