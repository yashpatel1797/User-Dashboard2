<template>
    <div class="container mx-auto px-4">
        <div class="text-2xl font-bold mb-6">
            <router-link to="/" class="text-blue-500 hover:underline">Users</router-link>
            <span class="text-gray-500"> > {{ user?.name || 'Loading...' }}</span>
    </div>

      <div v-if="user.id" class="grid md:grid-cols-3 gap-6">
        <div class="bg-white p-4 rounded shadow">
          <h3 class="font-semibold mb-2">Contact Info</h3>
          <p>Username: {{ user.username }}</p>
          <p>Email: <a :href="`mailto:${user.email}`" class="text-blue-500 hover:underline">{{ user.email }}</a></p>
          <p>Phone: <a :href="`tel:${user.phone}`" class="text-blue-500 hover:underline">{{ user.phone }}</a></p>
          <p>Website: <a :href="`https://${user.website}`" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">{{ user.website }}</a></p>
        </div>
        
        <div class="bg-white p-4 rounded shadow">
          <h3 class="font-semibold mb-2">Address</h3>
          <p v-if="user.address">
            {{ user.address.suite }} {{ user.address.street }}, {{ user.address.city }}, {{ user.address.zipcode }}
          </p>
        </div>
        
        <div class="bg-white p-4 rounded shadow">
          <h3 class="font-semibold mb-2">Company</h3>
          <p v-if="user.company">{{ user.company.name }}</p>
          <p v-if="user.company">{{ user.company.bs }}</p>
          <p v-if="user.company" class="italic">"{{ user.company.catchPhrase }}"</p>
        </div>
      </div>
      <div v-else class="text-center py-8">
        Loading user details...
      </div>
  
      <h3 class="text-xl font-semibold mt-8 mb-4">Posts by {{ user?.name || 'User' }}</h3>
      <div v-if="posts.length" class="grid md:grid-cols-3 gap-4">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
      <div v-else class="text-center py-8">
        Loading posts...
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import api from '../services/api';
  import PostCard from './PostCard.vue';
  
  export default {
    components: { PostCard },
    props: ['userId'],
    setup(props) {
      const user = ref({});
      const posts = ref([]);
  
      onMounted(async () => {
        try {
          const [userResponse, postsResponse] = await Promise.all([
            api.getUser(props.userId),
            api.getUserPosts(props.userId)
          ]);
          user.value = userResponse.data;
          posts.value = postsResponse.data;
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      });
  
      return { user, posts };
    }
  };
  </script>