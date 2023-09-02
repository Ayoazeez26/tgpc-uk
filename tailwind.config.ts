import type { Config } from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: "#001D40",
        secondary: "#244AB4",
        head: "#343B5C",
        brown: "#BA8827",
        "light-green": "#CDEAEC",
        "light-blue": "#E9F3F6",
        "light-red": "#FFF8F7",
        "red-1": "#FFE9E7",
        "blue-2": "#1B5588",
        "blue-3": "#071522",
        grey: "#5A5A59",
        green: "#003D40",
        blue: "#BEDCE4",
        neutral: "#151718",
        "neutral-2": "#FBFBFB",
        "grey-2": "#E6E6E5",
        "grey-3": "#D7D7D6",
        "grey-4": "#FAF9F7",
        "grey-5": "#F7F8FA",
        "grey-6": "#9CA5AF",
        "grey-7": "#E5E7E7",
        "grey-8": "#EBEBEB",
        "grey-9": "#D9D9D9",
        "bg-blur": "#0B181B",
      },
      backgroundImage: {
        "hero-bg": "url('/img/hero-bg.png')",
        "hero-bg-mob": "url('/img/hero-bg-mob.png')",
        "about-bg": "url('/img/about-bg.png')",
        "about-bg-mob": "url('/img/about-bg-mob.png')",
        "services-bg": "url('/img/services-bg.png')",
        "services-bg-mob": "url('/img/excellence.png')",
        "contact-bg": "url('/img/contact-bg.png')",
        "contact-bg-mob": "url('/img/contact-bg-mob.png')",
        "blog-bg": "url('/img/blog-bg.png')",
        "ebooks-bg": "url('/img/ebooks-bg.png')",
      },
    },
  },
  plugins: [],
  content: [],
};
