// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Crystallize Care Services',
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico"}
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'We\'re here to support you in reclaiming freedom, connecting with your community, and reaching your full potential. No matter your age or situation, we believe in unlocking boundless adventures for all.' }
      ],
      script: [
        {
          hid: 'tawk.to',
          src: 'https://embed.tawk.to/64b65abccc26a871b0291a35/1h5k54spo',
          async: true,
          defer: true,
        }
      ]
    }
  },
  css: ['~/assets/main.scss', '~/assets/fonts/fonts.css'],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/google-fonts', 'nuxt-swiper'],
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
