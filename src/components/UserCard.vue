<template>
  <div class="flex items-center justify-between p-4 bg-white hover:bg-gray-50 border-b border-gray-200 cursor-pointer">
    <div class="flex items-center">
      <div class="w-10 h-10 bg-gray-200 rounded-full mr-4 flex-shrink-0"></div>
      <div>
        <h3 class="text-base font-medium text-gray-900">{{ user.name }}</h3>
        <p class="text-sm text-gray-500">{{ user.username }}</p>
        <a :href="`mailto:${user.email}`" class="text-blue-500 hover:underline sm:hidden">
          {{ user.email }}
        </a>
      </div>
    </div>
    <a :href="`mailto:${user.email}`" class="text-blue-500 hover:underline hidden sm:block mt-2 sm:mt-0">
      {{ user.email }}
    </a>
  </div>
</template>
  
<script>
  export default {
    props: ['user']
  };
</script>