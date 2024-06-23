<template>
  <div>
    <UserList :users="users" @user-selected="navigateToUserDetails" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import UserList from '../components/UserList.vue';
import api from '../services/api';

export default {
  components: { UserList },
  setup() {
    const router = useRouter();
    const users = ref([]);

    onMounted(async () => {
      try {
        const response = await api.getUsers();
        users.value = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    });

    const navigateToUserDetails = (userId) => {
      router.push({ name: 'UserDetails', params: { id: userId } });
    };

    return { users, navigateToUserDetails };
  }
};
</script>