<template>
    <div class="bg-white p-4 rounded shadow">
      <h4 class="font-semibold mb-2">{{ post.title }}</h4>
      <p>{{ post.body }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['post']
  };
  </script>