import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default {
  getUsers() {
    return axios.get(`${BASE_URL}/users`);
  },
  getUser(id) {
    return axios.get(`${BASE_URL}/users/${id}`);
  },
  getUserPosts(userId) {
    return axios.get(`${BASE_URL}/posts`, { params: { userId } });
  }
};