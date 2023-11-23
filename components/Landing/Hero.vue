<template>
  <section>
    <div class="hero mt-24 text-white relative md:px-0 px-5 overflow-x-hidden">
      <div
        class="lg:max-w-[40rem] md:max-w-md max-w-sm mx-auto space-y-7 lg:pt-28 md:pt-32 pt-32"
      >
        <!-- <h3
          ref="scrambleText"
          class="md:font-bold font-semibold lg:text-[56px] md:text-4xl text-5xl lg:leading-snug md:leading-snug leading-snug"
        >
          Find Health Sector Tender Opportunities
          <span class="md:hidden">with HSCT</span>
        </h3> -->
        <h3
          ref="scrambleText"
          class="md:font-bold font-semibold lg:text-[56px] md:text-4xl text-5xl lg:leading-snug md:leading-snug leading-snug"
        >
          <span class="md:hidden">with HSCT</span>
        </h3>
        <p class="lg:text-lg">
          HSCT is the leading platform for searching and applying for health
          sector tender opportunities. Join us today and take your business to
          the next level.
        </p>

        <div
          class="flex md:flex-row flex-col md:space-y-0 space-y-5 md:items-center md:justify-center md:space-x-7"
        >
          <button
            class="bg-grey-5 text-[#0A0A0A] border border-[#D7D7D7] md:w-auto w-full rounded-md md:px-8 md:py-4 py-5"
          >
            Try it now
          </button>
          <button
            class="bg-[#606973] border border-[#606973] md:w-auto w-full rounded-md md:px-8 md:py-4 py-5"
          >
            Learn more
          </button>
        </div>
      </div>
      <div class="md:flex hidden">
        <div
          class="bg-greyish-white/50 lg:p-3 md:p-2 rounded-xl absolute lg:top-52 md:top-64 lg:-left-40 md:-left-28"
        >
          <img
            src="/gif/hero-gif.gif"
            alt=""
            class="rounded-xl lg:w-96 md:w-52"
          />
        </div>
        <div
          class="bg-greyish-white/50 lg:p-3 md:p-2 rounded-xl absolute lg:top-32 md:top-48 -right-14"
        >
          <img
            src="/webp/hero-right-img.webp"
            alt=""
            class="rounded-xl lg:w-72 w-52"
          />
        </div>
      </div>
    </div>
    <div class="flex">
      <div
        class="bg-greyish-white/50 md:p-5 p-2 md:rounded-xl rounded lg:max-w-7xl md:mx-6 mx-3 lg:-mt-[27rem] md:-mt-[31rem] -mt-44 z-10 lg:mx-auto lg:flex-none md:flex"
      >
        <img src="/webp/dashboard.webp" alt="" class="md:rounded-xl rounded" />
      </div>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

export default {
  mounted() {
    this.scrambleText();
  },
  methods: {
    scrambleText() {
      gsap.registerPlugin(ScrambleTextPlugin);

      const textElement = this.$refs.scrambleText;

      gsap.to(textElement, {
        duration: 5,
        scrambleText: {
          text: 'Find Health Sector Tender Opportunities',
          chars: 'XO',
          revealDelay: 0.5,
          speed: 0.5,
          newClass: 'myClass',
        },
      });
    },
  },
};
</script>

<style scoped>
.hero {
  background: url(/webp/landing-hero.webp);
  background-size: cover;
  background-position: center;
}

/* Small screens */
@media screen and (max-width: 767px) {
  .hero {
    background: url(/webp/hero-img-sm.webp);
    height: 130vh;
    background-size: cover;
    background-position: center;
  }
}

/* Medium screens */
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .hero {
    height: 100vh;
    /* Additional styles for medium screens if needed */
  }
}

/* Large screens */
@media screen and (min-width: 1024px) {
  .hero {
    height: 150vh;
    /* Additional styles for large screens if needed */
  }
}
</style>
