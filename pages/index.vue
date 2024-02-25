<template>
  <div class="flex flex-col items-center justify-center flex-wrap" style="height: 100vh">
    <h1 class="text-center">Головна сторінка</h1>

    <section>
      <BookList :title="'Фічери'" :books="featuredBooks" />
    </section>
  </div>
</template>

<script setup lang="ts">
const featuredBooks = ref([]);
const { data } = await useFetch("/api/data");

featuredBooks.value = data.value.books;
</script>
