<template>
  <div>
    <nav
      class="bg-background/75 fixed top-0 w-full shadow-md bg-gray-100 bg-opacity-50 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 -mb-px lg:mb-0 lg:border-0 p-2"
    >
      <ul class="flex">
        <li class="mr-6 ml-3">
          <NuxtLink to="/" class="text-blue-500 hover:text-gray-800 underline"
            >Main</NuxtLink
          >
        </li>
        <li class="mr-6">
          <NuxtLink
            to="/catalog"
            class="text-blue-500 hover:text-gray-800 underline"
            >Catalog</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/login" class="text-blue-500 hover:underline"
            >Login</NuxtLink
          >
        </li>
      </ul>
    </nav>

    <slot />

    <footer
      class="mt-8 text-center w-full shadow-mt bg-gray-100 bg-opacity-75 backdrop-blur-lg"
    >
      <p class="mb-2">Created by MarkAlexI 2025</p>
      <a
        href="https://markalexi.github.io/"
        class="mb-2 text-blue-500 hover:underline"
        >https://markalexi.github.io/</a
      >
    </footer>
  </div>
</template>
