<template>
  <div>
    <UserDetails :userId="userId" />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import UserDetails from '../components/UserDetails.vue';

export default {
  components: { UserDetails },
  setup() {
    const route = useRoute();
    const userId = computed(() => parseInt(route.params.id));
    return { userId };
  }
};
</script>