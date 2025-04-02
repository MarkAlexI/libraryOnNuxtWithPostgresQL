<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Library on Nuxt with PostgreSQL - MarkAlexI\'s PET-project',
  ogTitle: 'Library on Nuxt with PostgreSQL - MarkAlexI\'s PET-project',
  description: 'This is not a library in the strict sense of the word - a repository of books. This is a card index - a set of cards with information. This project happened spontaneously, I decided to test my abilities, combine what I had already mastered and play with PostgreSQL. Used Nuxt, Tailwind, VueUse and PostgreSQL. Won, it works.',
  ogDescription: 'This is not a library in the strict sense of the word - a repository of books. This is a card index - a set of cards with information. This project happened spontaneously, I decided to test my abilities, combine what I had already mastered and play with PostgreSQL. Used Nuxt, Tailwind, VueUse and PostgreSQL. Won, it works.',
});

useServerSeoMeta({
  robots: 'index, follow'
});
</script>
