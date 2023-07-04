// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico"}
      ]
    }
  },
  css: ['~/assets/main.scss'],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/google-fonts'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;'
        }
      }
    }
  },
  googleFonts: {
    families: {
      Epilogue: [400, 500, 600, 700],
      'League+Spartan': [400, 500, 600, 700]
    }
  }
})
