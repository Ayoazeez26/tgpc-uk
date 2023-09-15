import type { Config } from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: "#091A4A",
        secondary: "#0A0A0A",
        black: "#161616",
        head: "#343B5C",
        lime: "#E6F4F1",
        brown: "#F1F1E6",
        "light-green": "#CDEAEC",
        "light-blue": "#E9F3F6",
        "light-red": "#FFF8F7",
        "red-1": "#FFE9E7",
        "blue-2": "#003260",
        "blue-3": "#071522",
        grey: "#F7F7F7",
        green: "#003D40",
        blue: "#2EACE5",
        neutral: "#212121",
        "neutral-2": "#353535",
        "grey-2": "#D7D7D7",
        "grey-3": "#ECECEC",
        "grey-4": "#DCDCDC",
        "grey-5": "#EBEBEB",
        "grey-6": "#606973",
        "grey-7": "#9CA5AF",
        "grey-8": "#525252",
        "grey-9": "#D9D9D9",
        "bg-blur": "#0B181B",
        yellow: "#F6AF54",
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
