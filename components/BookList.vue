<template>
  <div class="bg-white p-4 rounded-lg shadow-md mb-4">
    <h2
      class="first-letter:text-orange-500 first-letter:uppercase text-2xl font-bold"
    >
      {{ title }}
    </h2>

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
defineProps<{
  title?: string;
  books?: Array<Book>;
  editable?: boolean;
}>();

const emit = defineEmits(["edit-book", "delete-book"]);

const editBook = (book: Book): void => {
  emit("edit-book", book);
};

const deleteBook = (book: Book): void => {
  emit("delete-book", book);
};
</script>
