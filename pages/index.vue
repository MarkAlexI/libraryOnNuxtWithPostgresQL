<template>
  <nav class="mt-8 ml-4 fixed top-0 w-full shadow-md bg-gray-100 bg-opacity-75 backdrop-blur-lg">
    <ul class="flex">
      <li class="mr-6">
        <a href="#" class="text-blue-500 hover:text-gray-800 underline">Catalog</a>
      </li>
      <li>
        <a href="#" class="text-blue-500 hover:underline">Login</a>
      </li>
    </ul>
  </nav>

  <div
    class="dark:md:hover:bg-fuchsia-600 flex flex-col items-center justify-center flex-wrap"
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

    <button @click="refresh" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Refresh</button>
  </div>

  <footer class="mt-8 text-center w-full shadow-mt bg-gray-100 bg-opacity-75 backdrop-blur-lg">
    <p class="mb-2">Created by MarkAlexI 2024</p>
    <a href="https://markalexi.github.io/" class="mb-2 text-blue-500 hover:underline">https://markalexi.github.io/</a>
  </footer>
</template>

<script setup lang="ts">
const books = ref([]);
const { data, error, pending, refresh } = await fetchData();

books.value = data.value.books;
</script>
