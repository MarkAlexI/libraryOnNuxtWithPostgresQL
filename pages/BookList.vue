<template>
  <div>
    <h2>{{ title }}</h2>

    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.title }} - {{ book.author }}
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
