import { createRouter, createWebHistory } from 'vue-router';
import UserListView from '../views/UserListView.vue';
import UserDetailsView from '../views/UserDetailsView.vue';

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserListView
  },
  {
    path: '/user/:id',
    name: 'UserDetails',
    component: UserDetailsView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;