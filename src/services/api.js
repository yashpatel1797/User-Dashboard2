import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default {
  getUsers() {
    console.log("getUser");
    return axios.get(`${BASE_URL}/users`);
  },
  getUser(id) {
    console.log("get id", id);
    return axios.get(`${BASE_URL}/users/${id}`);
  },
  getUserPosts(userId) {
    console.log("user id", userId);
    return axios.get(`${BASE_URL}/posts`, { params: { userId } });
  }
};