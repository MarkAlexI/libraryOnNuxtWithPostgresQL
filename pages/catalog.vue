<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-3xl font-bold mb-4">Catalog of books</h1>

    <BookList :title="'List of books'" :books="books" />

    <div v-if="showForm" class="mt-4">
      <h3 class="text-xl mb-2">{{ editing ? "Edit book" : "Add new book" }}</h3>
      <form class="flex flex-col space-y-2" @submit.prevent="handleSubmit">
        <label for="title" class="font-semibold">Title:</label>
        <input
          v-model="form.title"
          type="text"
          required
          class="border rounded-md p-2"
        />

        <label for="author" class="font-semibold">Author:</label>
        <input
          v-model="form.author"
          type="text"
          required
          class="border rounded-md p-2"
        />

        <label for="year" class="font-semibold">Year:</label>
        <input
          v-model="form.year"
          type="number"
          required
          class="border rounded-md p-2"
        />

        <button
          type="submit"
          class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md"
        >
          {{ editing ? "Save" : "Add" }}
        </button>
      </form>
    </div>

    <button
      class="mt-4 bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-300"
      @click="showForm = !showForm"
    >
      {{ showForm ? "Hide the form" : "Show the form" }}
    </button>
  </div>
</template>

<script setup lang="ts">
const books = ref([]);
const showForm = ref(false);
const editing = ref(false);
const form = ref({ title: "", author: "", year: "" });

const resetForm = () => {
  form.value = { title: "", author: "", year: "" };
  editing.value = false;
};

async function saveBook(data) {
  await $fetch("/api/data/books", {
    method: "POST",
    body: data
  });
}

const handleSubmit = async () => {
  try {
    await saveBook(form.value);
    resetForm();
  } catch (error) {
    console.error("Book saving error: ", error);
  }
};

const { data } = await fetchData();

books.value = data.value.books;
</script>
