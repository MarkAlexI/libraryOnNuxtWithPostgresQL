<template>
  <div class="bg-white p-4 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold">{{ title }}</h2>

    <ul class="mt-4">
      <li v-for="book in books" :key="book.id" class="mb-2">
        {{ book.title }} - {{ book.author }} ({{ book.year }})
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  books?: array;
}>();
</script>
