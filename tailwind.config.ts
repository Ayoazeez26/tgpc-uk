import type { Config } from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        black: '#000A0A',
        primary: '#03989E',
        white: '#FAFFFF',
        whiter: '#FFFFFF',
        'light-green': '#CDEAEC',
        grey: '#1A2323',
        green: '#003D40',
        'grey-2': '#CCCECE',
        'grey-3': '#666C6C',
        'grey-4': '#4D5454',
        'grey-5': '#808484',
        'grey-6': '#333B3B',
        'grey-7': '#E5E7E7'
      },
      backgroundImage: {
        'hero-bg': "url('/img/hero-bg.png')",
        'about-bg': "url('/img/about-bg.png')",
        'services-bg': "url('/img/services-bg.png')",
        'contact-bg': "url('/img/contact-bg.png')",
        'blog-bg': "url('/img/blog-bg.png')",
        'ebooks-bg': "url('/img/ebooks-bg.png')"
      }
    }
  },
  plugins: [],
  content: []
}
