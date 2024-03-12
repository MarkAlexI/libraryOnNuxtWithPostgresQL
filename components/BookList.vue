<template>
  <div class="bg-white p-4 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold">{{ title }}</h2>

    <ul class="mt-4">
      <li v-for="book in books" :key="book.id" class="mb-2">
        {{ book.title }} - {{ book.author }} ({{ book.published_year }})
        <button
          v-if="editable"
          class="ml-2 text-blue-500"
          @click="editBook(book)"
        >
          Edit
        </button>
        <button
          v-if="editable"
          class="ml-2 text-red-500"
          @click="deleteBook(book)"
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Book {
  id: number;
  title: string;
  author: string;
  published_year: number;
  type_of_book: string;
  user_id: number;
  added_at: string;
};

defineProps<{
  title?: string;
  books?: Array<Book>;
  editable?: boolean;
}>();

const emit = defineEmits(["edit-book", "delete-book"]);

const editBook = (book: Book) => {
  emit("edit-book", book);
};

const deleteBook = (book: Book) => {
  emit("delete-book", book);
};
</script>
