import type { Config } from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        black: '#000A0A',
        primary: '#800020',
        'light-green': '#CDEAEC',
        'light-blue': '#E9F3F6',
        'light-red': '#FFF8F7',
        'red-1': '#FFE9E7',
        'blue-2': '#F8FBFC',
        grey: '#2A2E2F',
        green: '#003D40',
        blue: '#BEDCE4',
        neutral: '#151718',
        'neutral-2': '#FBFBFB',
        'grey-2': '#535C5F',
        'grey-3': '#7E8A8D',
        'grey-4': '#FFFDF3',
        'grey-5': '#808484',
        'grey-6': '#333B3B',
        'grey-7': '#E5E7E7',
        'bg-blur': '#0B181B'
      },
      backgroundImage: {
        'hero-bg': "url('/img/hero-bg.png')",
        'hero-bg-mob': "url('/img/hero-bg-mob.png')",
        'about-bg': "url('/img/about-bg.png')",
        'about-bg-mob': "url('/img/about-bg-mob.png')",
        'services-bg': "url('/img/services-bg.png')",
        'services-bg-mob': "url('/img/excellence.png')",
        'contact-bg': "url('/img/contact-bg.png')",
        'contact-bg-mob': "url('/img/contact-bg-mob.png')",
        'blog-bg': "url('/img/blog-bg.png')",
        'ebooks-bg': "url('/img/ebooks-bg.png')"
      }
    }
  },
  plugins: [],
  content: []
}
