// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      title: 'O.C. Management Consulting',
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico"}
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Leading management consulting company specializing in Tender, Grant, and Bid writing and management as well as developing quality assurance frameworks and enabling successful license applications.' }
      ],
      script: [
        {
          hid: 'tawk.to',
          src: 'https://embed.tawk.to/64b65abccc26a871b0291a35/1h5k54spo',
          async: true,
          defer: true,
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/64b65abccc26a871b0291a35/1h5k54spo';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
        }
      ]
    }
  },
  css: ['~/assets/main.scss'],
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
