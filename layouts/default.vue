<script lang="ts" setup></script>

<template>
  <div>
    <nav
      class="mt-8 ml-4 fixed top-0 w-full shadow-md bg-gray-100 bg-opacity-50 backdrop-blur-lg"
    >
      <ul class="flex">
        <li class="mr-6 ml-3">
          <a href="/" class="text-blue-500 hover:text-gray-800 underline"
            >Main</a
          >
        </li>
        <li class="mr-6">
          <a href="/catalog" class="text-blue-500 hover:text-gray-800 underline"
            >Catalog</a
          >
        </li>
        <li>
          <a href="/login" class="text-blue-500 hover:underline">Login</a>
        </li>
      </ul>
    </nav>

    <slot />

    <footer
      class="mt-8 text-center w-full shadow-mt bg-gray-100 bg-opacity-75 backdrop-blur-lg"
    >
      <p class="mb-2">Created by MarkAlexI 2024</p>
      <a
        href="https://markalexi.github.io/"
        class="mb-2 text-blue-500 hover:underline"
        >https://markalexi.github.io/</a
      >
    </footer>
  </div>
</template>

<style scoped></style>
