<!-- Logika -->
<script setup>
  import ButtonCounter from './components/ButtonCounter.vue';
  import BlogPost from './components/BlogPost.vue';
  // import PaginatePost from './components/PaginatePost.vue';

  import {ref} from "vue";
  const posts = ref([
    {title: "post 1", id: 1, body: "descripción 1"},
    {title: "post 2", id: 2, body: "descripción 2"},
    {title: "post 3", id: 3, body: "descripción 3"},
    {title: "post 4", id: 4}
  ]);

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => posts.value=data);

</script>

<!-- HTML kodea -->
<template>
  <div class="container">
    <h1>Nire lehenengo proiektua</h1>
    <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter />

    <BlogPost title="Post 1" id="1" body="descripción 1" colorText="primary"/>
    <BlogPost title="Post 2" id="2" body="descripción 2" colorText="secondary"/>
    <BlogPost title="Post 3" id="3" body="descripción 3" colorText="success"/>
    <BlogPost title="Post 4" id="4" body="descripción 4" colorText="primary"/>
  </div>
</template>

<!-- Estiloak. CSS -->
<style>
  h1{
    color: red;
  }
</style>

