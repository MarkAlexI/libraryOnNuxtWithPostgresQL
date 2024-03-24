<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-3xl font-bold mb-4">Register</h1>
    <form @submit.prevent="register">
      <div class="mb-4">
        <label for="username" class="block text-gray-700 font-bold mb-2"
          >Username:</label
        >
        <input
          id="username"
          v-model="username"
          class="border-2 border-gray-400 rounded px-3 py-2 w-full"
          type="text"
          minlength="4"
          maxlength="12"
          placeholder="Username"
          pattern="[A-Za-z]{4,12}"
          required
        />
        <span></span>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold mb-2"
          >Email:</label
        >
        <input
          id="email"
          v-model="email"
          class="border-2 border-gray-400 rounded px-3 py-2 w-full"
          type="email"
          required
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-700 font-bold mb-2"
          >Password:</label
        >
        <input
          id="password"
          v-model="password"
          class="border-2 border-gray-400 rounded px-3 py-2 w-full"
          type="password"
          required
        />
      </div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Register
      </button>
    </form>
    <div v-if="isLoggedIn">
      <p class="mt-4 text-green-500 font-bold">Registration successful!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const username = ref("");
const email = ref("");
const password = ref("");
const isLoggedIn = useState<boolean>("loggedIn");

const register = async () => {
  try {
    const data = await $fetch("/api/register", {
      method: "POST",
      body: {
        username: username.value,
        email: email.value,
        password: password.value,
      },
    });

    if (data.success) {
      isLoggedIn.value = true;
      await navigateTo("/");
    } else {
      alert("Registration failed. Please try again.");
    }
  } catch (error) {
    console.error("Registration failed: ", error);
    alert("Registration failed. Please try again later.");
  }
};
</script>

<style scoped>
input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
</style>
