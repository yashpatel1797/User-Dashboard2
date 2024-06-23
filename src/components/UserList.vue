<template>
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold mb-4">Users</h2>
      <div class="mb-4 flex flex-col sm:flex-row justify-end gap-2 items-start sm:items-center">
        <div class="w-full sm:w-auto mb-2 sm:mb-0">
          <label for="search" class="block font-bold mb-1">Search</label>
          <input
            id="search"
            v-model="search"
            placeholder="Search users"
            class="w-full sm:w-64 p-2 border rounded"
          />
        </div>
        <div class="w-full sm:w-auto">
          <label for="sortBy" class="block font-bold mb-1">Sort By</label>
          <select 
            id="sortBy"
            v-model="sortBy" 
            class="w-full sm:w-64 p-2 border rounded"
          >
            <option value="name">Name</option>
            <option value="username">Username</option>
            <option value="email">Email</option>
          </select>
        </div>
      </div>
      <div class="grid gap-4">
        <UserCard
          v-for="user in filteredAndSortedUsers"
          :key="user.id"
          :user="user"
          @click="$emit('user-selected', user.id)"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import UserCard from './UserCard.vue';
  
  export default {
    components: { UserCard },
    props: ['users'],
    setup(props) {
      const search = ref('');
      const sortBy = ref('name');
  
      const filteredAndSortedUsers = computed(() => {
        return props.users
          .filter(user => 
            user.name.toLowerCase().includes(search.value.toLowerCase()) ||
            user.username.toLowerCase().includes(search.value.toLowerCase()) ||
            user.email.toLowerCase().includes(search.value.toLowerCase())
          )
          .sort((a, b) => a[sortBy.value].localeCompare(b[sortBy.value]));
      });
  
      return { search, sortBy, filteredAndSortedUsers };
    }
  };
  </script>