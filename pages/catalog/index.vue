<template>
  <div
    class="dark:md:hover:bg-fuchsia-600 flex flex-col items-center justify-center flex-wrap"
    style="min-height: 100vh"
  >
    <h1 class="text-3xl font-bold mb-4">Catalog of books</h1>

    <BookList
      :title="'List of books'"
      :books="books"
      :editable="isLoggedIn"
      @edit-book="handleEditBook"
      @delete-book="handleDeleteBook"
    />

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

        <label for="genre" class="font-semibold">Genre:</label>
        <select v-model="form.genre" class="border rounded-md p-2">
          <option value="new">New</option>
          <option value="popular">Popular</option>
          <option value="poetry">Poetry</option>
          <option value="fantasy">Fantasy</option>
          <option value="classique">Classique</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="adventures">Adventures</option>
          <option value="detective">Detective</option>
        </select>

        <button
          type="submit"
          class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md"
        >
          {{ editing ? "Save" : "Add" }}
        </button>

        <button
          v-if="editing"
          class="bg-green-500 text-white font-semibold py-2 px-4 rounded-md"
          @click.prevent="resetForm"
        >
          Cancel editing
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
const isLoggedIn = useState("loggedIn");
const editing = ref(false);

const { data, refresh } = await fetchData();
books.value = data.value.books;

const form = ref<BookForm>({
  id: null,
  title: "",
  author: "",
  year: null,
  genre: "",
});

const resetForm = (): void => {
  form.value = {
    id: null,
    title: "",
    author: "",
    year: null,
    genre: "",
  };
  editing.value = false;
};

async function saveBook(data: BookForm) {
  await $fetch("/api/data/books", {
    method: "POST",
    body: data,
  });
}

async function updateBook(data: BookForm) {
  await $fetch("/api/data/books", {
    method: "PUT",
    body: data,
  });
}

async function deleteBook(bookId: number) {
  await $fetch(`/api/data/books?id=${bookId}`, {
    method: "DELETE",
  });
}

const handleEditBook = (book: Book) => {
  form.value = {
    id: book.id,
    title: book.title,
    author: book.author,
    year: book.published_year,
    genre: book.type_of_book,
  };
  editing.value = true;
  showForm.value = true;
};

const handleDeleteBook = async (book: Book) => {
  try {
    await deleteBook(book.id);
    await refresh();
  } catch (error) {
    console.error("Book deletion error: ", error);
  }
};

const handleSubmit = async () => {
  try {
    if (editing.value) {
      await updateBook(form.value);
    } else {
      await saveBook(form.value);
    }

    resetForm();
    showForm.value = false;
    refresh();
  } catch (error) {
    console.error("Book saving error: ", error);
  }
};
</script>
