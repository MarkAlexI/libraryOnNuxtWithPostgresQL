<template>
  <div
    class="dark:md:hover:bg-fuchsia-600 flex flex-col items-center justify-center flex-wrap"
    style="height: 100vh"
  >
    <h1 class="text-center">Main page</h1>

    <section v-if="pending">
      <p>Loading...</p>
    </section>
    <section v-else-if="data">
      <div v-for="genre in genres" :key="genre">
        <BookList
          :title="genre"
          :books="filteredBooks(genre)"
          :editable="false"
        />
      </div>
    </section>
    <section v-else-if="error">
      <p>Error: {{ error }}</p>
    </section>

    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      @click="refresh"
    >
      Refresh
    </button>
  </div>
</template>

<script setup lang="ts">
const books = ref([]);
const { data, error, pending, refresh } = await fetchData();

books.value = data.value.books;

const genres = computed(() => {
  const uniqueGenres = new Set<string>();

  books.value.forEach((book: Book) => {
    uniqueGenres.add(book.type_of_book);
  });

  return Array.from(uniqueGenres);
});

const filteredBooks = (genre: string): Array<Book> => {
  return books.value.filter((book: Book) => {
    return book.type_of_book === genre;
  });
};
</script>
