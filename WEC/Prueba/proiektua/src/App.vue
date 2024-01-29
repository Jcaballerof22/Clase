<script setup>
  import ButtonCounter from './components/ButtonCounter.vue';
  import BlogPost from './components/BlogPost.vue';
  import Paginate from './components/Paginate.vue'
  import {ref} from "vue";
  const name = 'Vue js';
  const posts = ref([]);
  const postXPage = 10;
  const inicio = ref(0);
  const fin = ref(postXPage);
  const favorito = ref('');

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      posts.value = data;
    })
    .catch(error => {
      console.error('Error: ', error);
    });

    const next = () => {
      inicio.value += postXPage;
      fin.value += postXPage; 
    }

    const prev = () => {
      inicio.value -= postXPage;
      fin.value -= postXPage;
    }

    const cambiarFavorito = (title) => {
      favorito.value = title;
    }
</script>

<template>
  <h1>Hello {{ name }}</h1>
  <div class="container">
    <h1>Nire lehenengo proiektua</h1>
    <p>Favorito: {{ favorito }}</p>
    <Paginate 
      @next = "next"
      @prev = "prev"
      :inicio = "inicio"
      :fin = "fin"
      :maxLength = "posts.length"
    />
    <br>
    <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter />
    <BlogPost
      v-for="post in posts.slice(inicio, fin)"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :body="post.body"
      @cambiarFav = "cambiarFavorito"
      class="mb-2">
    </BlogPost>
  </div>
</template>

<style>
  h1{
    color: red;
  }
</style>
