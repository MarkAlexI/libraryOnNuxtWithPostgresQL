import type { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  buildModules: ["@nuxt/typescript-build"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/test-utils/module"],
  css: ["/assets/css/main.css"],
  ssr: true,
  runtimeConfig: {
    PG_USER: process.env.PG_USER,
    PG_HOST: process.env.PG_HOST,
    PG_DB: process.env.PG_DB,
    PG_PASS: process.env.PG_PASS,
    PG_PORT: Number.parseInt(process.env.PG_PORT, 10),
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
};

export default config;
