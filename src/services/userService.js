import axios from './axios';

const userService = {
  getUserInfo(userId) {
    return axios.get(`/users/${userId}`);
  },
};

export default userService;
