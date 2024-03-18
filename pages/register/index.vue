<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-3xl font-bold mb-4">Register</h1>
    <form @submit.prevent="register">
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
        <input type="email" id="email" v-model="email" class="border-2 border-gray-400 rounded px-3 py-2 w-full">
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-700 font-bold mb-2">Password:</label>
        <input type="password" id="password" v-model="password" class="border-2 border-gray-400 rounded px-3 py-2 w-full">
      </div>
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
    </form>
    <div v-if="registered">
      <p class="mt-4 text-green-500 font-bold">Registration successful!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref("");
const password = ref("");
const registered = ref(false);

const register = async () => {
  try {
    const data = await $fetch("/api/register", {
      method: "POST",
      body: {
        email: email.value,
        password: password.value
      }
    });

    if (data.success) {
      registered.value = true;
    } else {
      alert("Registration failed. Please try again.");
    }
  } catch (error) {
    console.error("Registration failed: ", error);
    alert("Registration failed. Please try again later.");
  }
};
</script>
