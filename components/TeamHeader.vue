<template>
  <div class="fixed right-0 left-0 font-medium bg-transparent text-black/70 z-10">
    <div class="bg-light-red my-6 flex h-24 rounded-2xl md:h-20 items-center justify-between px-4 md:px-10 text-white lg:text-grey-2 w-full max-w-[1240px] mx-auto">
      <nuxt-link to="/">
        <img class="w-[135px] h-[40px]" src="/img/team-logo.png" />
      </nuxt-link>
      <button ref="hamburger" class="lg:hidden" @click="open = !open">
        <Icon name="ic:round-menu" size="24px" color="#800020" />
      </button>
      <ul class="navbar-links flex items-start" :class="{ 'navbar-links--navopen': open }" v-click-outside="close">
        <button class="lg:hidden absolute right-3" @click="open = !open">
          <Icon name="ic:round-close" size="24px" color="#800020" />
        </button>
        <ul class="flex flex-col lg:flex-row lg:items-center gap-4 mt-10 lg:mt-0 lg:gap-8">
          <!-- <li @click="open = !open"><nuxt-link to="/">Home</nuxt-link></li> -->
          <li @click="open = !open"><nuxt-link to="/#about">About Us</nuxt-link></li>
          <li @click="open = !open"><nuxt-link to="/#services">Services</nuxt-link></li>
          <li @click="open = !open"><nuxt-link to="#">Join Our Team</nuxt-link></li>
          <li @click="open = !open"><nuxt-link to="/">Blog</nuxt-link></li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const scrolled = ref(false);
const open = ref(false);
const close = (e:HTMLInputElement) => {
  if (e.target.tagName !== 'svg' && e.target.tagName !== 'path') {
    open.value = false;
  }
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 0
}

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', handleScroll);
}
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: $primary;
}
.navbar {

  &-links {
    display: flex;
    // align-items: center;
    list-style-type: none;

    &__item {
      margin: 0;
      a:not([data-type=button]) {
        color: $grey-2;
        text-decoration: none;
        &:hover {
          opacity: 0.9;
          color: $grey-2;
        }
        @media screen and (min-width: 768px) {
          padding-left: 15px;
          padding-right: 15px;
        }
        &.drop {
          color: $grey-2;
          padding: 0;
        }
      }

      // button:not([data-type=button]) {
      //   color: $black;
      //   font-weight: 700;
      //   border-radius: 8px;
      //   min-height: 50px;
      //   min-width: 170px;
      // }
    }

    &__city {
      width: 300px;
    }
    &__about {
      width: 260px;
    }

    @media screen and (max-width: 1023px) {
      transform: translateX(500px);
      // pointer-events: none;
      position: fixed;
      transition: transform .2s ease-out;
      display: flex;
      flex-direction: column;
      padding-top: 20px;
      padding-left: 30px !important;
      padding-right: 30px;
      top: 0;
      bottom: 0;
      right: 0;
      width: 500px;
      max-width: 100vw;
      background-color: $neutral;
      z-index: 100;
      &__toggle {
        display: none;
      }
      &--navopen {
        transform: translateX(0);
        pointer-events: all;

        .navbar-links__toggle {
          display: block;
          position: fixed;
          top: 50px;
          right: 20px;
          background: none;
          border: none;
        }

        .navbar-links__item {
          text-align: left;
          margin: 20px 0;
          width: 100%;

          .btn {
            width: 100%;
          }
        }
      }
    }
  }

  &__toggle {
    background: none;
    border: none;

    div {
      background-color: $black;
      height: 3px;
      border-radius: 2px;
      margin: 4px;
      &:nth-child(2) {
        width: 20px;
      }

      &:nth-child(3) {
        width: 15px;
      }

      &:last-child {
        width: 9px;
      }
    }
  }
  &-scroll {
    box-shadow: 1px 2px 18px rgba(255, 255, 255, 0.1);
    background-color: $grey-2 !important;
    // background-color: transparent !important;
  }
}
</style>