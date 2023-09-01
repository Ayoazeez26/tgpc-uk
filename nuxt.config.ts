// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      title: "Wana Services",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "we specialize in sourcing local job opportunities for Nurses, Care Assistants, Support Workers, and Social Workers. Our mission is to help healthcare professionals find fulfilling careers in their own communities.",
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
  css: ["~/assets/main.scss", "~/assets/fonts/fonts.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "nuxt-swiper",
    "vue3-carousel-nuxt",
    "@pinia/nuxt"
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
      Epilogue: [400, 500, 600, 700],
      "League+Spartan": [400, 500, 600, 700],
    },
  },
  build: {
    transpile: ['gsap']
  }
});
