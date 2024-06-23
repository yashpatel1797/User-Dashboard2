<!-- <template>
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-2 border-grey rounded cursor-pointer hover:bg-gray-100">
      <div class="flex items-center">
        <div class="w-12 h-12 rounded-full mr-4 flex-shrink-0"></div>
        <div>
          <h3 class="text-lg font-semibold">{{ user.name }}</h3>
          <p>{{ user.username }}</p>
          <a :href="`mailto:${user.email}`" class="text-blue-500 hover:underline sm:hidden">
            {{ user.email }}
          </a>
        </div>
      </div>
      <a :href="`mailto:${user.email}`" class="text-blue-500 hover:underline hidden sm:block mt-2 sm:mt-0">
        {{ user.email }}
      </a>
    </div>
  </template> -->

  <template>
  <div class="flex items-center justify-between p-4 border-b cursor-pointer hover:bg-gray-50">
    <div class="flex items-center">
      <div class="w-10 h-10 bg-gray-300 rounded-full mr-4 flex-shrink-0"></div>
      <div>
        <h3 class="text-base font-medium text-gray-900">{{ user.name }}</h3>
        <p class="text-sm text-gray-500">{{ user.username }}</p>
      </div>
    </div>
    <a :href="`mailto:${user.email}`" class="text-sm text-blue-500 hover:underline">
      {{ user.email }}
    </a>
  </div>
</template>

  
  <script>
  export default {
    props: ['user']
  };
  </script>