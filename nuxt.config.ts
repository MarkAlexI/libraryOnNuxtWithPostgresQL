import type { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
      noscript: [
        {
          children: "JavaScript is required",
        },
      ],
    },
  },
  build: {
    transpile: ["rxjs"],
  },
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
    POSTGRES_URL: process.env.POSTGRES_URL,
    DEV: process.env.DEV,
    compatibilityDate: process.env.COMPATIBILITY_DATE || '2025-04-02',
  },
  experimental: {
    payloadExtraction: false,
    defaults: {
      nuxtLinks: {
        prefetchOn: {
          visibility: false,
          interaction: true
        }
      }
    }
  },
  router: {
    options: {
      strict: false,
    },
  },
  sourcemap: false,
  devtools: { enabled: true },
  future: {
    compatibilityVersions: 4
  },
};

export default config;
