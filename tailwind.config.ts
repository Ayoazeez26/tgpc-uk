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
        'grey-4': '#4D5454'
      },
      backgroundImage: {
        'hero-bg': "url('~/assets/images/hero-bg.png')",
        'about-bg': "url('~/assets/images/about-bg.png')",
        'services-bg': "url('~/assets/images/services-bg.png')"
      }
    }
  },
  plugins: [],
  content: []
}
