<template>
  <div
    class="flex flex-col items-center justify-center flex-wrap"
    style="height: 100vh"
  >
    <h1 class="text-center">Main page</h1>

    <section v-if="pending">
      <p>Loading...</p>
    </section>
    <section v-else-if="data">
      <BookList :title="'New'" :books="books" />
    </section>
    <section v-else-if="error">
      <p>Error: {{ error }}</p>
    </section>

    <button @click="refresh">Refresh</button>
  </div>
</template>

<script setup lang="ts">
const books = ref([]);
const { data, error, pending, refresh } = await fetchData();

books.value = data.value.books;
</script>
