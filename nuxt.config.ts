// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      title: 'HSCT',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'TGPC UK Portal',
        },
      ],
      // script: [
      //   {
      //     hid: "tawk.to",
      //     src: "https://embed.tawk.to/64b65abccc26a871b0291a35/1h5k54spo",
      //     async: true,
      //     defer: true,
      //   },
      // ],
    },
  },
  css: [
    '~/assets/main.scss',
    '~/assets/fonts/fonts.css',
    '~/assets/notification.scss',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    'nuxt-swiper',
    'vue3-carousel-nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;',
        },
      },
    },
  },
  googleFonts: {
    families: {
      Sora: [200, 400, 500, 600, 700],
      Poppins: [400, 500, 600, 700],
    },
  },
  build: {
    transpile: ['gsap', 'vue-toastification', '@vuepic/vue-datepicker'],
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    },
  },
});
