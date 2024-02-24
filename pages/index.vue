<template>
  <div class="flex flex-col items-center justify-center" style="height: 100vh">
    <h1 class="text-center">Головна сторінка</h1>

    <section>
      <h2>Фічери</h2>
      <p>{{ users }}</p>
      <BookList :title="'Фічери'" :books="featuredBooks" />
    </section>
  </div>
</template>

<script setup lang="ts">
const { data } = useFetch("/api/data");
const users = ref(JSON.stringify(data));
const featuredBooks = ref([]);

onMounted(() => {
  featuredBooks.value = [
    {
      id: "0",
      title: "Lord of the rings",
      author: "R.R. Tolkien",
      year: 2000,
    },
    {
      id: "0",
      title: "Кобзар",
      author: "Т.Г. Шевченко",
      year: 2001,
    },
  ];
});
</script>
