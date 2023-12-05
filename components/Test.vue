<template>
  <section class="horizontal overflow-x-hidden relative">
    <div class="pin-wrap" ref="pinWrap">
      <div class="animation-wrap to-right" ref="animationWrap">
        <div class="h-screen item">
          <img
            src="/webp/screen1.webp"
            alt=""
            class="h-screen object-cover w-full"
          />
        </div>
        <div class="h-screen item">
          <img
            src="/webp/screen.webp"
            alt=""
            class="h-screen object-cover w-full"
          />
        </div>
        <div class="h-screen item">
          <img
            src="/webp/screen3.webp"
            alt=""
            class="h-screen object-cover w-full"
          />
        </div>
        <div class="h-screen item">
          <img
            src="/webp/screen4.webp"
            alt=""
            class="h-screen object-cover w-full"
          />
        </div>
        <div class="h-screen item">
          <img
            src="/webp/screen5.webp"
            alt=""
            class="h-screen object-cover w-full"
          />
        </div>
        <div class="h-screen item">
          <img
            src="/webp/screen6.webp"
            alt=""
            class="h-screen object-cover w-full"
          />
        </div>
        <div class="h-screen item">
          <img
            src="/webp/screen7.webp"
            alt=""
            class="h-screen object-cover w-full"
          />
        </div>
        <div class="h-screen item">
          <img
            src="/webp/screen8.webp"
            alt=""
            class="h-screen object-cover w-full"
          />
        </div>
        <div class="h-screen item">
          <img
            src="/webp/screen9.webp"
            alt=""
            class="h-screen object-cover w-full"
          />
        </div>
        <div class="h-screen item">
          <img
            src="/webp/screen1.webp"
            alt=""
            class="h-screen object-cover w-full"
          />
        </div>
        <div class="h-screen item">
          <img
            src="/webp/screen.webp"
            alt=""
            class="h-screen object-cover w-full"
          />
        </div>
        <div class="h-screen item">
          <img
            src="/webp/screen3.webp"
            alt=""
            class="h-screen object-cover w-full"
          />
        </div>
        <div class="h-screen item">
          <img
            src="/webp/screen4.webp"
            alt=""
            class="h-screen object-cover w-full"
          />
        </div>
        <div class="h-screen item">
          <img
            src="/webp/screen5.webp"
            alt=""
            class="h-screen object-cover w-full"
          />
        </div>
        <div class="h-screen item">
          <img
            src="/webp/screen6.webp"
            alt=""
            class="h-screen object-cover w-full"
          />
        </div>
        <div class="h-screen item">
          <img
            src="/webp/screen7.webp"
            alt=""
            class="h-screen object-cover w-full"
          />
        </div>
        <div class="h-screen item">
          <img
            src="/webp/screen8.webp"
            alt=""
            class="h-screen object-cover w-full"
          />
        </div>
        <div class="h-screen item">
          <img
            src="/webp/screen9.webp"
            alt=""
            class="h-screen object-cover w-full"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.horizontal {
  overflow-x: hidden;
}

.horizontal .pin-wrap,
.horizontal .animation-wrap {
  display: flex;
  position: relative;
  z-index: 1;
  height: 100vh;
}

.horizontal .item {
  position: relative;
  flex: 0 0 500px;
  display: flex;
  align-items: center;
  line-height: 1.7;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-right: 1px solid rgba(0, 0, 0, 0.06);
  background-color: transparent;
}

section.horizontal .animation-wrap .item:nth-child(2n + 2) {
  align-items: flex-start;
}

section.horizontal .animation-wrap .item:nth-child(4n + 4) {
  align-items: flex-end;
}
</style>

<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.setupHorizontalScroll();
  },
  methods: {
    setupHorizontalScroll() {
      const pinWrap = this.$refs.pinWrap;
      const animationWrap = this.$refs.animationWrap;

      const getToValue = () => -(animationWrap.scrollWidth - window.innerWidth);

      gsap.fromTo(
        animationWrap,
        {
          x: () =>
            animationWrap.classList.contains('to-right') ? 0 : getToValue(),
        },
        {
          x: () =>
            animationWrap.classList.contains('to-right') ? getToValue() : 0,
          ease: 'none',
          scrollTrigger: {
            trigger: pinWrap,
            start: 'top top',
            end: () => '+=' + (animationWrap.scrollWidth - window.innerWidth),
            pin: pinWrap,
            invalidateOnRefresh: true,
            scrub: true,
          },
        }
      );
    },
  },
};
</script>
