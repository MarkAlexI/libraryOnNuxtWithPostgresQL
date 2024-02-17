import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  plugins: [],
  test: {
    globals: true,
    environment: "happy-dom",
  },
});
