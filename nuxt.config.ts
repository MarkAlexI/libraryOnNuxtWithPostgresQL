// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/test-utils/module"
  ],
  css: ["/assets/css/main.css"],
  ssr: true,
  runtimeConfig: {
    pg_user: process.env.PG_USER,
    pg_host: process.env.PG_HOST,
    pg_db: process.env.PG_DB,
    pg_pass: process.env.PG_PASS,
    pg_port: Number.parseInt(process.env.PG_PORT, 10),
  },
  experimental: {
    payloadExtraction: false,
  },
  router: {
    options: {
      strict: false,
    },
  },
  sourcemap: false,
  devtools: { enabled: true },
});
