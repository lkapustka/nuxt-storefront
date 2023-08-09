// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // https://tailwindcss.nuxtjs.org/
    '@nuxtjs/tailwindcss',
    // https://pinia.vuejs.org/ssr/nuxt.html
    '@pinia/nuxt',
    // https://vueuse.org/
    '@vueuse/nuxt',
  ],

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    typedPages: true,
  },

  runtimeConfig: {
    public: {
      apiBaseURL: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },

  css: [
    '@/assets/scss/main.scss', // contains all global styles
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/tools.scss" as *;', // contains just variables/mixins/functions needed for components and global styles (do not include any compilable css)
        },
      },
    },
  },

  devtools: {
    enabled: true,
  },
});
