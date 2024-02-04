<template>
  <div class="flex flex-col items-center justify-center" style="height: 100vh">
    <h1 class="text-center">Головна сторінка</h1>

    <section>
      <h2>Фічери</h2>
      <BookList :title="'Фічери'" :books="featuredBooks" />
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BookList from './BookList.vue';

const featuredBooks = ref([]);

onMounted(() => {
  featuredBooks.value = [
    {
      "id": "0",
      "title": "Lord of the rings",
      "author": "R.R. Tolkien"
    },
    {
      "id": "0",
      "title": "Кобзар",
      "author": "Т.Г. Шевченко"
    }
  ];
});
</script>
