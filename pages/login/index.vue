<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-3xl font-bold mb-4">Login</h1>
    <form @submit.prevent="login">
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold mb-2"
          >Email:</label
        >
        <input
          id="email"
          v-model="email"
          type="email"
          class="border-2 border-gray-400 rounded px-3 py-2 w-full"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-700 font-bold mb-2"
          >Password:</label
        >
        <input
          id="password"
          v-model="password"
          type="password"
          class="border-2 border-gray-400 rounded px-3 py-2 w-full"
        />
      </div>
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </button>
    </form>
    <div v-if="!isLoggedIn">
      <h2 class="text-lg font-bold mt-4">Don't have an account?</h2>
      <router-link to="/register" class="text-blue-500 hover:underline"
        >Sign up here</router-link
      >
    </div>
    <div v-else>
      <p
        class="text-center text-blue-500 hover:text-gray-800 underline"
        @click="logout"
      >
        Logout
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref("");
const password = ref("");
const isLoggedIn = useState<boolean>("loggedIn", () => false);

const login = async () => {
  if (!email.value || !password.value) return;

  try {
    const response = await $fetch("/api/login", {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
      },
    });
    if (response.success) {
      isLoggedIn.value = true;
      await navigateTo("/");
    } else {
      alert("Invalid email or password.");
    }
  } catch (error) {
    console.error("Login failed:", error);
    alert("Login failed. Please try again later.");
  }
};

const logout = () => {
  isLoggedIn.value = false;
};
</script>
